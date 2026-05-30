import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed background photo */}
      <Image
        src="/img/hero-night.jpg"
        alt="Camionetas 4x4 modernizadas con barras LED de noche"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[420px] w-[680px] rounded-full bg-accent/15 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Importación directa · Precios de distribuidor
          </div>

          <h1
            className="reveal text-balance mt-6 text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
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
            className="reveal text-balance mt-6 max-w-xl text-base text-white/80 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            Conversiones de carrocería, faros LED, faros posteriores, pisaderas
            y cubrelluvias. Calidad de importación con stock en Lima.
          </p>

          <div
            className="reveal mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#productos"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-center text-sm font-bold text-black shadow-lg shadow-accent/25 transition-transform hover:scale-105"
            >
              Ver catálogo y precios
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=Hola%20KORIAKI%20IMPORT,%20quiero%20cotizar`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          <div
            className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-7"
            style={{ animationDelay: "260ms" }}
          >
            {[
              { k: "+500", v: "Vehículos modernizados" },
              { k: "2", v: "Modelos especialistas" },
              { k: "100%", v: "Stock en Lima" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-black text-accent sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-xs text-white/65 sm:text-sm">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
