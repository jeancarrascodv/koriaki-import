"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { allProducts, categories, type Fit } from "@/data/site";
import { waProduct } from "@/lib/wa";
import { WhatsAppIcon } from "./Icons";

const models: (Fit | "Todos")[] = [
  "Todos",
  "Hilux",
  "Fortuner",
  "Fortuner Legender",
  "Prado",
  "Revo",
  "Ranger",
  "Ranger Raptor",
  "F150",
];

export function Marketplace() {
  const [query, setQuery]   = useState("");
  const [cat, setCat]       = useState<string | null>(null);
  const [model, setModel]   = useState<Fit | "Todos">("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProducts.filter((p) => {
      const matchQ =
        !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchCat   = !cat   || p.categoryId === cat;
      const matchModel =
        model === "Todos" || p.fits.includes(model) || p.fits.includes("Universal");
      return matchQ && matchCat && matchModel;
    });
  }, [query, cat, model]);

  const hasFilters = query || cat !== null || model !== "Todos";

  const clearAll = () => {
    setQuery("");
    setCat(null);
    setModel("Todos");
  };

  return (
    <div className="min-h-screen pb-32">

      {/* ── Page header ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/8 bg-steel/30">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[800px] -translate-x-1/2 rounded-full bg-accent/6 blur-[160px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="eyebrow text-xs text-accent">Catálogo</p>
          <h1 className="font-display uppercase mt-3 text-4xl sm:text-6xl">
            Catálogo KORIAKI
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/60">
            Kits de conversión, faros LED, parachoques, guardafangos y accesorios
            exteriores premium para Toyota y Ford.{" "}
            <span className="font-semibold text-white/80">
              {allProducts.length} productos disponibles.
            </span>{" "}
            Solicita cotización personalizada por WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Controls ──────────────────────────────────────────────────── */}
      <section className="mx-auto mt-8 max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search input */}
          <div className="relative w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar faros, parachoques, kit conversión…"
              className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-11 pr-10 text-sm text-white outline-none transition-colors focus:border-accent"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Limpiar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/35 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Model filter */}
          <div className="relative">
            <select
              value={model}
              onChange={(e) => setModel(e.target.value as Fit | "Todos")}
              className="appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 pr-10 text-sm font-medium text-white outline-none focus:border-accent"
            >
              {models.map((m) => (
                <option key={m} className="bg-steel">
                  {m === "Todos" ? "Todos los modelos" : m}
                </option>
              ))}
            </select>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          <ChipBtn label="Todos" active={cat === null} onClick={() => setCat(null)} />
          {categories.map((c) => (
            <ChipBtn key={c.id} label={c.title} active={cat === c.id} onClick={() => setCat(c.id)} />
          ))}
        </div>

        {/* Result count + clear filters */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-white/45">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-sm font-medium text-accent/80 hover:text-accent hover:underline"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </section>

      {/* ── Product grid ──────────────────────────────────────────────── */}
      <section className="mx-auto mt-6 max-w-7xl px-5 sm:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-14 text-center">
            <p className="text-white/55">Sin resultados. Prueba otra búsqueda o limpia los filtros.</p>
            <button onClick={clearAll} className="mt-3 font-semibold text-accent hover:underline">
              Ver todos los productos
            </button>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/10"
              >
                {/* Image */}
                <Link href={`/tienda/${p.id}`} className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category chip */}
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur">
                    {p.categoryTitle}
                  </span>

                  {/* Tag */}
                  {p.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black shadow">
                      {p.tag}
                    </span>
                  )}

                  {/* Transform label */}
                  {p.transforms && (
                    <span className="absolute bottom-3 left-3 rounded-full border border-accent/45 bg-black/65 px-2.5 py-0.5 text-[10px] font-semibold text-accent backdrop-blur">
                      {p.transforms}
                    </span>
                  )}
                </Link>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <Link
                      href={`/tienda/${p.id}`}
                      className="text-sm font-bold leading-snug text-white transition-colors hover:text-accent"
                    >
                      {p.name}
                    </Link>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/50">
                      {p.desc}
                    </p>
                  </div>

                  {/* Compatibility pills */}
                  {p.fits.filter((f) => f !== "Universal").length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {p.fits.filter((f) => f !== "Universal").slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-accent/25 bg-accent/8 px-2 py-0.5 text-[10px] font-semibold text-accent/80"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <a
                    href={waProduct({
                      name: p.name,
                      categoryTitle: p.categoryTitle,
                      fits: p.fits,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-xs font-semibold text-white/75 transition-all duration-200 group-hover:border-accent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-soft group-hover:text-black"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Solicitar cotización
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function ChipBtn({
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
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-gradient-to-r from-accent to-accent-soft text-black shadow-lg shadow-accent/20"
          : "border border-white/15 text-white/65 hover:border-white/30 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
