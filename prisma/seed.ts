import { prisma } from "../lib/prisma";

async function main() {
  console.log("--- Borrando registros previos ---");

  await prisma.projectImage.deleteMany();
  await prisma.user.deleteMany();

  console.log("--- Insertando Usuario Admin ---");
  await prisma.user.create({
    data: {
      email: "admin@luxuryfloors.com",
      name: "Lesyanis Admin",
      password: "hash_password_here",
      role: "ADMIN",
    },
  });

  console.log("--- Insertando Imágenes de Proyecto ---");
  const gallery = [
    {
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070",
      publicId: "s1",
      category: "Epoxy",
    },
    {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070",
      publicId: "s2",
      category: "Marble",
    },
  ];

  // Patrón XHOP-DIT: Inserción controlada
  for (const img of gallery) {
    await prisma.projectImage.create({
      data: img,
    });
  }

  console.log("Seed ejecutado correctamente ✅");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
})();
