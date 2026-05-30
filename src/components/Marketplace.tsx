"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  X,
  Truck,
} from "lucide-react";
import { allProducts, categories, site, type Fit } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

const pen = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

const models: (Fit | "Todos")[] = ["Todos", "Hilux", "Raptor", "Ranger"];
type Sort = "rel" | "asc" | "desc";

const STORAGE = "koriaki-cart";

export function Marketplace() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [model, setModel] = useState<Fit | "Todos">("Todos");
  const [sort, setSort] = useState<Sort>("rel");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);

  // cargar / guardar carrito
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setCart(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(cart));
    } catch {}
  }, [cart]);

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

  const add = (id: string) => {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    setOpen(true);
  };
  const setQty = (id: string, qty: number) =>
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const cartItems = Object.entries(cart)
    .map(([id, qty]) => {
      const p = allProducts.find((x) => x.id === id);
      return p ? { p, qty } : null;
    })
    .filter(Boolean) as { p: (typeof allProducts)[number]; qty: number }[];

  const count = cartItems.reduce((n, i) => n + i.qty, 0);
  const total = cartItems.reduce((n, i) => n + i.qty * i.p.price, 0);

  const waHref = useMemo(() => {
    if (!cartItems.length) return `https://wa.me/${site.whatsapp}`;
    const lines = cartItems
      .map((i) => `• ${i.p.name} x${i.qty} — ${pen.format(i.p.price * i.qty)}`)
      .join("\n");
    const msg = `Hola KORIAKI IMPORT 👋 Quiero cotizar este pedido:\n\n${lines}\n\n*Total estimado: ${pen.format(
      total
    )}*\n\n¿Me confirman stock y precio de distribuidor?`;
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [cartItems, total]);

  return (
    <div className="min-h-screen pb-24">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-soft text-white">
              <Truck className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg uppercase tracking-wide">
              KORIAKI <span className="text-accent">IMPORT</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white sm:flex"
            >
              <ArrowLeft className="h-4 w-4" /> Inicio
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="relative flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cotización</span>
              {count > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white px-1 text-xs font-bold text-accent">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Title */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        <p className="eyebrow text-xs text-accent">Marketplace</p>
        <h1 className="font-display uppercase mt-3 text-4xl sm:text-6xl">
          Tienda KORIAKI
        </h1>
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

        {/* Category chips */}
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
                <div className="relative aspect-[16/10] overflow-hidden">
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
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-bold leading-snug">{p.name}</h3>
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
                      className="flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105"
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

      {/* Cart drawer */}
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
                <button onClick={() => setOpen(false)} aria-label="Cerrar" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4">
                {cartItems.length === 0 ? (
                  <div className="grid h-full place-items-center text-center text-white/50">
                    <div>
                      <ShoppingCart className="mx-auto h-10 w-10 text-white/25" />
                      <p className="mt-3 text-sm">Tu lista está vacía.<br />Agrega productos para cotizar.</p>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {cartItems.map(({ p, qty }) => (
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
                    cartItems.length ? "bg-[#25D366] text-black hover:scale-[1.02]" : "cursor-not-allowed bg-white/10 text-white/40"
                  }`}
                  onClick={(e) => { if (!cartItems.length) e.preventDefault(); }}
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
    </div>
  );
}

function ChipBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active ? "bg-accent text-white" : "border border-white/15 text-white/70 hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}
