"use server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(5),
});

export async function sendContact(data: unknown) {
  const result = schema.safeParse(data);

  if (!result.success) {
    return { ok: false, error: "Invalid form data" };
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  const senderEmail = process.env.SENDER_EMAIL; // Ej: contact@medraproworks.com (tu dominio verificado en Resend)

  if (!contactEmail || !senderEmail) {
    console.error(
      "Faltan variables de entorno para el correo (CONTACT_EMAIL o SENDER_EMAIL)",
    );
    return { ok: false };
  }

  try {
    const { name, email, phone, message } = result.data;

    await resend.emails.send({
      from: `Medra ProWorks <${senderEmail}>`, // Debe ser un correo de tu dominio verificado en Resend
      to: [contactEmail], // A dónde te llega la notificación (ej: medraproworks@gmail.com)
      replyTo: email, // ¡Crucial! Permite responderle directo al usuario que llenó el formulario
      subject: `New Inquiry: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #0c2a46;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 15px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-radius: 4px;">${message}</p>
        </div>
      `,
    });

    return { ok: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { ok: false };
  }
}
