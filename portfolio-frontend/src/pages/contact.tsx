import React, { useState } from "react";

/**
 * ContactForm.tsx
 * A ready-to-drop-in, accessible contact form component written in React + TypeScript.
 * - Uses Tailwind CSS classes for styling (remove or replace if you don't use Tailwind)
 * - Client-side validation for name, email, message
 * - Honeypot field to reduce spam
 * - Sends JSON POST to /api/contact by default (adjust endpoint as needed)
 *
 * How to use:
 * 1. Place this file in your React project (e.g. src/components/ContactForm.tsx).
 * 2. Ensure Tailwind (or your preferred CSS) is available — the classes are optional.
 * 3. Implement a server endpoint at /api/contact that accepts JSON:
 *    { name, email, subject, message }
 *    and returns 200 on success or 4xx/5xx on error.
 * 4. Or wire the `submitUrl` prop to a service like Formspree / Netlify Function / Vercel Serverless.
 */

type Props = {
  submitUrl?: string; // defaults to /api/contact
  subjectPlaceholder?: string;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  // honeypot
  website: string;
};

export default function ContactForm({
  submitUrl = "/api/contact",
  subjectPlaceholder = "Subject (optional)",
}: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = () => {
    if (form.website.trim() !== "") return "Spam detected."; // honeypot filled
    if (form.name.trim().length < 2) return "Please enter your name.";
    // simple email check
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return "Please enter a valid email.";
    if (form.message.trim().length < 10)
      return "Message must be at least 10 characters.";
    return null;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Server returned ${res.status}`);
      }

      setSuccess("Thanks! Your message was sent.");
      setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md"
      aria-describedby="form-status"
    >
      <h2 className="text-2xl font-semibold mb-3">Contact me</h2>

      {error && (
        <div
          id="form-status"
          role="alert"
          className="mb-4 text-sm text-red-700 bg-red-100 p-2 rounded"
        >
          {error}
        </div>
      )}

      {success && (
        <div
          id="form-status"
          role="status"
          className="mb-4 text-sm text-green-800 bg-green-100 p-2 rounded"
        >
          {success}
        </div>
      )}

      <label className="block mb-3">
        <span className="text-sm font-medium">Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring"
          placeholder="Your name"
          required
          aria-required="true"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring"
          placeholder="you@example.com"
          required
          aria-required="true"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">{subjectPlaceholder}</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded border p-2 focus:outline-none focus:ring"
          placeholder="(optional)"
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded border p-2 h-32 resize-vertical focus:outline-none focus:ring"
          placeholder="Tell me about your project or question..."
          required
          aria-required="true"
        />
      </label>

      {/* Honeypot - visually hidden but present for bots */}
      <label style={{ display: "none" }}>
        <span>Website</span>
        <input name="website" value={form.website} onChange={handleChange} />
      </label>

      <div className="flex items-center gap-3 mt-4">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-4 py-2 rounded bg-slate-800 text-white disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send message"}
        </button>

        <button
          type="button"
          onClick={() => {
            setForm({
              name: "",
              email: "",
              subject: "",
              message: "",
              website: "",
            });
            setError(null);
            setSuccess(null);
          }}
          className="text-sm underline"
        >
          Reset
        </button>
      </div>

      <p className="mt-3 text-xs text-slate-600">
        By sending, you agree to receive a reply to the email you provide. No
        spam — ever.
      </p>
    </form>
  );
}

/*
Server example (Node/Express) - place behind /api/contact

app.post('/api/contact', express.json(), async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).send('Missing fields');

  // TODO: send email using your provider (SendGrid, Mailgun, SES), or store in DB
  // Example (pseudo): await sendEmail({ to: 'you@domain.com', subject: `[Portfolio] ${subject}`, body: ... })

  res.status(200).send('OK');
});

Notes & tips:
- If you use Netlify Forms or Formspree, you'll need to adapt the form attributes and/or POST URL.
- For spam protection consider rate-limiting on the server and using reCAPTCHA (server-side verify required).
- Keep UX snappy: optimistic UI patterns (show success early) work well but validate on server too.
*/
