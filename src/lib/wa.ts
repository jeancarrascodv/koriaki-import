/**
 * Centralized WhatsApp URL factory for KORIAKI IMPORT.
 *
 * All WhatsApp links in the app should go through this module.
 * Never hardcode wa.me URLs inline — use these helpers instead.
 */

import { site } from "@/data/site";

const BASE = `https://wa.me/${site.whatsapp}`;

function waUrl(message: string): string {
  return `${BASE}?text=${encodeURIComponent(message)}`;
}

// ─── General CTAs ──────────────────────────────────────────────────────────

/** Generic "I want more information" — used by the floating FAB */
export const waGeneral = waUrl(
  "Hola KORIAKI IMPORT 👋 Quisiera más información sobre sus productos."
);

/** Nav / header quick-quote button */
export const waQuote = waUrl(
  "Hola KORIAKI IMPORT 👋 Quisiera solicitar una cotización."
);

/** Hero secondary CTA */
export const waHero = waUrl(
  "Hola KORIAKI IMPORT 👋 Vi su catálogo y quisiera conocer disponibilidad y precios."
);

/** Gallery CTA — "Quiero el mío" */
export const waGallery = waUrl(
  "Hola KORIAKI IMPORT 👋 Vi la galería y me interesa cotizar un kit para mi vehículo."
);

/** Featured Conversions CTA — specific kit enquiry */
export function waFeatured(kitName: string): string {
  return waUrl(
    `Hola KORIAKI IMPORT 👋 Vi la conversión *${kitName}* y me interesa saber disponibilidad y precios. ¿Pueden asesorarme?`
  );
}

/** Contact section — request price list */
export const waContact = waUrl(
  "Hola KORIAKI IMPORT 👋 Quisiera recibir información sobre sus kits de conversión y accesorios disponibles."
);

// ─── Vehicle Selector ──────────────────────────────────────────────────────

export interface VehicleQuoteParams {
  model: string;
  year: string;
  need: string;
}

export function waVehicle({ model, year, need }: VehicleQuoteParams): string {
  return waUrl(
    `Hola KORIAKI IMPORT 👋 Tengo un *${model}* (${year}) y me interesa cotizar: *${need}*. ¿Tienen disponibilidad y pueden enviarme información?`
  );
}

// ─── Product ───────────────────────────────────────────────────────────────

export interface ProductQuoteParams {
  name: string;
  categoryTitle: string;
  fits: string[];
}

export function waProduct({ name, categoryTitle, fits }: ProductQuoteParams): string {
  const compatible = fits.filter((f) => f !== "Universal").join(" / ");
  return waUrl(
    `Hola KORIAKI IMPORT 👋 Me interesa cotizar: *${name}* (${categoryTitle})${
      compatible ? ` — compatible con ${compatible}` : ""
    }. ¿Tienen disponibilidad?`
  );
}

// ─── Quotation List (multi-product) ────────────────────────────────────────

export interface QuotationItem {
  name: string;
  qty: number;
}

export function waQuotationList(items: QuotationItem[]): string {
  if (!items.length) return waContact;
  const lines = items
    .map((i) => `  • ${i.name}${i.qty > 1 ? ` (x${i.qty})` : ""}`)
    .join("\n");
  return waUrl(
    `Hola KORIAKI IMPORT 👋 Quisiera cotizar los siguientes productos:\n\n${lines}\n\n¿Pueden confirmar disponibilidad y enviarme precios?`
  );
}
