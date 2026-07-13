import Image from "next/image";

const perks = [
  "Importación directa desde fabricantes — sin intermediarios",
  "Stock permanente en Lima disponible para despacho inmediato",
  "Compatibilidad verificada por modelo, versión y año de fabricación",
  "Asesoría de compra personalizada antes de tu pedido",
  "Envíos a todo el Perú por courier o agencia de transporte",
];

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left — copy */}
          <div>
            <p className="eyebrow text-xs text-accent">Quiénes somos</p>
            <h2 className="font-display uppercase text-balance mt-4 text-5xl sm:text-6xl lg:text-7xl">
              KORIAKI IMPORT
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/65">
              Somos importadores y distribuidores especializados en kits de
              conversión y accesorios exteriores premium para{" "}
              <strong className="font-semibold text-white">Toyota</strong> y{" "}
              <strong className="font-semibold text-white">Ford</strong>.
              Trabajamos con talleres, distribuidores y clientes finales en todo
              el Perú, suministrando piezas de alta calidad a precio de
              importación directa.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Te asesoramos para encontrar la conversión perfecta para tu vehículo
              y te acompañamos durante todo el proceso de cotización y compra.
            </p>

            <ul className="mt-8 space-y-3.5">
              {perks.map((p) => (
                <li key={p} className="flex gap-3.5 text-sm text-white/75">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/20">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — image + info card */}
          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/img/tacoma-forest.jpg"
                alt="Camioneta 4x4 con kit de conversión premium"
                width={1100}
                height={760}
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={85}
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <p className="text-sm font-semibold text-white">
                  Especialistas en Toyota y Ford · Importación directa
                </p>
              </div>
            </div>

            {/* Store / contact card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
              <h3 className="text-lg font-bold">Visítanos o escríbenos</h3>
              <p className="mt-5 text-sm leading-loose text-white/65">
                <span className="text-xs uppercase tracking-wider text-white/35">Almacén</span>
                <br />
                Separadora Industrial
                <br />
                Ate — Lima, Perú
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/35">Atención</div>
                  <div className="mt-1.5 font-medium">Lun – Sáb</div>
                  <div className="text-white/65">9 a.m. – 6 p.m.</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/35">Despachos</div>
                  <div className="mt-1.5 font-medium">A todo el Perú</div>
                  <div className="text-white/65">Courier / agencia</div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Separadora+Industrial+Ate+Lima"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-soft hover:underline"
              >
                Ver en Google Maps
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
