"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardList, Trash2, X } from "lucide-react";
import { useQuotation } from "./CartProvider";
import { WhatsAppIcon } from "../Icons";

export function CartDrawer() {
  const { items, remove, open, setOpen, waHref } = useQuotation();

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
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h2 className="font-display text-xl uppercase">Mi Cotización</h2>
                <p className="mt-0.5 text-xs text-white/50">
                  {items.length === 0
                    ? "Sin productos aún"
                    : `${items.length} producto${items.length > 1 ? "s" : ""} seleccionado${items.length > 1 ? "s" : ""}`}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Item list */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center text-white/50">
                  <div>
                    <ClipboardList className="mx-auto h-10 w-10 text-white/25" />
                    <p className="mt-3 text-sm">
                      Tu cotización está vacía.
                      <br />
                      Agrega productos para solicitar precios.
                    </p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map(({ p }) => (
                    <li key={p.id} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                        <Image src={p.image} alt={p.name} fill sizes="80px" className="object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <span className="text-sm font-semibold leading-tight line-clamp-2">{p.name}</span>
                          {p.transforms && (
                            <span className="mt-0.5 block text-xs font-medium text-accent">{p.transforms}</span>
                          )}
                          <span className="mt-0.5 block text-xs text-white/45">{p.categoryTitle}</span>
                        </div>
                        <button
                          onClick={() => remove(p.id)}
                          aria-label={`Quitar ${p.name}`}
                          className="mt-1 flex w-fit items-center gap-1 text-xs text-white/40 hover:text-accent"
                        >
                          <Trash2 className="h-3 w-3" /> Quitar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 px-5 py-4">
              <p className="text-xs text-white/50 text-center mb-4">
                Envía tu cotización por WhatsApp para recibir disponibilidad
                y precios personalizados.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-cond text-base font-bold uppercase tracking-wide transition ${
                  items.length
                    ? "bg-[#25D366] text-black hover:scale-[1.02]"
                    : "cursor-not-allowed bg-white/10 text-white/40"
                }`}
                onClick={(e) => { if (!items.length) e.preventDefault(); }}
              >
                <WhatsAppIcon className="h-5 w-5" /> Solicitar Cotización
              </a>
              <button
                onClick={() => setOpen(false)}
                className="mt-3 w-full text-center text-sm text-white/45 hover:text-white"
              >
                Seguir explorando el catálogo
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
