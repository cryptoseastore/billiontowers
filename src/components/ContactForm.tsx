"use client";

import { useState, FormEvent } from "react";
import CaptchaChallenge from "./CaptchaChallenge"; // Assuming you have a captcha component or utility

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  website: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (form.website) return;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    // if (!formspreeId) {
    //   setStatus("error");
    //   setErrorMsg("Form is not configured. Set NEXT_PUBLIC_FORMSPREE_ID in your environment.");
    //   return;
    // }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company || undefined,
          message: form.message,
          newsletter,
          _replyto: form.email,
          _subject: `Billion Towers Contact: ${form.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
        setNewsletter(false);
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  if (status === "success") {
    return (
      <div className="border border-brand-green/30 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-normal text-brand-green">Message Sent!</h3>
        <p className="text-body-muted mt-2">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-primary mt-6">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-4" : "space-y-5"} noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => updateField("website", e.target.value)} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name *" id="name" error={errors.name}>
          <input type="text" id="name" value={form.name} onChange={(e) => updateField("name", e.target.value)} className={inputClass(!!errors.name)} />
        </Field>
        <Field label="Email *" id="email" error={errors.email}>
          <input type="email" id="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass(!!errors.email)} />
        </Field>
        <Field label="Phone" id="phone">
          <input type="tel" id="phone" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass(false)} />
        </Field>
        <Field label="Company" id="company">
          <input type="text" id="company" value={form.company} onChange={(e) => updateField("company", e.target.value)} className={inputClass(false)} />
        </Field>
      </div>

      <Field label="Message *" id="message" error={errors.message}>
        <textarea id="message" rows={compact ? 4 : 6} value={form.message} onChange={(e) => updateField("message", e.target.value)} className={inputClass(!!errors.message)} />
      </Field>

      <label className="flex items-center gap-2 text-sm text-[#727272]">
        <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="rounded border-[#232322]/30 text-brand-orange focus:ring-brand-orange" />
        I would like to receive updates and news.
      </label>
      <CaptchaChallenge />
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{errorMsg}</div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "loading" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm text-[#232322]">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full border px-4 py-2.5 text-sm text-[#232322] focus:outline-none focus:ring-2 focus:ring-brand-orange ${
    hasError ? "border-red-300 bg-red-50" : "border-[#232322]/20 bg-white"
  }`;
}
