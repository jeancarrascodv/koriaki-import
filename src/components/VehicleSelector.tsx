"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { useFilter } from "./Providers";
import { site, needToCategory, type Fit } from "@/data/site";

const models: { label: string; fit: Fit | null }[] = [
  { label: "Toyota Hilux", fit: "Hilux" },
  { label: "Ford Raptor", fit: "Raptor" },
  { label: "Ford Ranger", fit: "Ranger" },
  { label: "Otro / No estoy seguro", fit: null },
];
const years = Array.from({ length: 11 }, (_, i) => `${2025 - i}`);
const needs = Object.keys(needToCategory);

export function VehicleSelector() {
  const { setFilter } = useFilter();
  const [model, setModel] = useState(models[0].label);
  const [year, setYear] = useState(years[2]);
  const [need, setNeed] = useState(needs[0]);

  const fit = models.find((m) => m.label === model)?.fit ?? null;

  const verProductos = () => {
    setFilter({ category: needToCategory[need], model: fit });
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  };

  const msg = encodeURIComponent(
    `Hola KORIAKI IMPORT 👋 Tengo un *${model}* (${year}) y me interesa: *${need}*. ¿Me pasan precio de distribuidor y stock?`
  );
  const href = `https://wa.me/${site.whatsapp}?text=${msg}`;

  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-5xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-3xl border border-white/12 bg-steel/90 p-6 shadow-2xl shadow-black/50 backdrop-blur sm:p-8">
        <div className="flex items-center gap-2">
          <span className="eyebrow text-[11px] text-accent">Encuentra tu producto</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="font-display uppercase mt-2 text-2xl sm:text-3xl">
          ¿Qué camioneta tienes?
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Field label="Modelo">
            <select value={model} onChange={(e) => setModel(e.target.value)} className={selectCls}>
              {models.map((m) => (
                <option key={m.label} className="bg-steel">{m.label}</option>
              ))}
            </select>
          </Field>
          <Field label="Año">
            <select value={year} onChange={(e) => setYear(e.target.value)} className={selectCls}>
              {years.map((y) => (
                <option key={y} className="bg-steel">{y}</option>
              ))}
            </select>
          </Field>
          <Field label="¿Qué buscas?">
            <select value={need} onChange={(e) => setNeed(e.target.value)} className={selectCls}>
              {needs.map((n) => (
                <option key={n} className="bg-steel">{n}</option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={verProductos}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-6 py-4 font-cond text-base font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
          >
            Ver productos <ArrowRight className="h-5 w-5" />
          </button>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-cond text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-white/50">
          Te llevamos directo al catálogo filtrado para tu vehículo · {site.hours}
        </p>
      </div>
    </section>
  );
}

const selectCls =
  "w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white outline-none transition-colors focus:border-accent";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/55">{label}</span>
      <div className="relative">
        {children}
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </label>
  );
}
