import { prisma } from "../lib/prisma";

async function main() {
  console.log("--- Borrando registros previos ---");

  await prisma.projectImage.deleteMany();
  await prisma.user.deleteMany();

  console.log("--- Insertando Usuario Admin ---");
  await prisma.user.create({
    data: {
      email: "medraproworks@gmail.com",
      name: " Admin",
      password: "arianmarreromedrano1",
      role: "ADMIN",
    },
  });

  console.log("--- Insertando Imágenes de Proyecto ---");
  const gallery = [
    {
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070",
      publicId: "s1",
      category: "Epoxy",
      title: "Commercial Gloss",
    },
    {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070",
      publicId: "s2",
      category: "Marble",
      title: "Luxury Hall",
    },
    {
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070",
      publicId: "s3",
      category: "Concrete",
      title: "Industrial Polish",
    },
    {
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070",
      publicId: "s4",
      category: "Wood",
      title: "Premium Oak Finish",
    },
    {
      url: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2070",
      publicId: "s5",
      category: "Epoxy",
      title: "Metallic Blue",
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=2070",
      publicId: "s6",
      category: "Stone",
      title: "Natural Texture",
    },
    {
      url: "https://images.unsplash.com/photo-1527359443443-84a48abc7df0?q=80&w=2070",
      publicId: "s7",
      category: "Concrete",
      title: "Satin Finish",
    },
    {
      url: "https://images.unsplash.com/photo-1589939705384-5185138a0470?q=80&w=2070",
      publicId: "s8",
      category: "Epoxy",
      title: "Elite Warehouse",
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      publicId: "s9",
      category: "Marble",
      title: "Modern Office",
    },
    {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070",
      publicId: "s10",
      category: "Wood",
      title: "Residential Luxury",
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
