"use client";
import { useActionState } from "react";
import { authenticate } from "@/actions/auth-actions";
import { lora, libreBaskerville } from "@/app/fonts/fonts";

export default function AdminLogin() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-50 ${lora.className}`}
    >
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">
        <div className="text-center mb-8">
          <h1
            className={`${libreBaskerville.className} text-3xl font-bold text-[#0A192F]`}
          >
            Admin Access
          </h1>
          <p className="text-xs uppercase tracking-widest text-[var(--buttons)] font-black mt-2">
            Medra ProWorks
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--buttons)] outline-none text-black transition-all"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--buttons)] outline-none text-black transition-all"
            required
          />

          {errorMessage && (
            <p className="text-red-500 text-xs font-bold bg-red-50 p-3 rounded-lg border border-red-100 italic">
              {errorMessage}
            </p>
          )}

          <button
            disabled={isPending}
            className="w-full bg-[#0A192F] text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[var(--buttons)] hover:text-[#0A192F] transition-all disabled:opacity-50"
          >
            {isPending ? "Verifying..." : "Login to Panel"}
          </button>
        </form>
      </div>
    </div>
  );
}
