const items = [
  { t: "Envíos a todo el Perú", d: "Courier y agencia" },
  { t: "Importación directa",   d: "Sin intermediarios" },
  { t: "Stock en Lima",         d: "Almacén en Ate"     },
  { t: "Compatibilidad exacta", d: "Por modelo y año"   },
  { t: "Asesoría de compra",    d: "Antes de tu pedido" },
];

export function Trust() {
  return (
    <section className="border-y border-white/10 bg-steel/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/8 sm:grid-cols-5">
        {items.map((it) => (
          <div key={it.t} className="flex flex-col items-center gap-2.5 bg-steel/40 px-5 py-7 text-center sm:flex-row sm:items-start sm:text-left sm:gap-3 sm:px-6">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 text-accent sm:mt-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div className="text-sm font-semibold leading-snug">{it.t}</div>
              <div className="mt-0.5 text-xs text-white/50">{it.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
