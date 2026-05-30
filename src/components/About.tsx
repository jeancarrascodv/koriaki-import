import Image from "next/image";

const perks = [
  "Importación directa: mejores precios para distribuidores y talleres",
  "Stock permanente en nuestro almacén de Ate, Lima",
  "Productos específicos por modelo y año — ajuste garantizado",
  "Asesoría técnica y soporte post-venta",
];

export function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Nosotros
          </p>
          <h2 className="text-balance mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            KORIAKI IMPORT
          </h2>
          <p className="mt-5 text-white/70">
            Somos importadores y distribuidores especializados en la
            modernización de camionetas <strong>Toyota Hilux</strong> y{" "}
            <strong>Ford Raptor</strong>. Trabajamos con talleres, distribuidores
            y clientes finales en todo el Perú, ofreciendo conversiones, faros LED
            y accesorios de alta calidad a precio de importación.
          </p>

          <ul className="mt-7 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-white/80">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          {/* Feature photo */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/img/tacoma-forest.jpg"
              alt="Camioneta Toyota 4x4 modernizada"
              width={1100}
              height={760}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <p className="text-sm font-semibold text-white">
                Especialistas en 4x4 · Hilux & Raptor
              </p>
            </div>
          </div>

          {/* Address card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <h3 className="text-lg font-bold">Visítanos</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            <span className="text-white/45">Almacén</span>
            <br />
            Separadora Industrial
            <br />
            Ate — Lima, Perú
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
            <div>
              <div className="text-white/45">Atención</div>
              <div className="mt-1 font-medium">Lun – Sáb</div>
              <div className="text-white/70">9 a.m. – 6 p.m.</div>
            </div>
            <div>
              <div className="text-white/45">Despachos</div>
              <div className="mt-1 font-medium">A todo el Perú</div>
              <div className="text-white/70">Courier / agencia</div>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Separadora+Industrial+Ate+Lima"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Ver en Google Maps
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
