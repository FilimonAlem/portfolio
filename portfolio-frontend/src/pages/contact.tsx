import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  website: string; // honeypot
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = () => {
    if (form.website.trim() !== "") return "Spam detected.";
    if (form.name.trim().length < 2) return "Please enter your name.";
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

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.error || `Error ${res.status}: submission failed`
        );
      }

      setSuccess("Thanks! Your message was sent.");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md"
      aria-describedby="form-status"
    >
      <h2 className="text-2xl text-black font-semibold mb-6">Contact Me</h2>

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

      <div className="mb-4">
        <label htmlFor="name" className="block text-black text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full text-black rounded border p-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Your name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-black text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded text-blue-500 border p-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-black text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full text-black rounded border p-2 h-32 resize-vertical focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Tell me about your project or question..."
          required
        />
      </div>

      <label style={{ display: "none" }}>
        Website
        <input name="website" value={form.website} onChange={handleChange} />
      </label>

      <div className="flex items-center gap-4 mt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        <button
          type="button"
          onClick={() => {
            setForm({ name: "", email: "", message: "", website: "" });
            setError(null);
            setSuccess(null);
          }}
          className="text-sm underline"
        >
          Reset
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-600">
        By sending, you agree to receive a reply to the email you provide.
      </p>
    </form>
  );
}
