/**
 * Formatting utilities for KORIAKI IMPORT.
 *
 * Note: prices are NOT displayed on the website.
 * formatPEN is kept only for internal WhatsApp message building
 * inside QuotationProvider, where a human-readable price reference
 * may still be useful in the message body.
 *
 * Do NOT use formatPEN in any UI component.
 */

export const formatPEN = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});
