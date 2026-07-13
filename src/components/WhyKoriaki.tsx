import { waContact } from "@/lib/wa";
import { WhatsAppIcon } from "./Icons";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Importación directa",
    desc: "Trabajamos directamente con fabricantes especializados en conversiones y accesorios 4x4. Sin intermediarios — mejor calidad y stock constante.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Compatibilidad verificada",
    desc: "Cada producto está catalogado con el modelo, versión y año exactos. Te confirmamos la compatibilidad antes de que realices cualquier pago.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 3l14 9-14 9V3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Productos premium",
    desc: "Kits de conversión, faros LED, parachoques y accesorios de calidad de importación. Piezas seleccionadas por durabilidad y acabado visual.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Asesoría personalizada",
    desc: "Nuestro equipo te guía en la elección correcta, valida la compatibilidad con tu vehículo y coordina el despacho. Atención real, no automatizada.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Envíos a todo el Perú",
    desc: "Stock permanente en Lima. Despachamos a Arequipa, Trujillo, Cusco, Piura y a todo el territorio nacional por courier o agencia de transporte.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Atención rápida por WhatsApp",
    desc: "Respuesta en menos de 1 hora durante horario de atención. Lunes a sábado, 9 a.m. a 6 p.m. Te asesoramos sin demoras ni formularios largos.",
  },
];

export function WhyKoriaki() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-xs text-accent">¿Por qué elegirnos?</p>
          <h2 className="font-display uppercase text-balance mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Por qué confiar en KORIAKI IMPORT
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Más de 500 pedidos despachados en todo el Perú. Estas son las razones
            por las que nuestros clientes nos recomiendan.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.05]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent ring-1 ring-accent/20 transition-all group-hover:from-accent/30 group-hover:ring-accent/35">
                {r.icon}
              </span>
              <h3 className="mt-5 text-base font-bold leading-snug text-white">{r.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/10 via-steel to-steel p-9 sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="max-w-xl">
              <p className="eyebrow text-xs text-accent">Sin compromiso</p>
              <h3 className="font-display uppercase mt-3 text-2xl sm:text-3xl">
                Cotiza gratis, sin obligación de compra
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Escríbenos por WhatsApp y recibe disponibilidad, compatibilidad y
                precio de importación directo — sin formularios, sin esperas.
              </p>
            </div>
            <a
              href={waContact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-soft px-8 py-4 font-cond text-sm font-bold uppercase tracking-widest text-black shadow-xl shadow-accent/25 transition-all hover:scale-105 hover:shadow-accent/40"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar Cotización
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
