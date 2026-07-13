"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { categories, type Category } from "@/data/site";
import { waProduct } from "@/lib/wa";
import { Icon } from "./Icons";
import { useFilter, useLightbox } from "./Providers";
import { WhatsAppIcon } from "./Icons";

export function Products() {
  const { filter, setFilter, resetFilter } = useFilter();
  const { open } = useLightbox();

  const byCategory =
    filter.category === null
      ? categories
      : categories.filter((c) => c.id === filter.category);

  const shown = byCategory
    .map((c) => ({
      ...c,
      products: filter.model
        ? c.products.filter(
            (p) => p.fits.includes(filter.model!) || p.fits.includes("Universal")
          )
        : c.products,
    }))
    .filter((c) => c.products.length > 0);

  const hasFilter = filter.category !== null || filter.model !== null;

  return (
    <section id="catalogo" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-28 sm:px-8">

      {/* Section header */}
      <div className="max-w-2xl">
        <p className="eyebrow text-xs text-accent">Catálogo</p>
        <h2 className="font-display uppercase text-balance mt-4 text-4xl sm:text-5xl lg:text-6xl">
          Kits de conversión y accesorios
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
          Selecciona tu vehículo para ver los productos compatibles. Cada pieza
          importada directamente con compatibilidad garantizada por modelo y año.
        </p>
      </div>

      {/* Active filters */}
      {hasFilter && (
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="text-sm text-white/45">Filtros activos:</span>
          {filter.model && (
            <Chip label={filter.model} onClear={() => setFilter({ model: null })} />
          )}
          {filter.category && (
            <Chip
              label={categories.find((c) => c.id === filter.category)?.title ?? ""}
              onClear={() => setFilter({ category: null })}
            />
          )}
          <button
            onClick={resetFilter}
            className="text-sm font-medium text-accent/80 transition-colors hover:text-accent hover:underline"
          >
            Limpiar todo
          </button>
        </div>
      )}

      {/* Category filter pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        <FilterBtn label="Todos" active={filter.category === null} onClick={() => setFilter({ category: null })} />
        {categories.map((c) => (
          <FilterBtn
            key={c.id}
            label={c.title}
            active={filter.category === c.id}
            onClick={() => setFilter({ category: c.id })}
          />
        ))}
      </div>

      {/* Empty state */}
      {shown.length === 0 ? (
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-14 text-center">
          <p className="text-white/60">No hay productos para ese filtro.</p>
          <button onClick={resetFilter} className="mt-4 font-semibold text-accent hover:underline">
            Ver todo el catálogo
          </button>
        </div>
      ) : (
        <div className="mt-14 space-y-20">
          {shown.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} openLightbox={open} />
          ))}
        </div>
      )}
    </section>
  );
}

function CategoryBlock({
  cat,
  openLightbox,
}: {
  cat: Category;
  openLightbox: (slides: { src: string; alt: string }[], i: number) => void;
}) {
  const slides = cat.products.map((p) => ({ src: p.image, alt: p.name }));

  return (
    <div className="scroll-mt-24" id={cat.id}>

      {/* Category banner */}
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={cat.image}
          alt={cat.title}
          width={1280}
          height={560}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="h-48 w-full object-cover sm:h-64"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="flex items-center gap-5 px-6 sm:px-10">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/30 backdrop-blur">
              <Icon name={cat.icon} className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display uppercase text-2xl sm:text-4xl">{cat.title}</h3>
              <p className="mt-1 max-w-md text-sm text-white/65 sm:text-base">{cat.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product cards grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cat.products.map((p, i) => (
          <article
            key={p.slug}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-accent/10"
          >
            {/* Product image */}
            <button
              onClick={() => openLightbox(slides, i)}
              className="relative block aspect-[4/3] w-full overflow-hidden"
              aria-label={`Ver ${p.name}`}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Image overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Product tag */}
              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-lg">
                  {p.tag}
                </span>
              )}

              {/* Transform label */}
              {p.transforms && (
                <span className="absolute bottom-3 left-3 rounded-full border border-accent/50 bg-black/70 px-3 py-1 text-[11px] font-semibold text-accent backdrop-blur">
                  {p.transforms}
                </span>
              )}

              {/* Zoom hint */}
              <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white/60 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            {/* Card body */}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <h4 className="text-base font-bold leading-snug text-white">{p.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
              </div>

              {/* Compatibility tags */}
              {p.fits.length > 0 && (
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                    Compatible con
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.fits.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-accent/25 bg-accent/8 px-2.5 py-0.5 text-[11px] font-semibold text-accent/90"
                      >
                        {f}
                      </span>
                    ))}
                    {p.fits.length > 4 && (
                      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/40">
                        +{p.fits.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
                href={waProduct({
                  name: p.name,
                  categoryTitle: cat.title,
                  fits: p.fits,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2.5 rounded-full border border-white/15 py-3 text-sm font-semibold text-white/80 transition-all duration-200 group-hover:border-accent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-soft group-hover:text-black"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Solicitar cotización
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Chip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3.5 py-1.5 text-sm font-medium text-accent ring-1 ring-accent/30">
      {label}
      <button onClick={onClear} aria-label={`Quitar ${label}`} className="hover:text-white">
        <X className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}

function FilterBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-accent to-accent-soft text-black shadow-lg shadow-accent/20"
          : "border border-white/15 text-white/65 hover:border-white/30 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
