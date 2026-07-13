"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  X,
  ShieldCheck,
  Truck,
  MessageCircle,
  Check,
} from "lucide-react";
import {
  categorySpecs,
  relatedProducts,
  type FlatProduct,
} from "@/data/site";
import { waProduct } from "@/lib/wa";
import { WhatsAppIcon } from "./Icons";
import { useQuotation } from "./cart/CartProvider";

export function ProductDetail({ product }: { product: FlatProduct }) {
  const { add, setOpen } = useQuotation();
  const [active, setActive] = useState(0);
  const [lb, setLb] = useState(false);

  const gallery = product.gallery;
  const specs = categorySpecs[product.categoryId] ?? [];
  const related = relatedProducts(product, 4);

  const waDirect = waProduct({
    name: product.name,
    categoryTitle: product.categoryTitle,
    fits: product.fits,
  });

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/50">
        <Link href="/" className="hover:text-white">Inicio</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/tienda" className="hover:text-white">Catálogo</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-white/80">{product.categoryTitle}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-12">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            {/* Thumbs */}
            <div className="flex gap-3 sm:flex-col">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActive(i)}
                  className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition sm:h-20 sm:w-20 ${
                    active === i ? "ring-accent" : "ring-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Imagen ${i + 1}`}
                >
                  <Image src={src} alt={`${product.name} ${i + 1}`} fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <button
              onClick={() => setLb(true)}
              className="group relative aspect-square flex-1 overflow-hidden rounded-2xl border border-white/10"
              aria-label="Ampliar imagen"
            >
              <Image
                src={gallery[active]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-black">
                  {product.tag}
                </span>
              )}
              {product.transforms && (
                <span className="absolute bottom-4 left-4 rounded-full border border-accent/40 bg-black/60 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
                  {product.transforms}
                </span>
              )}
              <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                Ampliar
              </span>
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <span className="eyebrow text-[11px] text-accent">{product.categoryTitle}</span>
            <h1 className="font-display uppercase mt-2 text-3xl leading-[1.05] sm:text-4xl">
              {product.name}
            </h1>

            {/* Compatibility badges */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.fits.map((f) => (
                <span key={f} className="rounded-full bg-white/8 px-2.5 py-1 text-xs text-white/70">
                  {f === "Universal" ? "Universal" : `Compatible ${f}`}
                </span>
              ))}
            </div>

            {product.transforms && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5">
                <span className="text-sm font-semibold text-accent">{product.transforms}</span>
                <span className="text-xs text-white/55">· Kit de conversión completo</span>
              </div>
            )}

            <p className="mt-5 text-white/70">{product.desc}</p>

            {/* CTA panel — no price shown */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-steel/60 p-5">
              <p className="text-sm text-white/60">
                Precio disponible por cotización personalizada según modelo,
                año y disponibilidad.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={waDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-6 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-black transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Solicitar cotización
                </a>
                <button
                  onClick={() => { add(product.id); setOpen(true); }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agregar a cotización
                </button>
              </div>
            </div>

            {/* Trust badges — no installation */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-center">
              {[
                { icon: Truck,       t: "Envío a todo el Perú" },
                { icon: ShieldCheck, t: "Garantía incluida"    },
                { icon: Check,       t: "Compatibilidad exacta"},
                { icon: MessageCircle, t: "Asesoría de compra" },
              ].map((b) => (
                <div key={b.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <b.icon className="mx-auto h-5 w-5 text-accent" />
                  <div className="mt-1.5 text-[11px] text-white/60">{b.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description + specs */}
      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display uppercase text-2xl">Descripción</h2>
          <p className="mt-4 leading-relaxed text-white/70">
            {product.desc} En KORIAKI IMPORT importamos directamente{" "}
            {product.name.toLowerCase()} para ofrecerte calidad garantizada a
            precio de importación. Compatible con{" "}
            {product.fits.filter((f) => f !== "Universal").join(" / ") || "múltiples vehículos"}.
            Consúltanos por disponibilidad, colores y compatibilidad con tu año
            específico.
          </p>
          <ul className="mt-5 space-y-2">
            {[
              "Importación directa desde fabricante",
              "Calidad y acabados verificados",
              "Compatibilidad confirmada por modelo y año",
              "Asesoría de compra antes de tu pedido",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-white/75">
                <Check className="h-4 w-4 shrink-0 text-accent" /> {b}
              </li>
            ))}
          </ul>
        </div>

        {specs.length > 0 && (
          <div className="lg:col-span-5">
            <h2 className="font-display uppercase text-2xl">Especificaciones</h2>
            <dl className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              {specs.map((s, i) => (
                <div key={s.label} className={`flex justify-between gap-4 px-5 py-3.5 text-sm ${i % 2 ? "bg-white/[0.02]" : "bg-white/[0.04]"}`}>
                  <dt className="text-white/55">{s.label}</dt>
                  <dd className="text-right font-medium text-white/90">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display uppercase text-2xl sm:text-3xl">También te puede interesar</h2>
            <Link href="/tienda" className="text-sm font-semibold text-accent hover:underline">Ver catálogo →</Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/tienda/${r.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={r.image} alt={r.name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="text-sm font-semibold leading-snug group-hover:text-accent">{r.name}</span>
                  {r.transforms && (
                    <span className="mt-1.5 text-xs font-medium text-accent">{r.transforms}</span>
                  )}
                  <span className="mt-2 text-xs text-white/50">{r.categoryTitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile sticky bar — no price */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="text-sm font-semibold leading-tight text-white/80 max-w-[45%] line-clamp-2">
          {product.name}
        </div>
        <a
          href={waDirect}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-5 py-3 font-cond text-sm font-bold uppercase tracking-wide text-black"
        >
          <WhatsAppIcon className="h-4 w-4" /> Cotizar
        </a>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLb(false)}
          >
            <button onClick={() => setLb(false)} aria-label="Cerrar" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setActive((i) => (i - 1 + gallery.length) % gallery.length); }} aria-label="Anterior" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setActive((i) => (i + 1) % gallery.length); }} aria-label="Siguiente" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6">
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div key={active} className="relative mx-4 max-h-[82vh] w-full max-w-5xl" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()}>
              <Image src={gallery[active]} alt={product.name} width={1600} height={1066} className="mx-auto max-h-[82vh] w-auto rounded-xl object-contain" />
              <p className="mt-3 text-center text-sm text-white/60">{product.name} · {active + 1} / {gallery.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
