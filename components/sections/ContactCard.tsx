"use client";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { sendContact } from "@/actions/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  message: z.string().trim().min(5, "Tell us a bit more").max(600),
});

type FormState = z.infer<typeof schema>;

export default function ContactCard() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);

    const res = await sendContact(form);

    if (res.ok) {
      toast.success("Thanks! We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const field =
    "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--buttons)]/40 transition";

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 md:p-10 shadow-[var(--shadow-elegant)] border border-border/60">
        <h2 className="text-3xl md:text-4xl text-[var(--primary)]">
          Request a Free Quote
        </h2>
        <p className="mt-2 text-gray-500 text-sm">
          Tell us about your project — we'll respond within 24 hours.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            className={field}
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            maxLength={80}
          />
          <input
            className={field}
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={160}
          />
          <input
            className={field + " md:col-span-2"}
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            maxLength={30}
          />
          <textarea
            className={field + " md:col-span-2 min-h-32 resize-y"}
            placeholder="Brief description of your project"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={600}
          />
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 inline-flex justify-center items-center px-6 py-3 rounded-full bg-[var(--buttons)] text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
