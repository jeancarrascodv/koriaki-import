import type { Metadata } from "next";
import { Marketplace } from "@/components/Marketplace";

export const metadata: Metadata = {
  title: "Tienda — Marketplace de accesorios 4x4",
  description:
    "Marketplace KORIAKI IMPORT: faros LED, aros, defensas, barras LED, pisaderas y más para Toyota Hilux y Ford Raptor. Arma tu pedido con precios de distribuidor y cotiza por WhatsApp.",
};

export default function TiendaPage() {
  return <Marketplace />;
}
