import { Icon } from "./Icons";

const services = [
  {
    icon: "convert" as const,
    title: "Conversión de carrocería",
    desc: "Transformamos tu Hilux al estilo Raptor o deportivo con juegos completos e instalación profesional.",
  },
  {
    icon: "led" as const,
    title: "Modernización LED",
    desc: "Mejora de iluminación delantera y posterior: faros LED completos con luz diurna y secuencial.",
  },
  {
    icon: "headlight" as const,
    title: "Instalación & asesoría",
    desc: "Montaje directo de faros, pisaderas y accesorios. Garantía y soporte posventa.",
  },
  {
    icon: "step" as const,
    title: "Accesorios a medida",
    desc: "Pisaderas, cubrelluvias y detalles exteriores con ajuste exacto por modelo y año.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-xs text-accent">Servicios</p>
          <h2 className="font-display uppercase text-balance mt-3 text-4xl sm:text-5xl">
            Más que vender: modernizamos tu 4x4
          </h2>
          <p className="mt-4 text-white/65">
            Especialistas en Hilux y Raptor. Importamos, instalamos y
            damos garantía.
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
      </div>
    </section>
  );
}
