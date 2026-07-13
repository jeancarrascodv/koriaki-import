"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { useFilter } from "./Providers";
import { selectorModels, needToCategory, type Fit } from "@/data/site";
import { waVehicle } from "@/lib/wa";

const years = Array.from({ length: 11 }, (_, i) => `${2025 - i}`);
const needs = Object.keys(needToCategory);

export function VehicleSelector() {
  const { setFilter } = useFilter();
  const [modelLabel, setModelLabel] = useState(selectorModels[0].label);
  const [year, setYear]             = useState(years[2]);
  const [need, setNeed]             = useState(needs[0]);

  const selected = selectorModels.find((m) => m.label === modelLabel);
  const fit      = selected?.fit ?? null;

  const verCatalogo = () => {
    setFilter({ category: needToCategory[need], model: fit as Fit | null });
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  const waHref = waVehicle({ model: modelLabel, year, need });

  const toyota = selectorModels.filter((m) => m.brand === "Toyota");
  const ford   = selectorModels.filter((m) => m.brand === "Ford");
  const other  = selectorModels.filter((m) => m.brand === null);

  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-5xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-3xl border border-white/12 bg-steel/90 p-6 shadow-2xl shadow-black/50 backdrop-blur sm:p-8">

        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="eyebrow text-[11px] text-accent">Compatibilidad por vehículo</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="font-display uppercase mt-2 text-2xl sm:text-3xl">
          Encuentra productos para tu vehículo
        </h2>
        <p className="mt-1.5 text-sm text-white/55">
          Selecciona tu modelo y año — te mostramos solo los productos 100% compatibles.
        </p>

        {/* Selectors */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Field label="Marca y modelo" hint="Toyota o Ford">
            <select
              value={modelLabel}
              onChange={(e) => setModelLabel(e.target.value)}
              className={selectCls}
            >
              <optgroup label="Toyota" className="bg-steel">
                {toyota.map((m) => (
                  <option key={m.label} className="bg-steel">{m.label}</option>
                ))}
              </optgroup>
              <optgroup label="Ford" className="bg-steel">
                {ford.map((m) => (
                  <option key={m.label} className="bg-steel">{m.label}</option>
                ))}
              </optgroup>
              {other.map((m) => (
                <option key={m.label} className="bg-steel">{m.label}</option>
              ))}
            </select>
          </Field>

          <Field label="Año de fabricación" hint="Del 2015 al 2025">
            <select value={year} onChange={(e) => setYear(e.target.value)} className={selectCls}>
              {years.map((y) => (
                <option key={y} className="bg-steel">{y}</option>
              ))}
            </select>
          </Field>

          <Field label="¿Qué tipo de accesorio buscas?" hint="Kit, faros, parachoques…">
            <select value={need} onChange={(e) => setNeed(e.target.value)} className={selectCls}>
              {needs.map((n) => (
                <option key={n} className="bg-steel">{n}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* CTAs */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={verCatalogo}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-6 py-4 font-cond text-base font-bold uppercase tracking-wide text-black shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:shadow-accent/35"
          >
            Ver productos compatibles <ArrowRight className="h-5 w-5" />
          </button>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-cond text-base font-bold uppercase tracking-wide text-white transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <WhatsAppIcon className="h-5 w-5" /> Cotizar por WhatsApp
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-3 text-center text-xs text-white/45">
          Compatibilidad verificada por modelo y año · Atención Lun–Sáb 9 a.m.–6 p.m.
        </p>
      </div>
    </section>
  );
}

const selectCls =
  "w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white outline-none transition-colors focus:border-accent";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-0.5 block text-xs font-semibold text-white/70">{label}</span>
      <span className="mb-1.5 block text-[11px] text-white/35">{hint}</span>
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
