import { prisma } from "../lib/prisma";

async function main() {
  console.log("--- Limpiando base de datos ---");

  await prisma.projectImage.deleteMany();
  await prisma.user.deleteMany();

  console.log("--- Insertando Usuario Admin ---");
  await prisma.user.create({
    data: {
      email: "medraproworks@gmail.com",
      name: "Admin",
      password: "arianmarreromedrano1",
      role: "ADMIN",
    },
  });

  console.log("--- Insertando Imágenes Locales (a1 - a10) ---");

  // Generamos las 10 imágenes locales dinámicamente
  const categories = ["Epoxy", "Marble", "Concrete", "Wood", "Stone"];

  for (let i = 1; i <= 16; i++) {
    await prisma.projectImage.create({
      data: {
        url: `/portfolio/a${i}.jpg`, // Ruta local en public/portfolio/aX.jpg
        publicId: `local-seed-${i}`, // ID ficticio para evitar nulos
        category: categories[i % categories.length],
        title: `Elite Project ${i}`,
        active: true,
      },
    });
  }

  console.log("Seed ejecutado correctamente ✅");
}

(() => {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
})();
