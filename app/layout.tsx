import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.medraproworks.com";
const LOGO_URL = `${SITE_URL}/logogog.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Medra ProWorks | Best Flooring Installer in Palm Coast & Jacksonville",
    template: "%s | Medra ProWorks",
  },
  description:
    "Transforming Florida's architectural spaces with elite flooring, luxury tile installation, marble, concrete, and high-end floor coatings. Best flooring installer in Palm Coast, Jacksonville, and surrounding areas. Licensed & Insured FL CGC #1530912. | Instalación de suelos de lujo en Florida.",
  keywords: [
    // --- Inglés: Locales y Específicas ---
    "best flooring installer Palm Coast",
    "luxury flooring Palm Coast",
    "flooring services Jacksonville",
    "flooring installer in Palm Coast",
    "best flooring contractor Florida",
    "top architectural surfaces Jacksonville",
    "marble tile installation Palm Coast",
    "custom concrete flooring Florida",
    "high-end floor coatings Jacksonville",
    "luxury tile installation Palm Coast",
    "residential flooring contractor Florida",
    "commercial flooring services Jacksonville",
    "Medra ProWorks",
    "licensed flooring contractor FL",
    // --- Español: Locales y Específicas ---
    "instalacion de suelos en palm coast",
    "mejor instalador de suelos jacksonville",
    "pisos de lujo en florida",
    "instalacion de ceramica y marmol palm coast",
    "contratista de pisos en jacksonville",
    "pisos de concreto pulido florida",
    "revestimientos de suelos de alta gama",
    "instalador profesional de pisos palm coast",
    "empresa de instalacion de pisos en florida",
  ],
  authors: [{ name: "Medra ProWorks" }],
  creator: "Medra ProWorks",
  publisher: "Medra ProWorks",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logogog.png",
    shortcut: "/logogog.png",
    apple: "/logogog.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title:
      "Medra ProWorks | Best Flooring Installer in Palm Coast & Jacksonville",
    description:
      "Elite floor transformations, premium marble, and custom architectural finishes across Palm Coast, Jacksonville, and surrounding Florida areas.",
    siteName: "Medra ProWorks",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Medra ProWorks - Luxury Flooring & Tile Installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medra ProWorks | Best Flooring Installer in Florida",
    description:
      "High-end floor coatings and tile installation in Palm Coast and Jacksonville.",
    images: [LOGO_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GCGUFh5azyXIsF7N9Ef6bC5asnUyoVLN5oEoz2h-O5A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logogog.png" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9377998824088304"
          crossOrigin="anonymous"
        ></script>

        {/* Schema enriquecido bilingüe y optimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Medra ProWorks",
              image: LOGO_URL,
              "@id": SITE_URL,
              url: SITE_URL,
              telephone: "+19043472708",
              email: "medraproworks@gmail.com",
              priceRange: "$$$",
              areaServed: [
                { "@type": "City", name: "Palm Coast" },
                { "@type": "City", name: "Jacksonville" },
                { "@type": "AdministrativeArea", name: "Flagler County" },
                { "@type": "AdministrativeArea", name: "Duval County" },
                { "@type": "State", name: "Florida" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
