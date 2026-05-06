"use server";

export async function sendContact(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    // Aquí puedes integrar con Resend, Nodemailer, etc.
    console.log("Nuevo contacto:", formData);

    return { ok: true };
  } catch (err) {
    return { ok: false, error: "Server error" };
  }
}
