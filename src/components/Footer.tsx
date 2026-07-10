import { Logo } from "./Logo";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <Logo size="sm" />

        <p className="text-center text-xs text-white/45">
          Conversiones · Faros LED · Accesorios 4x4 — Hilux y Raptor · Ate, Lima
        </p>

        <div className="flex items-center gap-4 text-sm text-white/60">
          <a href="/tienda" className="hover:text-white">
            Tienda
          </a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            WhatsApp
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-white/35">
        © {new Date().getFullYear()} KORIAKI IMPORT. Todos los derechos reservados.
      </div>
    </footer>
  );
}
