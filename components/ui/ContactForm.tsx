"use client";

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const services = [
  "AC Installation / Replacement",
  "AC Repair & Tune-Up",
  "Ductless Mini-Split",
  "Heating / Boiler / Furnace",
  "Heat Pump",
  "Commercial HVAC",
  "Indoor Air Quality",
  "Plumbing",
  "Emergency Service",
  "Other",
];

// Generate a simple math question for human verification
function generateMathQuestion(): { question: string; answer: number } {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const ops = ["+", "-"] as const;
  const op = ops[Math.floor(Math.random() * ops.length)];
  const answer = op === "+" ? a + b : a - b;
  return { question: `${a} ${op} ${b}`, answer };
}

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [mathQ, setMathQ] = useState({ question: "", answer: 0 });
  const [mathInput, setMathInput] = useState("");
  const formLoadTime = useRef(Date.now());

  useEffect(() => {
    setMathQ(generateMathQuestion());
    formLoadTime.current = Date.now();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Anti-spam check 1: honeypot field must be empty
    if (data.get("website")) {
      setFormState("idle");
      return;
    }

    // Anti-spam check 2: time-based (min 3 seconds)
    const elapsed = (Date.now() - formLoadTime.current) / 1000;
    if (elapsed < 3) {
      setFormState("error");
      setErrorMsg("Please take a moment to review your submission.");
      return;
    }

    // Anti-spam check 3: math CAPTCHA
    const userAnswer = parseInt(mathInput.trim(), 10);
    if (isNaN(userAnswer) || userAnswer !== mathQ.answer) {
      setFormState("error");
      setErrorMsg("Incorrect answer to the security question. Please try again.");
      setMathQ(generateMathQuestion());
      setMathInput("");
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      service: data.get("service"),
      message: data.get("message"),
      website: data.get("website"), // honeypot
      formLoadTime: formLoadTime.current,
      mathAnswer: userAnswer,
      mathQuestion: mathQ.question,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setFormState("success");
        form.reset();
        setMathQ(generateMathQuestion());
        setMathInput("");
        formLoadTime.current = Date.now();
      } else {
        setFormState("error");
        setErrorMsg(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (formState === "success") {
    return (
      <div className="bg-white p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3
          className="font-display text-3xl font-700 text-[#0B1D3A] uppercase tracking-wide mb-3"
          style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
        >
          Message Sent!
        </h3>
        <p className="text-gray-600 max-w-sm">
          Thanks for reaching out. We'll review your request and get back to you
          within 24 hours (usually much sooner).
        </p>
        <button
          onClick={() => { setFormState("idle"); setMathQ(generateMathQuestion()); formLoadTime.current = Date.now(); }}
          className="mt-6 text-blue-600 hover:text-orange-500 text-sm font-semibold transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white p-8 md:p-10">
      {/* HONEYPOT — must be invisible to humans */}
      <div aria-hidden="true" className="absolute left-[-9999px] w-0 h-0 overflow-hidden">
        <label htmlFor="website">Leave this empty</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="form-label">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="form-input"
            autoComplete="name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-orange-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            className="form-input"
            autoComplete="tel"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="form-input"
            autoComplete="email"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="form-label">
            Service Needed
          </label>
          <select id="service" name="service" className="form-input" defaultValue="">
            <option value="" disabled>Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="form-label">
            Message / Project Details <span className="text-orange-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project — type of work, home size, urgency, any concerns…"
            className="form-input resize-none"
          />
        </div>

        {/* Math CAPTCHA */}
        <div className="sm:col-span-2">
          <label htmlFor="math-captcha" className="form-label">
            Quick Security Check: What is{" "}
            <span className="font-bold text-blue-700">{mathQ.question}</span>?{" "}
            <span className="text-orange-500">*</span>
          </label>
          <input
            id="math-captcha"
            type="number"
            required
            value={mathInput}
            onChange={(e) => setMathInput(e.target.value)}
            placeholder="Enter the answer"
            className="form-input max-w-[200px]"
            autoComplete="off"
          />
        </div>
      </div>

      {/* Error Message */}
      {formState === "error" && (
        <div className="mt-5 flex items-center gap-3 text-red-600 bg-red-50 border border-red-100 px-4 py-3 text-sm">
          <AlertCircle size={16} className="flex-shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Privacy note */}
      <p className="text-gray-400 text-xs mt-5 leading-relaxed">
        Your information is never shared or sold. By submitting, you agree to
        be contacted by JM Heights regarding your inquiry.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="mt-6 w-full flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold tracking-wider uppercase text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 active:translate-y-0"
        style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed'", fontWeight: 700 }}
      >
        {formState === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending Your Message…
          </>
        ) : (
          <>
            <Send size={16} />
            Send My Message — It's Free
          </>
        )}
      </button>
    </form>
  );
}
