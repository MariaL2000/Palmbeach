import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminPage = nextUrl.pathname.startsWith("/admin");
      if (isAdminPage) {
        if (isLoggedIn && (auth.user as any).role === "ADMIN") return true;
        return false;
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
  providers: [
    Credentials({
      async authorize(credentials) {
        // Aquí usarás bcrypt para comparar contraseñas
        return {
          id: "1",
          name: "Admin",
          email: "admin@luxuryfloors.com",
          role: "ADMIN",
        };
      },
    }),
  ],
};
