"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useCart } from "./CartProvider";
import { WhatsAppIcon } from "../Icons";

const pen = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

export function CartDrawer() {
  const { items, total, setQty, open, setOpen, waHref } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-steel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h2 className="font-display text-xl uppercase">Tu cotización</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center text-white/50">
                  <div>
                    <ShoppingCart className="mx-auto h-10 w-10 text-white/25" />
                    <p className="mt-3 text-sm">
                      Tu lista está vacía.
                      <br />
                      Agrega productos para cotizar.
                    </p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map(({ p, qty }) => (
                    <li key={p.id} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                        <Image src={p.image} alt={p.name} fill sizes="80px" className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <span className="text-sm font-semibold leading-tight">{p.name}</span>
                        <span className="font-cond text-sm font-bold text-accent-2">{pen.format(p.price)}</span>
                        <div className="mt-auto flex items-center gap-2">
                          <button onClick={() => setQty(p.id, qty - 1)} className="grid h-7 w-7 place-items-center rounded-md border border-white/15 hover:bg-white/10"><Minus className="h-3.5 w-3.5" /></button>
                          <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                          <button onClick={() => setQty(p.id, qty + 1)} className="grid h-7 w-7 place-items-center rounded-md border border-white/15 hover:bg-white/10"><Plus className="h-3.5 w-3.5" /></button>
                          <button onClick={() => setQty(p.id, 0)} aria-label="Quitar" className="ml-auto grid h-7 w-7 place-items-center rounded-md text-white/45 hover:bg-white/10 hover:text-accent"><Trash2 className="h-3.5 w-3.5" /></button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Total estimado</span>
                <span className="font-cond text-2xl font-bold text-accent-2">{pen.format(total)}</span>
              </div>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-cond text-base font-bold uppercase tracking-wide transition ${
                  items.length ? "bg-[#25D366] text-black hover:scale-[1.02]" : "cursor-not-allowed bg-white/10 text-white/40"
                }`}
                onClick={(e) => { if (!items.length) e.preventDefault(); }}
              >
                <WhatsAppIcon className="h-5 w-5" /> Pedir por WhatsApp
              </a>
              <p className="mt-2 text-center text-[11px] text-white/40">
                Precios referenciales · sujetos a confirmación de stock
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
