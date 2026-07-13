const items = [
  { t: "Envíos a todo el Perú", d: "Courier y agencia" },
  { t: "Importación directa",   d: "Sin intermediarios" },
  { t: "Stock en Lima",         d: "Almacén en Ate" },
  { t: "Compatibilidad exacta", d: "Por modelo y año" },
  { t: "Asesoría de compra",    d: "Antes de tu pedido" },
];

export function Trust() {
  return (
    <section className="border-y border-white/10 bg-steel/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-2 sm:grid-cols-5 sm:px-8">
        {items.map((it) => (
          <div key={it.t} className="flex items-start gap-3 px-4 py-5">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div className="text-sm font-semibold leading-tight">{it.t}</div>
              <div className="mt-0.5 text-xs text-white/50">{it.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
