"use server";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

// Configuración automática usando tu CLOUDINARY_URL
cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL,
});

/**
 * Acción para obtener solo las imágenes activas (usada en el Home y Gallery)
 */
export async function getActiveProjects() {
  try {
    const projects = await prisma.projectImage.findMany({
      where: { active: true },
      orderBy: { createdAt: "desc" },
    });
    return { data: projects, ok: true };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { data: [], ok: false };
  }
}

/**
 * Acción para obtener todas las imágenes (usada en el panel Admin)
 */
export async function getAdminProjects() {
  try {
    return await prisma.projectImage.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error fetching admin projects:", error);
    return [];
  }
}

/**
 * Acción para subir a DB después de Cloudinary
 */
export async function uploadProjectAction(formData: FormData) {
  const url = formData.get("url") as string;
  const publicId = formData.get("publicId") as string;
  const category = formData.get("category") as string;
  const title = formData.get("title") as string;

  try {
    await prisma.projectImage.create({
      data: {
        url,
        publicId,
        category: category || "General",
        title: title || "Elite Project",
        active: true,
      },
    });
    revalidatePath("/");
    revalidatePath("/gallery");
    return { ok: true };
  } catch (error) {
    console.error("Upload DB Error:", error);
    return { ok: false };
  }
}

/**
 * Acción para eliminar de Cloudinary y DB
 */
export async function deleteProjectAction(id: string, publicId: string) {
  try {
    // 1. Eliminar de Cloudinary físicamente
    await cloudinary.uploader.destroy(publicId);

    // 2. Eliminar de la base de datos
    await prisma.projectImage.delete({
      where: { id },
    });

    revalidatePath("/");
    revalidatePath("/gallery");
    return { ok: true };
  } catch (error) {
    console.error("Delete Action Error:", error);
    return { ok: false };
  }
}
