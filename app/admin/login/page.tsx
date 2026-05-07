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
      className={`min-h-screen flex items-center justify-center bg-[#F8FAFC] ${lora.className}`}
    >
      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl w-full max-w-md border border-gray-100">
        {/* Cabecera del Formulario */}
        <div className="text-center mb-10">
          <h1
            className={`${libreBaskerville.className} text-3xl font-bold text-[#0A192F]`}
          >
            Admin Access
          </h1>
          <div className="h-1 w-12 bg-[var(--buttons)] mx-auto mt-4 rounded-full"></div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-black mt-4">
            Elite Flooring Manager
          </p>
        </div>

        {/* Formulario */}
        <form action={formAction} className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="admin@example.com"
              required
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-[#0A192F] focus:bg-white focus:border-[var(--buttons)] focus:ring-4 focus:ring-[var(--buttons)]/10 outline-none transition-all placeholder:text-gray-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 ml-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-[#0A192F] focus:bg-white focus:border-[var(--buttons)] focus:ring-4 focus:ring-[var(--buttons)]/10 outline-none transition-all placeholder:text-gray-300"
            />
          </div>

          {/* Mensaje de Error */}
          {errorMessage && (
            <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
              <p className="text-red-600 text-xs font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                {errorMessage}
              </p>
            </div>
          )}

          {/* Botón de Acción */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#0A192F] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-blue-900/20 hover:bg-[var(--buttons)] hover:text-[#0A192F] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verifying Credentials
              </span>
            ) : (
              "Login to Dashboard"
            )}
          </button>
        </form>

        <p className="text-center text-[10px] text-gray-400 mt-8 italic">
          Secure encrypted session
        </p>
      </div>
    </div>
  );
}
