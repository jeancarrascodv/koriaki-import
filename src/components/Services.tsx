import { Icon } from "./Icons";

const services = [
  {
    icon: "convert" as const,
    title: "Importación directa",
    desc: "Importamos directamente desde fabricantes especializados. Sin intermediarios — mejor calidad y mayor disponibilidad para talleres, revendedores y clientes finales.",
  },
  {
    icon: "headlight" as const,
    title: "Catálogo especializado",
    desc: "Kits de conversión, faros LED, parachoques, guardafangos y más, específicos para Toyota Hilux, Fortuner, Prado y Ford Ranger. Cada pieza seleccionada por compatibilidad y calidad.",
  },
  {
    icon: "step" as const,
    title: "Compatibilidad garantizada",
    desc: "Cada producto está catalogado por modelo, año y versión. Te ayudamos a identificar la pieza correcta antes de tu compra para que el ajuste sea exacto.",
  },
  {
    icon: "rack" as const,
    title: "Distribución nacional",
    desc: "Stock permanente en nuestro almacén de Ate, Lima. Despachamos a todo el Perú por courier o agencia de transporte. Atención de lunes a sábado.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-accent">Lo que ofrecemos</p>
          <h2 className="font-display uppercase text-balance mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Importadores y distribuidores especializados
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
            Te asesoramos para encontrar la conversión perfecta para tu vehículo
            y te acompañamos durante todo el proceso de cotización y compra.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-white/10 bg-background p-7 transition-all duration-300 hover:border-accent/35 hover:bg-white/[0.03]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/10 text-accent ring-1 ring-accent/20 transition-colors group-hover:from-accent/30 group-hover:ring-accent/35">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-base font-bold leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Conversion highlight strip */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/10 via-steel to-steel p-9 sm:p-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-xs text-accent">Nuestra especialidad</p>
              <h3 className="font-display uppercase mt-3 text-2xl sm:text-3xl lg:text-4xl">
                Actualiza tu vehículo a la generación más reciente
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Muchos de nuestros clientes adquieren sus piezas para transformar
                la apariencia de su vehículo al estilo de un modelo más nuevo.
                Vendemos los kits completos para que tú o tu taller de confianza
                realicen la transformación.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              {[
                { from: "Hilux",    to: "GR Sport"     },
                { from: "Fortuner", to: "Legender"     },
                { from: "Ranger",   to: "F150 R Style" },
              ].map((c) => (
                <div key={c.to} className="flex items-center gap-3 text-sm font-semibold">
                  <span className="rounded-xl bg-white/10 px-4 py-2 text-white/80">{c.from}</span>
                  <span className="text-lg text-accent">→</span>
                  <span className="rounded-xl bg-accent/15 px-4 py-2 text-accent">{c.to}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
