"use server";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

// Configuración de Cloudinary para el borrado físico
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, // Asegúrate de tener estas en .env
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Obtiene todas las imágenes de la DB (ordenadas por las más recientes primero)
 */
export async function getAdminProjects() {
  try {
    return await prisma.projectImage.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/**
 * Sube un nuevo registro de imagen a la DB
 */
export async function uploadProjectAction(formData: FormData) {
  const url = formData.get("url") as string;
  const publicId = formData.get("publicId") as string;

  try {
    await prisma.projectImage.create({
      data: {
        url,
        publicId,
        category: "General",
        title: "Elite Project",
        active: true,
      },
    });
    revalidatePath("/gallery");
    revalidatePath("/admin");
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
}

/**
 * Borra de la DB y, si es de Cloudinary, también borra el archivo físico
 */
export async function deleteProjectAction(id: string, publicId: string) {
  try {
    // Si el publicId no es de nuestro seed local, intentar borrar en Cloudinary
    if (publicId && !publicId.startsWith("local-seed")) {
      await cloudinary.uploader.destroy(publicId);
    }

    await prisma.projectImage.delete({
      where: { id },
    });

    revalidatePath("/gallery");
    revalidatePath("/admin");
    return { ok: true };
  } catch (error) {
    console.error("Delete Error:", error);
    return { ok: false };
  }
}
