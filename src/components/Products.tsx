"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { categories, site, type Category } from "@/data/site";
import { Icon } from "./Icons";
import { useFilter, useLightbox } from "./Providers";

const pen = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

export function Products() {
  const { filter, setFilter, resetFilter } = useFilter();
  const { open } = useLightbox();

  const byCategory =
    filter.category === null
      ? categories
      : categories.filter((c) => c.id === filter.category);

  // Aplica filtro por modelo y descarta categorías sin resultados
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
    <section id="productos" className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="max-w-2xl">
        <p className="eyebrow text-xs text-accent">Catálogo</p>
        <h2 className="font-display uppercase text-balance mt-3 text-4xl sm:text-5xl">
          Productos con precio de distribuidor
        </h2>
        <p className="mt-4 text-white/65">
          Precios referenciales de distribuidor en soles (S/). Para compras al
          por mayor y disponibilidad, escríbenos por WhatsApp.
        </p>
      </div>

      {/* Active filter chips */}
      {hasFilter && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-white/55">Filtros:</span>
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
            className="text-sm font-medium text-accent hover:underline"
          >
            Limpiar todo
          </button>
        </div>
      )}

      {/* Category filter buttons */}
      <div className="mt-5 flex flex-wrap gap-2">
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

      {shown.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <p className="text-white/70">No hay productos para ese filtro.</p>
          <button onClick={resetFilter} className="mt-3 font-semibold text-accent hover:underline">
            Ver todo el catálogo
          </button>
        </div>
      ) : (
        <div className="mt-10 space-y-14">
          {shown.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} openLightbox={open} />
          ))}
        </div>
      )}

      <p className="mt-10 text-xs text-white/40">
        * Precios referenciales sujetos a stock y tipo de cambio. No incluyen
        instalación salvo se indique. Consulta promociones por volumen.
      </p>
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
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={cat.image}
          alt={cat.title}
          width={1280}
          height={520}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="h-44 w-full object-cover sm:h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="flex items-center gap-4 px-5 sm:px-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/30 backdrop-blur">
              <Icon name={cat.icon} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display uppercase text-2xl sm:text-3xl">{cat.title}</h3>
              <p className="mt-0.5 max-w-md text-sm text-white/70">{cat.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cat.products.map((p, i) => (
          <article
            key={p.name}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]"
          >
            <button
              onClick={() => openLightbox(slides, i)}
              className="relative block aspect-[16/10] w-full overflow-hidden"
              aria-label={`Ver ${p.name}`}
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {p.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                  {p.tag}
                </span>
              )}
              <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-1 text-[10px] font-medium text-white/90 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                Ampliar
              </span>
            </button>

            <div className="flex flex-1 flex-col p-5">
              <h4 className="text-base font-bold leading-snug">{p.name}</h4>
              <p className="mt-2 flex-1 text-sm text-white/60">{p.desc}</p>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wide text-white/45">
                    Distribuidor
                  </div>
                  <div className="font-cond text-2xl font-bold text-accent-2">
                    {pen.format(p.price)}
                    {p.unit && (
                      <span className="ml-1 text-xs font-medium text-white/45">/ {p.unit}</span>
                    )}
                  </div>
                </div>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hola KORIAKI IMPORT, me interesa: ${p.name} (${pen.format(p.price)})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-black"
                >
                  Cotizar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Chip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent ring-1 ring-accent/30">
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
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-accent text-black"
          : "border border-white/15 text-white/70 hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}
