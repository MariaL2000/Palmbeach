"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function uploadProjectAction(formData: FormData) {
  const session = await auth();

  // Protección de ruta a nivel de servidor
  if (!session || (session.user as any).role !== "ADMIN") {
    throw new Error("Unauthorized: Admin access required");
  }

  const url = formData.get("url") as string;
  const publicId = formData.get("publicId") as string;
  const category = formData.get("category") as string;
  const title = formData.get("title") as string;

  try {
    const newImage = await prisma.projectImage.create({
      data: {
        url,
        publicId,
        category,
        title,
      },
    });

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true, data: newImage };
  } catch (error) {
    return { success: false, error: "Database error" };
  }
}
