import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    qualities: [75, 85, 90],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Mantenemos serverActions pero con la sintaxis estándar de Next.js 14/15
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb", // Subí a 4mb para fotos de alta calidad
    },
  },
  // Esta línea ayuda a Vercel a manejar correctamente las rutas con Middleware
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
