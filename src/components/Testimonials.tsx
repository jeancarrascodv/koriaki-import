const reviews = [
  {
    name: "Rodrigo Quispe",
    vehicle: "Hilux 2021 — Kit GR Sport",
    text: "Compré el kit de conversión GR Sport para mi Hilux y el ajuste fue exacto. Las piezas llegaron perfectamente embaladas a Arequipa en 3 días. La asesoría antes de la compra fue muy clara y me confirmaron la compatibilidad con mi año de fabricación.",
  },
  {
    name: "Milagros Tarazona",
    vehicle: "Fortuner 2019 — Faros LED",
    text: "Los faros LED para mi Fortuner son de otro nivel. Plug & Play, sin modificaciones. Me ayudaron a verificar la versión exacta de mi vehículo antes de confirmar el pedido. Calidad de importación, se nota la diferencia con lo que hay en el mercado local.",
  },
  {
    name: "Jean Carlos Palomino",
    vehicle: "Ranger 2020 — Parachoques + Guardafangos",
    text: "Pedí parachoques delantero y guardafangos estilo Raptor para mi Ranger. El equipo de Koriaki me confirmó la compatibilidad con mi modelo antes de pagar. Llegó a Trujillo sin ningún problema, todo en perfecto estado.",
  },
  {
    name: "Álvaro Mendívil",
    vehicle: "Hilux 2022 — Faros Posteriores",
    text: "Los stops LED secuenciales son exactamente lo que buscaba. Antes de comprar me enviaron fotos reales del producto y confirmaron que era compatible con mi Hilux 2022. Excelente atención y despacho rápido desde Lima.",
  },
  {
    name: "Paola Ccoyure",
    vehicle: "Prado 2020 — Pisaderas",
    text: "Compré las pisaderas para mi Prado y los soportes venían incluidos, todo listo para llevar al taller. La compatibilidad fue perfecta. Koriaki me orientó en la elección correcta desde el primer mensaje.",
  },
  {
    name: "Diego Espinoza",
    vehicle: "Ranger Raptor 2023 — Parrilla",
    text: "Conseguí la parrilla Raptor style que buscaba hace meses. En otros lados no tenían stock, Koriaki la tenía disponible. Me dieron el detalle técnico de las medidas y el ajuste fue perfecto. Muy recomendados.",
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

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <Stars />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
              &ldquo;{r.text}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-soft font-display text-lg text-black">
                {r.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-white/50">{r.vehicle}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
