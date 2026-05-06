"use client";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { sendContact } from "@/actions/contact";
import { libreBaskerville } from "@/app/fonts/fonts";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Full name required"),
  email: z.string().trim().email("Valid email required"),
  phone: z.string().trim().min(7, "Phone required"),
  message: z.string().trim().min(5, "Message too short"),
});

export default function ContactCard() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      setLoading(false);
      return;
    }

    const res = await sendContact(data);

    if (res.ok) {
      toast.success("Inquiry received. We'll contact you shortly.");
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const inputContainer = "relative group w-full";
  const iconStyle =
    "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--buttons)] transition-colors duration-300";
  const inputClass =
    "w-full bg-gray-50 border-b-2 border-gray-200 pl-12 pr-4 py-4 text-sm focus:border-[var(--buttons)] focus:bg-white outline-none transition-all duration-300 placeholder:text-gray-400 text-[var(--primary)]";

  return (
    <div
      className="bg-white shadow-2xl border-t-[6px] border-[var(--buttons)] relative overflow-hidden"
      id="contact"
    >
      {/* Decoración de fondo sutil */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--buttons)] opacity-5 rounded-full" />

      <div className="p-8 md:p-10">
        <h3
          className={`${libreBaskerville.className} text-2xl md:text-3xl text-[var(--primary)] mb-2 flex items-center gap-3`}
        >
          Request a Quote
        </h3>
        <p className="text-gray-500 text-sm mb-10 font-medium">
          Leave your details and a specialist will contact you{" "}
          <span className="text-[var(--buttons)] font-bold underline">
            within 24 hours
          </span>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={inputContainer}>
              <User size={18} className={iconStyle} />
              <input
                name="name"
                placeholder="Full Name"
                className={inputClass}
                required
              />
            </div>
            <div className={inputContainer}>
              <Mail size={18} className={iconStyle} />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className={inputClass}
                required
              />
            </div>
          </div>

          <div className={inputContainer}>
            <Phone size={18} className={iconStyle} />
            <input
              name="phone"
              placeholder="Phone Number"
              className={inputClass}
              required
            />
          </div>

          <div className={inputContainer}>
            <MessageSquare
              size={18}
              className="absolute left-4 top-5 text-gray-400 group-focus-within:text-[var(--buttons)] transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project (Sq. Ft, desired materials...)"
              className={`${inputClass} min-h-[140px] resize-none pt-4`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--primary)] hover:bg-[var(--buttons)] text-white font-black uppercase tracking-[0.25em] py-6 text-sm transition-all duration-500 flex justify-center items-center gap-3 group shadow-xl active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Send Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
