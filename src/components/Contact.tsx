import { site } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <p className="eyebrow text-xs text-accent">Contact</p>
        <h2 className="font-display uppercase text-balance mx-auto mt-3 max-w-3xl text-4xl sm:text-6xl">
          Ready to upgrade your truck?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/65">
          Message us to get the latest dealer price list and current stock
          availability.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              "Hi KORIAKI IMPORT, I'd like the dealer price list"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Phone", value: site.phone },
            { label: "Warehouse", value: "Separadora Industrial, Ate" },
            { label: "Hours", value: site.hours },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="text-xs uppercase tracking-wide text-white/45">
                {c.label}
              </div>
              <div className="mt-1.5 text-sm font-medium text-white/90">
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
