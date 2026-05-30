"use client";

import { useState } from "react";
import { categories, site } from "@/data/site";
import { Icon } from "./Icons";

const pen = new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: "PEN",
  maximumFractionDigits: 0,
});

export function Products() {
  const [active, setActive] = useState<string>("all");

  const shown =
    active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <section id="productos" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Catálogo
        </p>
        <h2 className="text-balance mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          Productos con precio de distribuidor
        </h2>
        <p className="mt-4 text-white/65">
          Precios referenciales de distribuidor en soles (S/). Para compras al
          por mayor y disponibilidad, escríbenos por WhatsApp.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        <FilterBtn label="Todos" active={active === "all"} onClick={() => setActive("all")} />
        {categories.map((c) => (
          <FilterBtn
            key={c.id}
            label={c.title}
            active={active === c.id}
            onClick={() => setActive(c.id)}
          />
        ))}
      </div>

      <div className="mt-10 space-y-14">
        {shown.map((cat) => (
          <div key={cat.id}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                <Icon name={cat.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold">{cat.title}</h3>
                <p className="text-sm text-white/55">{cat.subtitle}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.products.map((p) => (
                <article
                  key={p.name}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05]"
                >
                  {p.tag && (
                    <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                      {p.tag}
                    </span>
                  )}
                  <h4 className="pr-16 text-base font-bold leading-snug">{p.name}</h4>
                  <p className="mt-2 flex-1 text-sm text-white/60">{p.desc}</p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-white/45">
                        Distribuidor
                      </div>
                      <div className="text-xl font-black text-accent-2">
                        {pen.format(p.price)}
                        {p.unit && (
                          <span className="ml-1 text-xs font-medium text-white/45">
                            / {p.unit}
                          </span>
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
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs text-white/40">
        * Precios referenciales sujetos a stock y tipo de cambio. No incluyen
        instalación salvo se indique. Consulta promociones por volumen.
      </p>
    </section>
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
