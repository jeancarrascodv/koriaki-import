"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Plus } from "lucide-react";
import { allProducts, categories, type Fit } from "@/data/site";
import { useCart } from "./cart/CartProvider";

const pen = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

const models: (Fit | "Todos")[] = ["Todos", "Hilux", "Raptor", "Ranger"];
type Sort = "rel" | "asc" | "desc";

export function Marketplace() {
  const { add } = useCart();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [model, setModel] = useState<Fit | "Todos">("Todos");
  const [sort, setSort] = useState<Sort>("rel");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = allProducts.filter((p) => {
      const matchQ =
        !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchCat = !cat || p.categoryId === cat;
      const matchModel =
        model === "Todos" || p.fits.includes(model) || p.fits.includes("Universal");
      return matchQ && matchCat && matchModel;
    });
    if (sort === "asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [query, cat, model, sort]);

  return (
    <div className="min-h-screen pb-24">
      {/* Title */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        <p className="eyebrow text-xs text-accent">Marketplace</p>
        <h1 className="font-display uppercase mt-3 text-4xl sm:text-6xl">Tienda KORIAKI</h1>
        <p className="mt-3 max-w-2xl text-white/65">
          Arma tu pedido con precios de distribuidor y envíalo por WhatsApp en un
          clic. {allProducts.length} productos para Hilux, Raptor y más.
        </p>
      </section>

      {/* Controls */}
      <section className="mx-auto mt-8 max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar faros, aros, defensa…"
              className="w-full rounded-xl border border-white/15 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex items-center gap-3">
            <select
              value={model}
              onChange={(e) => setModel(e.target.value as Fit | "Todos")}
              className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white outline-none focus:border-accent"
            >
              {models.map((m) => (
                <option key={m} className="bg-steel">{m === "Todos" ? "Todos los modelos" : m}</option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white outline-none focus:border-accent"
            >
              <option value="rel" className="bg-steel">Relevancia</option>
              <option value="asc" className="bg-steel">Precio: menor a mayor</option>
              <option value="desc" className="bg-steel">Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <ChipBtn label="Todo" active={cat === null} onClick={() => setCat(null)} />
          {categories.map((c) => (
            <ChipBtn key={c.id} label={c.title} active={cat === c.id} onClick={() => setCat(c.id)} />
          ))}
        </div>

        <p className="mt-4 text-sm text-white/50">{filtered.length} resultados</p>
      </section>

      {/* Grid */}
      <section className="mx-auto mt-6 max-w-7xl px-5 sm:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center text-white/65">
            Sin resultados. Prueba otra búsqueda o quita filtros.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                <Link href={`/tienda/${p.id}`} className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur">
                    {p.categoryTitle}
                  </span>
                  {p.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase text-black">
                      {p.tag}
                    </span>
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <Link href={`/tienda/${p.id}`} className="text-sm font-bold leading-snug hover:text-accent">
                    {p.name}
                  </Link>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-xs text-white/55">{p.desc}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    {p.fits.filter((f) => f !== "Universal").slice(0, 3).map((f) => (
                      <span key={f} className="rounded bg-white/8 px-1.5 py-0.5 text-[10px] text-white/55">{f}</span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <div className="font-cond text-xl font-bold text-accent-2">
                      {pen.format(p.price)}
                      {p.unit && <span className="ml-1 text-[11px] font-medium text-white/45">/ {p.unit}</span>}
                    </div>
                    <button
                      onClick={() => add(p.id)}
                      className="flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-black transition-transform hover:scale-105"
                    >
                      <Plus className="h-3.5 w-3.5" /> Agregar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function ChipBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active ? "bg-accent text-black" : "border border-white/15 text-white/70 hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}
