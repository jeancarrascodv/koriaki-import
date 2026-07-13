"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { waQuote } from "@/lib/wa";

const links = [
  { href: "/tienda",    label: "Catálogo"  },
  { href: "#catalogo",  label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto",  label: "Contacto"  },
];

export function Nav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-lg border-b border-white/10 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar — hidden when scrolled */}
      {!scrolled && (
        <div className="hidden bg-gradient-to-r from-accent via-accent-soft to-accent-2 text-center text-[11px] font-bold uppercase tracking-widest text-black sm:block">
          <div className="mx-auto max-w-7xl px-8 py-2">
            🚚 Envíos a todo el Perú · Importación directa · Stock en Ate, Lima
          </div>
        </div>
      )}

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
        <a href="#top" className="group">
          <Logo size="lg" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/65 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waQuote}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-accent to-accent-soft px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:shadow-accent/35"
          >
            Cotizar
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 transition-colors hover:bg-white/10"
          aria-label="Menú"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white/80 transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white/80 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white/80 transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-background/95 px-5 py-5 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waQuote}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-xl bg-gradient-to-r from-accent to-accent-soft px-4 py-3.5 text-center text-sm font-bold text-black shadow-lg shadow-accent/20"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
