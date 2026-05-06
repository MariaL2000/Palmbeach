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

  try {
    const { name, email, phone, message } = result.data;

    await resend.emails.send({
      from: "Medra ProWorks <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      subject: `New Inquiry: ${name}`,
      html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { ok: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { ok: false };
  }
}
