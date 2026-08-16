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

const SITE_URL = "https://medraproworks.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Medra ProWorks | Luxury Flooring & High-End Architectural Surfaces in Florida",
    template: "%s | Medra ProWorks",
  },
  description:
    "Transforming Florida's most exclusive architectural spaces with elite epoxy flooring, luxury tile installation, marble, concrete, and high-end floor coatings. Licensed & Insured FL CGC #1530912.",
  keywords: [
    "luxury flooring Florida",
    "epoxy flooring Palm Coast",
    "high-end floor coatings",
    "architectural surfaces Florida",
    "marble tile installation",
    "custom concrete flooring",
    "Medra ProWorks",
    "commercial and residential flooring Florida",
  ],
  authors: [{ name: "Medra ProWorks" }],
  creator: "Medra ProWorks",
  publisher: "Medra ProWorks",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Medra ProWorks | Luxury Flooring & Architectural Surfaces",
    description:
      "Elite floor transformations, premium epoxy, marble, and custom architectural finishes across Palm Coast and surrounding Florida areas.",
    siteName: "Medra ProWorks",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Medra ProWorks - Luxury Flooring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medra ProWorks | Luxury Flooring in Florida",
    description:
      "High-end floor coatings, custom epoxy, and tile installation for luxury architectural spaces.",
    images: [`${SITE_URL}/logo.png`],
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
    google: "tu-codigo-de-verificacion-de-google-search-console",
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
        {/* LocalBusiness Schema JSON-LD para SEO Local perfecto */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Medra ProWorks",
              image: `${SITE_URL}/logo.png`,
              "@id": SITE_URL,
              url: SITE_URL,
              telephone: "+19043472708",
              email: "medraproworks@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Palm Way",
                addressLocality: "Palm Coast",
                addressRegion: "FL",
                postalCode: "32137",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.5847,
                longitude: -81.2079,
              },
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
              areaServed: ["Palm Coast, FL", "Surrounding Florida Areas"],
              priceRange: "$$$",
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
