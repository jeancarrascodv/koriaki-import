"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  X,
  Plus,
  Minus,
  ShoppingCart,
  Check,
  Truck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import {
  categorySpecs,
  relatedProducts,
  site,
  type FlatProduct,
} from "@/data/site";
import { useCart } from "./cart/CartProvider";
import { WhatsAppIcon } from "./Icons";

const pen = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

export function ProductDetail({ product }: { product: FlatProduct }) {
  const { add, setOpen } = useCart();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [lb, setLb] = useState(false);

  const gallery = product.gallery;
  const specs = categorySpecs[product.categoryId] ?? [];
  const related = relatedProducts(product, 4);

  const waDirect = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hola KORIAKI IMPORT 👋 Me interesa *${product.name}* (${pen.format(
      product.price
    )}). ¿Stock y precio de distribuidor?`
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-white/50">
        <Link href="/" className="hover:text-white">Inicio</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/tienda" className="hover:text-white">Tienda</Link>
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

            {/* Main */}
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
              <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                Ampliar
              </span>
            </button>
          </div>
        </div>

        {/* Info (sticky) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <span className="eyebrow text-[11px] text-accent">{product.categoryTitle}</span>
            <h1 className="font-display uppercase mt-2 text-3xl leading-[1.05] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.fits.map((f) => (
                <span key={f} className="rounded-full bg-white/8 px-2.5 py-1 text-xs text-white/70">
                  {f === "Universal" ? "Universal" : `Compatible ${f}`}
                </span>
              ))}
            </div>

            <p className="mt-5 text-white/70">{product.desc}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-steel/60 p-5">
              <div className="text-xs uppercase tracking-wide text-white/45">Precio de distribuidor</div>
              <div className="mt-1 flex items-end gap-2">
                <span className="font-cond text-4xl font-bold text-accent-2">{pen.format(product.price)}</span>
                {product.unit && <span className="pb-1 text-sm text-white/50">/ {product.unit}</span>}
              </div>

              {/* Quantity */}
              <div className="mt-5 flex items-center gap-4">
                <span className="text-sm text-white/60">Cantidad</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 hover:bg-white/10"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center text-lg font-semibold">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 hover:bg-white/10"><Plus className="h-4 w-4" /></button>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <button
                  onClick={() => { add(product.id, qty); }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-6 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-black transition-transform hover:scale-[1.02]"
                >
                  <ShoppingCart className="h-5 w-5" /> Agregar a cotización
                </button>
                <a
                  href={waDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-cond text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Comprar por WhatsApp
                </a>
              </div>
            </div>

            {/* Trust mini */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Truck, t: "Envío a todo el Perú" },
                { icon: ShieldCheck, t: "Garantía incluida" },
                { icon: Wrench, t: "Instalación disponible" },
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

      {/* Specs + description */}
      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display uppercase text-2xl">Descripción</h2>
          <p className="mt-4 leading-relaxed text-white/70">
            {product.desc} En KORIAKI IMPORT trabajamos con importación directa para
            ofrecerte {product.name.toLowerCase()} con calidad garantizada y a
            precio de distribuidor. Ideal para modernizar tu{" "}
            {product.fits.filter((f) => f !== "Universal").join(" / ") || "vehículo 4x4"}.
            Consúltanos por disponibilidad, colores y opciones de instalación.
          </p>
          <ul className="mt-5 space-y-2">
            {["Importación directa", "Calidad verificada", "Asesoría técnica", "Soporte post-venta"].map((b) => (
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

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="font-display uppercase text-2xl sm:text-3xl">También te puede interesar</h2>
            <Link href="/tienda" className="text-sm font-semibold text-accent hover:underline">Ver todo →</Link>
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
                  <span className="mt-2 font-cond text-lg font-bold text-accent-2">{pen.format(r.price)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Sticky mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <div>
          <div className="text-[10px] uppercase text-white/45">Distribuidor</div>
          <div className="font-cond text-xl font-bold text-accent-2">{pen.format(product.price)}</div>
        </div>
        <button
          onClick={() => { add(product.id, qty); setOpen(true); }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-5 py-3 font-cond text-sm font-bold uppercase tracking-wide text-black"
        >
          <ShoppingCart className="h-4 w-4" /> Agregar
        </button>
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
