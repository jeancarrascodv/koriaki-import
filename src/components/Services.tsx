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
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-accent">Lo que ofrecemos</p>
          <h2 className="font-display uppercase text-balance mt-3 text-4xl sm:text-5xl">
            Importadores y distribuidores especializados
          </h2>
          <p className="mt-4 text-white/65">
          Te asesoramos para encontrar la conversión perfecta para tu vehículo
            y te acompañamos durante todo el proceso de cotización y compra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-background p-6 transition-colors hover:border-accent/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/10 text-accent ring-1 ring-accent/20">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Conversion highlight strip */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/10 via-steel to-steel p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow text-xs text-accent">Nuestra especialidad</p>
              <h3 className="font-display uppercase mt-2 text-2xl sm:text-3xl">
                Actualiza tu vehículo a la generación más reciente
              </h3>
              <p className="mt-3 text-sm text-white/65">
                Muchos de nuestros clientes adquieren sus piezas para transformar
                la apariencia de su vehículo al estilo de un modelo más nuevo.
                Vendemos los kits completos para que tú o tu taller de confianza
                realicen la transformación.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 text-sm font-semibold">
              {[
                { from: "Hilux",    to: "GR Sport"    },
                { from: "Fortuner", to: "Legender"    },
                { from: "Ranger",   to: "F150 R Style"},
              ].map((c) => (
                <div key={c.to} className="flex items-center gap-2">
                  <span className="rounded-lg bg-white/10 px-3 py-1.5 text-white/80">{c.from}</span>
                  <span className="text-accent">→</span>
                  <span className="rounded-lg bg-accent/15 px-3 py-1.5 text-accent">{c.to}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
