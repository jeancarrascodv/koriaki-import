import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background glow + grain */}
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-32 text-center sm:px-8 sm:pt-40">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Importación directa · Precios de distribuidor
        </div>

        <h1
          className="reveal text-balance mt-6 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "60ms" }}
        >
          Modernizamos tu{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Toyota Hilux
          </span>{" "}
          y{" "}
          <span className="bg-gradient-to-r from-accent-2 to-accent bg-clip-text text-transparent">
            Ford Raptor
          </span>
        </h1>

        <p
          className="reveal text-balance mt-6 max-w-2xl text-base text-white/70 sm:text-lg"
          style={{ animationDelay: "120ms" }}
        >
          Conversiones de carrocería, faros LED, faros posteriores, pisaderas y
          cubrelluvias. Calidad de importación con stock en Lima.
        </p>

        <div
          className="reveal mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href="#productos"
            className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-accent/25 transition-transform hover:scale-105"
          >
            Ver catálogo y precios
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=Hola%20KORIAKI%20IMPORT,%20quiero%20cotizar`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        {/* Truck illustration */}
        <div className="reveal mt-14 w-full max-w-3xl" style={{ animationDelay: "240ms" }}>
          <TruckArt />
        </div>

        {/* Stats */}
        <div
          className="reveal mt-14 grid w-full max-w-3xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
          style={{ animationDelay: "300ms" }}
        >
          {[
            { k: "+500", v: "Vehículos modernizados" },
            { k: "2", v: "Modelos especialistas" },
            { k: "100%", v: "Stock en Lima" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-2xl font-black text-accent sm:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-white/60 sm:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TruckArt() {
  return (
    <svg viewBox="0 0 600 240" className="w-full" role="img" aria-label="Camioneta 4x4">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a2a2e" />
          <stop offset="1" stopColor="#161618" />
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffb020" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffb020" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ground */}
      <line x1="20" y1="200" x2="580" y2="200" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" />

      {/* light beams */}
      <path d="M470 120 L600 80 L600 165 L470 150 Z" fill="url(#beam)" opacity="0.55" />

      {/* body */}
      <path
        d="M70 150 L95 110 Q100 100 112 100 L200 100 L235 70 Q240 64 250 64 L355 64 Q368 64 374 76 L398 100 L500 105 Q520 107 522 128 L524 150 Z"
        fill="url(#body)"
        stroke="#3a3a40"
        strokeWidth="2"
      />
      {/* bed */}
      <rect x="250" y="104" width="150" height="46" fill="#101012" stroke="#3a3a40" strokeWidth="2" />
      {/* cab windows */}
      <path d="M205 100 L237 74 L300 74 L300 100 Z" fill="#0e2a3a" stroke="#3a3a40" />
      <path d="M308 74 L352 74 Q362 74 366 82 L382 100 L308 100 Z" fill="#0e2a3a" stroke="#3a3a40" />

      {/* headlight */}
      <circle cx="512" cy="132" r="9" fill="#ffe9b0" />
      <circle cx="512" cy="132" r="4" fill="#fff" />
      {/* taillight */}
      <rect x="68" y="120" width="8" height="22" rx="2" fill="#ff3b30" />

      {/* wheels */}
      {[160, 450].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="160" r="40" fill="#0b0b0c" stroke="#2c2c30" strokeWidth="6" />
          <circle cx={cx} cy="160" r="18" fill="#1c1c20" stroke="#444" strokeWidth="3" />
          <circle cx={cx} cy="160" r="4" fill="#ff5a1f" />
        </g>
      ))}
    </svg>
  );
}
