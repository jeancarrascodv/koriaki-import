"use client";

import Image from "next/image";
import { gallery, site } from "@/data/site";
import { useLightbox } from "./Providers";

export function Gallery() {
  const { open } = useLightbox();
  const slides = gallery.map((g) => ({ src: g.src, alt: g.alt }));
  return (
    <section id="galeria" className="relative border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs text-accent">Galería</p>
            <h2 className="font-display uppercase text-balance mt-3 text-4xl sm:text-5xl">
              Trabajos que hablan por sí solos
            </h2>
            <p className="mt-4 text-white/65">
              Conversiones, iluminación LED y accesorios montados sobre Hilux y
              Raptor. Calidad de importación, acabado profesional.
            </p>
          </div>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Quiero el mío →
          </a>
        </div>

        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[230px]">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => open(slides, i)}
              className={`group relative block overflow-hidden rounded-2xl text-left ${
                g.span ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes={g.span ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                {g.alt}
              </span>
              {i === 0 && (
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                  Destacado
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
