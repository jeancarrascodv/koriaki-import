import type { Metadata } from "next";
import { Marketplace } from "@/components/Marketplace";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Catálogo — Kits de Conversión y Accesorios 4x4 para Toyota y Ford",
  description:
    "Catálogo KORIAKI IMPORT: kits de conversión Hilux GR Sport, Fortuner Legender, Ranger F150, faros LED, parachoques y guardafangos premium. Importación directa, stock en Lima. Solicita cotización por WhatsApp.",
  alternates: {
    canonical: "https://koriakiimport.com/tienda",
  },
  openGraph: {
    title: "Catálogo KORIAKI IMPORT — Kits de Conversión y Accesorios 4x4",
    description:
      "Explora el catálogo completo de kits de conversión y accesorios exteriores para Toyota Hilux, Fortuner, Prado y Ford Ranger. Importación directa, stock en Lima.",
    url: "https://koriakiimport.com/tienda",
    images: [
      {
        url: "/img/raptor-yellow.jpg",
        width: 1200,
        height: 630,
        alt: "Catálogo KORIAKI IMPORT — accesorios 4x4",
      },
    ],
  },
};

export default function TiendaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "https://koriakiimport.com" },
          { name: "Catálogo", url: "https://koriakiimport.com/tienda" },
        ]}
      />
      <Marketplace />
    </>
  );
}
