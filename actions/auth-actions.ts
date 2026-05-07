"use server";
import { signIn, signOut } from "@/auth"; // Añadimos signOut aquí
import { AuthError } from "next-auth";

/**
 * Maneja el inicio de sesión
 */
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("LOGIN ATTEMPT:", { email, password });

  if (!email || !password) {
    return "Fields are missing in the request.";
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password.";
        default:
          return "Authentication failed.";
      }
    }
    // IMPORTANTE: Next.js lanza un error para manejar la redirección
    throw error;
  }
}

/**
 * Maneja el cierre de sesión
 */
export async function logout() {
  try {
    // signOut elimina la cookie de sesión y redirige
    await signOut({
      redirectTo: "/admin/login",
      redirect: true,
    });
  } catch (error) {
    // Si es un error de redirección de Next.js, lo lanzamos para que funcione
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }
    console.error("Logout error:", error);
    throw error;
  }
}
