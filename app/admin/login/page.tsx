"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md border border-primary/10">
        <h1 className="text-3xl font-serif italic text-primary mb-6">
          Admin Login
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Solo administradores autorizados pueden acceder.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--buttons)] text-[#0A192F] py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← Volver al sitio
          </Link>
        </div>
      </div>
    </div>
  );
}
