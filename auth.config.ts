import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/admin/login", // Ruta personalizada de login
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminPage = nextUrl.pathname.startsWith("/admin");
      const isLoginPage = nextUrl.pathname === "/admin/login";

      // Si el usuario intenta ir al login estando ya logueado, mandarlo al panel
      if (isLoginPage) {
        if (isLoggedIn) return Response.redirect(new URL("/admin", nextUrl));
        return true;
      }

      // Proteger rutas de admin
      if (isAdminPage) {
        if (isLoggedIn && (auth.user as any).role === "ADMIN") return true;
        return false; // Redirige automáticamente a /admin/login
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    async session({ session, token }) {
      if (token.role) (session.user as any).role = token.role;
      return session;
    },
  },
  providers: [], // Se añaden en auth.ts para evitar problemas con Prisma en el Edge
};
