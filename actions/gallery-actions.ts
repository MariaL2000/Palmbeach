"use server";

import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Obtiene proyectos paginados para la galería pública
 */
export async function getPaginatedProjects(
  page: number = 1,
  limit: number = 9,
) {
  try {
    const skip = (page - 1) * limit;

    const [images, totalCount] = await Promise.all([
      prisma.projectImage.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.projectImage.count(),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      images,
      totalPages,
    };
  } catch (error) {
    console.error("Error fetching paginated projects:", error);
    return { images: [], totalPages: 0 };
  }
}

/**
 * Obtiene todas las imágenes para el panel de administración
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

export async function deleteProjectAction(id: string, publicId: string) {
  try {
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
