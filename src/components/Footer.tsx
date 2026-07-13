import { Logo } from "./Logo";
import { site } from "@/data/site";
import { waGeneral } from "@/lib/wa";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-12 sm:flex-row sm:gap-6 sm:px-8">
        <Logo size="sm" />

        <p className="text-center text-xs leading-relaxed text-white/40">
          Kits de conversión · Faros LED · Accesorios 4x4
          <span className="mx-2 text-white/20">·</span>
          Toyota y Ford · Ate, Lima
        </p>

        <div className="flex items-center gap-5 text-sm text-white/55">
          <a href="/tienda" className="transition-colors hover:text-white">
            Catálogo
          </a>
          <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            WhatsApp
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-[11px] tracking-wide text-white/25">
        © {new Date().getFullYear()} KORIAKI IMPORT. Todos los derechos reservados.
      </div>
    </footer>
  );
}
