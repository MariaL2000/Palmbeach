import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// En lugar de export default NextAuth(authConfig).auth,
// lo asignamos para exportarlo como 'proxy'
const { auth } = NextAuth(authConfig);

export const proxy = auth;

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|logo.png).*)"],
};
