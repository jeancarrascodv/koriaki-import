import type { Metadata } from "next";
import { Marketplace } from "@/components/Marketplace";

export const metadata: Metadata = {
  title: "Catálogo — Kits de conversión y accesorios 4x4",
  description:
    "Catálogo KORIAKI IMPORT: kits de conversión, faros LED, parachoques, guardafangos y accesorios exteriores premium para Toyota Hilux, Fortuner, Prado y Ford Ranger. Solicita tu cotización por WhatsApp.",
};

export default function TiendaPage() {
  return <Marketplace />;
}
