import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminPage = nextUrl.pathname.startsWith("/admin");

      if (isAdminPage) {
        if (isLoggedIn) return true; // DEJAMOS ENTRAR A CUALQUIERA LOGUEADO
        return false; // Redirige a /admin/login
      }
      return true;
    },
  },
  providers: [],
};
