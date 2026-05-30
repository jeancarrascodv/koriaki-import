"use client";

import { useState } from "react";
import { site } from "@/data/site";

const models = ["Toyota Hilux", "Ford Raptor", "Ford Ranger", "Otro"];
const years = Array.from({ length: 11 }, (_, i) => `${2025 - i}`);
const needs = [
  "Conversión",
  "Faros LED",
  "Faros posteriores",
  "Pisaderas",
  "Cubrelluvias",
];

export function VehicleSelector() {
  const [model, setModel] = useState(models[0]);
  const [year, setYear] = useState(years[2]);
  const [need, setNeed] = useState(needs[0]);

  const msg = encodeURIComponent(
    `Hola KORIAKI IMPORT 👋 Tengo un *${model}* (${year}) y me interesa: *${need}*. ¿Me pasan precio de distribuidor y stock?`
  );
  const href = `https://wa.me/${site.whatsapp}?text=${msg}`;

  return (
    <section className="relative z-20 mx-auto -mt-16 max-w-5xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-3xl border border-white/12 bg-steel/90 p-6 shadow-2xl shadow-black/50 backdrop-blur sm:p-8">
        <div className="flex items-center gap-2">
          <span className="eyebrow text-[11px] text-accent">Cotiza en 10 segundos</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="font-display uppercase mt-2 text-2xl sm:text-3xl">
          ¿Qué camioneta tienes?
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <Field label="Modelo">
            <select value={model} onChange={(e) => setModel(e.target.value)} className={selectCls}>
              {models.map((m) => (
                <option key={m} className="bg-steel">{m}</option>
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

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-4 font-cond text-base font-bold uppercase tracking-wide text-black transition-transform hover:scale-[1.02]"
        >
          Cotizar por WhatsApp →
        </a>
        <p className="mt-3 text-center text-xs text-white/50">
          Respuesta rápida en horario de atención · {site.hours}
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
