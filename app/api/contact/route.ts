import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Aquí puedes integrar con un servicio de correo si quieres.
    // Por ahora, lo mantenemos simple: log en el servidor.
    console.log("New contact inquiry:", data);

    // Respuesta exitosa
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
