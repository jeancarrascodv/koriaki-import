import Image from "next/image";
import { waFeatured } from "@/lib/wa";
import { WhatsAppIcon } from "./Icons";

const conversions = [
  {
    from: "Toyota Hilux",
    to: "GR Sport",
    label: "Hilux → GR Sport",
    desc: "Transforma tu Hilux con la estética agresiva de la generación GR Sport: parrilla deportiva, parachoques rediseñado, guardafangos ensanchados y emblemas exclusivos. Kit completo de carrocería exterior.",
    image: "/img/raptor-bridge.jpg",
    fits: ["Hilux 2015–2025"],
    tag: "Más popular",
    slug: "kit-hilux-gr-sport",
  },
  {
    from: "Toyota Fortuner",
    to: "Legender",
    label: "Fortuner → Legender",
    desc: "Dale a tu Fortuner el look premium de la versión Legender. Parrilla bicolor, parachoques frontal rediseñado y molduras laterales. Una transformación completa para que tu SUV destaque en cualquier camino.",
    image: "/img/tacoma-forest.jpg",
    fits: ["Fortuner 2016–2025"],
    tag: "Nuevo",
    slug: "kit-fortuner-legender",
  },
  {
    from: "Ford Ranger",
    to: "F150 R Style",
    label: "Ranger → F150 R Style",
    desc: "Convierte tu Ranger en una pick-up de presencia imponente con el kit F150 R Style. Parrilla y parachoques de línea americana, guardafangos y detalles negros mate que cambian completamente el carácter de tu vehículo.",
    image: "/img/raptor-sunset.jpg",
    fits: ["Ranger 2012–2023"],
    tag: "Importación directa",
    slug: "kit-ranger-f150-style",
  },
];

export function FeaturedConversions() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[500px] -translate-y-1/2 rounded-full bg-accent/6 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs text-accent">Conversiones destacadas</p>
            <h2 className="font-display uppercase text-balance mt-4 text-4xl sm:text-5xl lg:text-6xl">
              ¿Cómo puede quedar tu vehículo?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Estos son nuestros kits más populares. Cada transformación usa piezas
              importadas directamente — compatibilidad garantizada por modelo y año.
            </p>
          </div>
          <a
            href="#catalogo"
            className="shrink-0 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-accent/40 hover:bg-white/10 hover:text-white"
          >
            Ver catálogo completo →
          </a>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {conversions.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`Kit conversión ${c.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Tag badge */}
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-lg">
                  {c.tag}
                </span>

                {/* Conversion label overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {c.from}
                  </span>
                  <span className="text-base font-bold text-accent">→</span>
                  <span className="rounded-lg bg-accent/25 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur">
                    {c.to}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <h3 className="font-display uppercase text-xl leading-tight text-white">
                    {c.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{c.desc}</p>
                </div>

                {/* Compatibility */}
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                    Compatible con
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.fits.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-accent/25 bg-accent/8 px-2.5 py-0.5 text-[11px] font-semibold text-accent/90"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={waFeatured(c.label)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-accent to-accent-soft py-3.5 text-sm font-bold text-black shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:shadow-accent/35"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quiero este kit
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-white/40">
          ¿No encuentras tu modelo?{" "}
          <a href="#contacto" className="text-accent/80 underline-offset-2 transition-colors hover:text-accent hover:underline">
            Escríbenos y lo buscamos por ti.
          </a>
        </p>

      </div>
    </section>
  );
}
