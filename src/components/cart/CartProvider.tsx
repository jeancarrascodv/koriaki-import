"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { allProducts, site, type FlatProduct } from "@/data/site";

const STORAGE = "koriaki-cart";

const pen = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

type CartItem = { p: FlatProduct; qty: number };

type CartCtx = {
  cart: Record<string, number>;
  items: CartItem[];
  count: number;
  total: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  waHref: string;
};

const Ctx = createContext<CartCtx | null>(null);

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const add = (id: string, qty = 1) => {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + qty }));
    setOpen(true);
  };
  const setQty = (id: string, qty: number) =>
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  const clear = () => setCart({});

  const items = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const p = allProducts.find((x) => x.id === id);
          return p ? { p, qty } : null;
        })
        .filter(Boolean) as CartItem[],
    [cart]
  );

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.qty * i.p.price, 0);

  const waHref = useMemo(() => {
    if (!items.length) return `https://wa.me/${site.whatsapp}`;
    const lines = items
      .map((i) => `• ${i.p.name} x${i.qty} — ${pen.format(i.p.price * i.qty)}`)
      .join("\n");
    const msg = `Hola KORIAKI IMPORT 👋 Quiero cotizar este pedido:\n\n${lines}\n\n*Total estimado: ${pen.format(
      total
    )}*\n\n¿Me confirman stock y precio de distribuidor?`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [items, total]);

  return (
    <Ctx.Provider
      value={{ cart, items, count, total, add, setQty, clear, open, setOpen, waHref }}
    >
      {children}
    </Ctx.Provider>
  );
}
