const reviews = [
  {
    name: "Carlos M.",
    car: "Hilux 2019 → Raptor",
    text: "Le hice la conversión completa a mi Hilux y quedó idéntica a una Raptor. Trabajo limpio y precio justo. Recomendados.",
  },
  {
    name: "Luis R.",
    car: "Faros LED Hilux",
    text: "Los faros LED con secuencial son otro nivel. Instalación directa, llegaron rápido a provincia y la asesoría fue puntual.",
  },
  {
    name: "Andrea P.",
    car: "Pisaderas + Cubrelluvias",
    text: "Pedí pisaderas y cubrelluvias para mi Raptor. Ajuste perfecto, sin perforar nada. Volveré por los stops LED.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-accent">Reseñas</p>
          <h2 className="font-display uppercase text-balance mt-3 text-4xl sm:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-steel/60 px-5 py-3">
          <div className="font-display text-4xl text-amber-400">4.9</div>
          <div>
            <Stars />
            <div className="mt-1 text-xs text-white/55">+180 reseñas verificadas</div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <Stars />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-soft font-display text-black">
                {r.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-white/50">{r.car}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
