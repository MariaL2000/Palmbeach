import type { Metadata } from "next";
import MaterialsClient from "./MaterialsClient";

export const metadata: Metadata = {
  title: "Architectural Flooring Materials & Finishes | Medra ProWorks",
  description:
    "Explore elite architectural flooring materials, luxury tile, marble, and custom concrete coatings available in Palm Coast and Jacksonville, Florida.",
  alternates: {
    canonical: "https://www.medraproworks.com/materials",
  },
  openGraph: {
    title: "Architectural Flooring Materials & Finishes | Medra ProWorks",
    description:
      "Explore elite architectural flooring materials, luxury tile, marble, and custom concrete coatings in Florida.",
    url: "https://www.medraproworks.com/materials",
    type: "website",
  },
};

export default function MaterialsPage() {
  return <MaterialsClient />;
}
