/**
 * Centralized WhatsApp URL factory for KORIAKI IMPORT.
 *
 * All WhatsApp links in the app should go through this module.
 * Never hardcode wa.me URLs inline — use these helpers instead.
 */

import { representatives } from "./representatives";

function getBase(phone: string) {
  return `https://wa.me/${phone}`;
}

function waUrl(message: string, phone: string = representatives.toyota.phone) {
  return `${getBase(phone)}?text=${encodeURIComponent(message)}`;
}

function sortedBrands(brands: string[]) {
  return [...brands].sort((a, b) => b.length - a.length);
}

function detectRepresentative(text: string) {
  const lower = text.toLowerCase();

  for (const brand of sortedBrands(representatives.toyota.brands)) {
    if (lower.includes(brand.toLowerCase())) {
      return representatives.toyota;
    }
  }

  for (const brand of sortedBrands(representatives.ford.brands)) {
    if (lower.includes(brand.toLowerCase())) {
      return representatives.ford;
    }
  }

  return null;
}

function resolvePhone(text: string): string {
  return detectRepresentative(text)?.phone ?? representatives.toyota.phone;
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
  const message =
    `Hola KORIAKI IMPORT 👋 Vi la conversión *${kitName}* y me interesa saber disponibilidad y precios. ¿Pueden asesorarme?`;
  return waUrl(message, resolvePhone(kitName));
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

  const message =
    `Hola KORIAKI IMPORT 👋 Tengo un *${model}* (${year}) y me interesa cotizar: *${need}*. ¿Tienen disponibilidad y pueden enviarme información?`;

  const rep = detectRepresentative(
    `${model} ${need}`
  );

  return waUrl(
    message,
    rep?.phone ?? representatives.toyota.phone
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

  const message = `Hola KORIAKI IMPORT 👋 Me interesa cotizar: *${name}* (${categoryTitle})${
    compatible ? ` — compatible con ${compatible}` : ""
  }. ¿Tienen disponibilidad?`;

  const rep = detectRepresentative(
    `${name} ${categoryTitle} ${fits.join(" ")}`
  );

  return waUrl(
    message,
    rep?.phone ?? representatives.toyota.phone
  );
}

// ─── Quotation List (multi-product) ────────────────────────────────────────

export interface QuotationItem {
  name: string;
  qty: number;
  fits?: string[];
}

export function waQuotationList(items: QuotationItem[]): string {
  if (!items.length) return waContact;
  const lines = items
    .map((i) => `  • ${i.name}${i.qty > 1 ? ` (x${i.qty})` : ""}`)
    .join("\n");
  const context = items
    .map((i) => `${i.name} ${(i.fits ?? []).join(" ")}`)
    .join(" ");
  return waUrl(
    `Hola KORIAKI IMPORT 👋 Quisiera cotizar los siguientes productos:\n\n${lines}\n\n¿Pueden confirmar disponibilidad y enviarme precios?`,
    resolvePhone(context)
  );
}
