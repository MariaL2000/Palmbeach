import { prisma } from "../lib/prisma";

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminName = process.env.ADMIN_NAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminName || !adminPassword) {
    throw new Error(
      "Faltan las variables de entorno requeridas para el administrador (ADMIN_EMAIL, ADMIN_NAME, ADMIN_PASSWORD).",
    );
  }

  console.log("--- Limpiando base de datos ---");

  await prisma.projectImage.deleteMany();
  await prisma.user.deleteMany();

  console.log("--- Insertando Usuario Admin ---");
  await prisma.user.create({
    data: {
      email: adminEmail,
      name: adminName,
      password: adminPassword,
      role: "ADMIN",
    },
  });

  console.log("--- Insertando Imágenes Locales (a1 - a16) ---");

  const categories = ["Epoxy", "Marble", "Concrete", "Wood", "Stone"];

  for (let i = 1; i <= 16; i++) {
    await prisma.projectImage.create({
      data: {
        url: `/portfoliof/a${i}.jpg`,
        publicId: `local-seed-${i}`,
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
