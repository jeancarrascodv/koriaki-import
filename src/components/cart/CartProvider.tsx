"use client";

/**
 * QuotationProvider — replaces the former CartProvider.
 *
 * This is NOT a shopping cart. It is a quotation list.
 * - No prices stored or displayed
 * - No totals calculated
 * - Items are just product IDs + optional qty for the WA message
 * - The WA message asks for availability and a personalized quote
 *
 * Exported as useQuotation() and QuotationProvider.
 * Also exports useCart / CartProvider as aliases for backward compatibility
 * until all import sites are updated.
 */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { allProducts, site, type FlatProduct } from "@/data/site";
import { waQuotationList } from "@/lib/wa";

const STORAGE = "koriaki-quotation";

type QuotationItem = { p: FlatProduct; qty: number };

type QuotationCtx = {
  items: QuotationItem[];
  count: number;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  waHref: string;
};

const Ctx = createContext<QuotationCtx | null>(null);

export function useQuotation(): QuotationCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useQuotation must be used within QuotationProvider");
  return ctx;
}

/** Backward-compat alias — prefer useQuotation() in new code */
export const useCart = useQuotation;

export function QuotationProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  // Persist as simple array of IDs (no prices, no quantities needed)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setIds(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(ids));
    } catch {}
  }, [ids]);

  const add = (id: string) => {
    setIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setOpen(true);
  };

  const remove = (id: string) =>
    setIds((prev) => prev.filter((x) => x !== id));

  const clear = () => setIds([]);

  const items: QuotationItem[] = useMemo(
    () =>
      ids
        .map((id) => {
          const p = allProducts.find((x) => x.id === id);
          return p ? { p, qty: 1 } : null;
        })
        .filter(Boolean) as QuotationItem[],
    [ids]
  );

  const count = items.length;

  const waHref = useMemo(() => {
    if (!items.length) return `https://wa.me/${site.whatsapp}`;
    return waQuotationList(items.map((i) => ({ name: i.p.name, qty: 1 })));
  }, [items]);

  return (
    <Ctx.Provider value={{ items, count, add, remove, clear, open, setOpen, waHref }}>
      {children}
    </Ctx.Provider>
  );
}

/** Backward-compat alias — prefer QuotationProvider in new code */
export const CartProvider = QuotationProvider;
