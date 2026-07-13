import Image from "next/image";
import { waHero, waQuote } from "@/lib/wa";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[90svh] overflow-hidden">
      {/* Full-bleed background photo */}
      <Image
        src="/img/hero-night.jpg"
        alt="Hilux y Ranger con kits de conversión y accesorios premium"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Layered overlays for depth and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[520px] w-[780px] rounded-full bg-accent/12 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[320px] w-[500px] rounded-full bg-accent/8 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8">
        <div className="max-w-[56rem]">

          {/* Eyebrow badge */}
          <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-5 py-2 text-xs font-semibold tracking-widest text-accent uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Importación directa · Toyota y Ford · Stock en Lima
          </div>

          {/* Main headline */}
          <h1
            className="reveal font-display uppercase text-balance mt-7 text-[3.25rem] leading-[0.92] sm:text-[5rem] lg:text-[6.5rem]"
            style={{ animationDelay: "60ms" }}
          >
            Transforma tu{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-accent-soft to-accent-2 bg-clip-text text-transparent">
              Toyota
            </span>{" "}
            o{" "}
            <span className="bg-gradient-to-r from-accent-2 via-accent to-accent-soft bg-clip-text text-transparent">
              Ford
            </span>
            <br className="hidden sm:block" />
            <span className="text-white/90"> con piezas de importación</span>
          </h1>

          {/* Supporting copy */}
          <p
            className="reveal text-balance mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-loose"
            style={{ animationDelay: "120ms" }}
          >
            Kits de conversión completos, faros LED, parachoques y accesorios
            exteriores premium. Cada pieza importada directamente — compatibilidad
            garantizada por modelo, versión y año.
          </p>

          {/* Conversion pills */}
          <div
            className="reveal mt-6 flex flex-wrap gap-2.5"
            style={{ animationDelay: "160ms" }}
          >
            {[
              "Hilux → GR Sport",
              "Fortuner → Legender",
              "Ranger → F150 R Style",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="reveal mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href={waHero}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-soft px-8 py-4 text-center font-cond text-sm font-bold uppercase tracking-widest text-black shadow-xl shadow-accent/30 transition-all hover:scale-105 hover:shadow-accent/50 sm:text-base"
            >
              Solicitar Cotización
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15"
            >
              Explorar catálogo
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Social proof stats */}
          <div
            className="reveal mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/12 pt-8"
            style={{ animationDelay: "280ms" }}
          >
            {[
              { k: "+500", v: "Pedidos despachados" },
              { k: "8",    v: "Modelos compatibles" },
              { k: "100%", v: "Stock en Lima"        },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-[2.25rem] leading-none text-accent sm:text-[2.75rem]">
                  {s.k}
                </div>
                <div className="mt-1.5 text-xs leading-snug text-white/55 sm:text-sm">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
