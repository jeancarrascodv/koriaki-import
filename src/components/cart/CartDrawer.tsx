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
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel */}
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0f0f0a] shadow-2xl shadow-black/60"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h2 className="font-display uppercase text-2xl leading-none">Mi Cotización</h2>
                <p className="mt-1.5 text-xs text-white/45">
                  {items.length === 0
                    ? "Sin productos aún"
                    : `${items.length} producto${items.length > 1 ? "s" : ""} seleccionado${items.length > 1 ? "s" : ""}`}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar cotización"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Item list */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      <ClipboardList className="h-8 w-8 text-white/20" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/45">
                      Tu cotización está vacía.
                      <br />
                      Agrega productos para solicitar precios.
                    </p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map(({ p }) => (
                    <li
                      key={p.id}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-18 w-24 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="text-sm font-semibold leading-snug line-clamp-2 text-white">
                            {p.name}
                          </p>
                          {p.transforms && (
                            <p className="mt-1 text-xs font-medium text-accent">
                              {p.transforms}
                            </p>
                          )}
                          <p className="mt-0.5 text-xs text-white/40">{p.categoryTitle}</p>
                        </div>
                        <button
                          onClick={() => remove(p.id)}
                          aria-label={`Quitar ${p.name} de la cotización`}
                          className="mt-2 flex w-fit items-center gap-1.5 text-xs text-white/35 transition-colors hover:text-red-400"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Quitar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 px-6 py-5">
              <p className="mb-4 text-center text-xs leading-relaxed text-white/45">
                Envía tu lista por WhatsApp y recibe disponibilidad
                y precios personalizados sin compromiso.
              </p>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { if (!items.length) e.preventDefault(); }}
                className={`flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 font-cond text-base font-bold uppercase tracking-wide transition-all ${
                  items.length
                    ? "bg-[#25D366] text-black shadow-lg shadow-[#25D366]/25 hover:scale-[1.02] hover:shadow-[#25D366]/40"
                    : "cursor-not-allowed bg-white/8 text-white/30"
                }`}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar Cotización
              </a>

              <button
                onClick={() => setOpen(false)}
                className="mt-3 w-full rounded-full border border-white/10 py-2.5 text-sm text-white/40 transition-colors hover:border-white/25 hover:text-white/70"
              >
                Seguir explorando
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
