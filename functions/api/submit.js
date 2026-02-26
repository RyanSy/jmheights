export async function onRequestPost({ request, env }) {
    const formData = await request.formData();
    const name = formData.get('name')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'JM Heights <info@jmheights.com>',
        to: 'jmheightscorp@gmail.com',
        subject: 'Website Form Submission',
        html: `<p>
          Name: ${name} <br>
          Phone: ${phone} <br>
          Email: ${email} <br>
          Message: ${message} <br>
        </p>`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${await response.text()}`);
    }

    return Response.redirect(`${env.CF_PAGES_URL}/success.html`, 303);
  } catch (err) {
      console.error('Email send failed:', err);
    return Response.redirect(`${env.CF_PAGES_URL}/error.html`, 303);
  }
};