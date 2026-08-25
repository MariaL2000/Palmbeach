import type { Metadata } from "next";
import MaterialsClient from "./MaterialsClient";

const SITE_URL = "https://www.medraproworks.com";
const LOGO_URL = `${SITE_URL}/medrapro.png`;
const MATERIALS_URL = `${SITE_URL}/materials`;

export const metadata: Metadata = {
  title: "Architectural Flooring Materials & Finishes | Medra ProWorks",
  description:
    "Explore elite architectural flooring materials, luxury tile, marble, and custom concrete coatings available in Palm Coast and Jacksonville, Florida.",
  alternates: {
    canonical: MATERIALS_URL,
  },
  openGraph: {
    title: "Architectural Flooring Materials & Finishes | Medra ProWorks",
    description:
      "Explore elite architectural flooring materials, luxury tile, marble, and custom concrete coatings in Florida.",
    url: MATERIALS_URL,
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 192,
        height: 192,
        alt: "Medra ProWorks Logo",
      },
    ],
  },
};

export default function MaterialsPage() {
  return (
    <>
      {/* Schema específico para la página de materiales/catálogo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Architectural Flooring Materials & Finishes | Medra ProWorks",
            url: MATERIALS_URL,
            description:
              "Explore elite architectural flooring materials, luxury tile, marble, and custom concrete coatings available in Palm Coast and Jacksonville, Florida.",
            publisher: {
              "@type": "HomeAndConstructionBusiness",
              name: "Medra ProWorks",
              logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
              },
            },
          }),
        }}
      />
      <MaterialsClient />
    </>
  );
}
