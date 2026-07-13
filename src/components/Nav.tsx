"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { waQuote } from "@/lib/wa";

const links = [
  { href: "/tienda",   label: "Catálogo"  },
  { href: "#catalogo", label: "Productos" },
  { href: "#servicios",label: "Servicios" },
  { href: "#contacto", label: "Contacto"  },
];

export function Nav() {
  const [open, setOpen] = useState(false);
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
          ? "h-20 bg-background/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {!scrolled && (
        <div className="hidden bg-gradient-to-r from-accent to-accent-soft text-center text-[12px] font-semibold text-black sm:block">
          <div className="mx-auto max-w-7xl px-8 py-1.5">
            🚚 Envíos a todo el Perú · Importación directa · Stock en Ate, Lima
          </div>
        </div>
      )}
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 py-2 sm:px-8">
        <a href="#top" className="group">
          <Logo size="lg" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waQuote}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Cotizar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-white/15"
          aria-label="Menú"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waQuote}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-accent px-3 py-3 text-center text-sm font-semibold text-black"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
