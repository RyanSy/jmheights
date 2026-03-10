export const runtime = "edge";

import type { NextRequest } from "next/server";

// In-memory rate limiting (resets per worker instance)
// For production, use Cloudflare KV for persistent rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function isRateLimited(ip: string, maxPerHour = 5): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }

  if (entry.count >= maxPerHour) return true;
  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 5000).replace(/[<>]/g, "");
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);

    // Rate limiting
    if (isRateLimited(ip, parseInt(process.env.RATE_LIMIT_MAX || "5", 10))) {
      return Response.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message, website, formLoadTime, mathAnswer, mathQuestion } = body;

    // Anti-spam: honeypot
    if (website) {
      return Response.json({ success: true }); // Silent accept to fool bots
    }

    // Anti-spam: time-based (minimum 3 seconds)
    const minSeconds = parseInt(process.env.SPAM_MIN_SECONDS || "3", 10);
    const elapsed = (Date.now() - formLoadTime) / 1000;
    if (elapsed < minSeconds) {
      return Response.json(
        { error: "Submission rejected. Please try again." },
        { status: 400 }
      );
    }

    // Anti-spam: math CAPTCHA validation
    if (!mathQuestion || mathAnswer === undefined || mathAnswer === null) {
      return Response.json(
        { error: "Security verification failed." },
        { status: 400 }
      );
    }

    const [aStr, op, bStr] = mathQuestion.split(" ");
    const a = parseInt(aStr, 10);
    const b = parseInt(bStr, 10);
    const expectedAnswer = op === "+" ? a + b : a - b;
    if (parseInt(String(mathAnswer), 10) !== expectedAnswer) {
      return Response.json(
        { error: "Incorrect security answer. Please try again." },
        { status: 400 }
      );
    }

    // Input validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const cleanName = sanitize(String(name));
    const cleanEmail = sanitize(String(email));
    const cleanPhone = sanitize(String(phone || "Not provided"));
    const cleanService = sanitize(String(service || "Not specified"));
    const cleanMessage = sanitize(String(message));

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service not configured. Please call us directly." },
        { status: 500 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || "info@jmheights.com";
    const fromEmail = process.env.CONTACT_EMAIL_FROM || "noreply@jmheights.com";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background: #f8fafc; }
    .container { max-width: 600px; margin: 40px auto; background: #fff; border-top: 4px solid #F97316; }
    .header { background: #0B1D3A; padding: 32px; }
    .header h1 { color: #F97316; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: 1px; text-transform: uppercase; }
    .header p { color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 13px; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #f1f5f9; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 4px; }
    .value { font-size: 16px; color: #1e293b; font-weight: 500; }
    .message { background: #f8fafc; padding: 20px; border-left: 3px solid #F97316; margin-top: 8px; font-size: 15px; line-height: 1.7; }
    .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #94a3b8; }
    .cta { display: inline-block; margin-top: 24px; padding: 12px 28px; background: #F97316; color: white; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; }
  </style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>📋 New Contact Request</h1>
    <p>Submitted via jmheights.com contact form</p>
  </div>
  <div class="body">
    <div class="field">
      <div class="label">Full Name</div>
      <div class="value">${cleanName}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${cleanEmail}" style="color: #1E58D8;">${cleanEmail}</a></div>
    </div>
    <div class="field">
      <div class="label">Phone</div>
      <div class="value"><a href="tel:${cleanPhone}" style="color: #1E58D8;">${cleanPhone}</a></div>
    </div>
    <div class="field">
      <div class="label">Service Requested</div>
      <div class="value">${cleanService}</div>
    </div>
    <div class="field">
      <div class="label">Message</div>
      <div class="message">${cleanMessage.replace(/\n/g, "<br>")}</div>
    </div>
    <a href="mailto:${cleanEmail}?subject=Re: Your JM Heights Inquiry" class="cta">Reply to ${cleanName}</a>
  </div>
  <div class="footer">
    Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} Eastern •
    IP: ${ip} •
    Source: jmheights.com
  </div>
</div>
</body>
</html>
    `.trim();

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `JM Heights Contact Form <${fromEmail}>`,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `New Quote Request: ${cleanService} — ${cleanName}`,
        html: emailHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errData = await resendResponse.text();
      console.error("Resend API error:", errData);
      return Response.json(
        { error: "Failed to send email. Please call us directly." },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `JM Heights <${fromEmail}>`,
        to: [cleanEmail],
        subject: "We received your message — JM Heights",
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, sans-serif; line-height: 1.6; color: #1e293b; margin: 0; padding: 0; background: #f8fafc; }
    .container { max-width: 580px; margin: 40px auto; background: #fff; border-top: 4px solid #F97316; }
    .header { background: #0B1D3A; padding: 36px 32px; text-align: center; }
    .logo-text { color: #F97316; font-size: 28px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; }
    .logo-sub { color: rgba(255,255,255,0.5); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-top: 4px; }
    .body { padding: 40px 32px; }
    h2 { font-size: 24px; color: #0B1D3A; margin: 0 0 16px; }
    p { color: #475569; margin: 0 0 16px; }
    .highlight { background: #fff7ed; border-left: 3px solid #F97316; padding: 16px 20px; margin: 24px 0; }
    .footer { background: #f8fafc; padding: 20px 32px; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
<div class="container">
  <div class="header">
    <div class="logo-text">JM HEIGHTS</div>
    <div class="logo-sub">Roofing & Exteriors</div>
  </div>
  <div class="body">
    <h2>Hi ${cleanName}, we got your message!</h2>
    <p>Thanks for reaching out to JM Heights. We've received your inquiry about <strong>${cleanService}</strong> and will be in touch within 24 hours — usually much sooner during business hours.</p>
    <div class="highlight">
      <strong>Your request summary:</strong><br>
      <span style="color: #64748b; font-size: 14px;">${cleanMessage.slice(0, 200)}${cleanMessage.length > 200 ? "…" : ""}</span>
    </div>
    <p>In the meantime, feel free to call us directly:</p>
    <p style="font-size: 20px; font-weight: bold; color: #0B1D3A;">📞 (555) 123-4567</p>
    <p style="font-size: 13px; color: #94a3b8;">Mon–Fri 7AM–6PM · Sat 8AM–4PM · Emergency services available</p>
  </div>
  <div class="footer">
    © ${new Date().getFullYear()} JM Heights · Licensed & Insured · info@jmheights.com
  </div>
</div>
</body>
</html>
        `.trim(),
      }),
    }).catch(() => {}); // Don't fail the request if confirmation email fails

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
