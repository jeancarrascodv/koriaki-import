"use client";

import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { Logo } from "../Logo";
import { useQuotation } from "./CartProvider";

export function TiendaNav() {
  const { count, setOpen } = useQuotation();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/85 shadow-xl shadow-black/20 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Inicio">
          <Logo size="sm" />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hidden items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white sm:flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Inicio
          </Link>
          <Link
            href="/tienda"
            className="hidden text-sm font-medium text-white/60 transition-colors hover:text-white sm:block"
          >
            Catálogo
          </Link>

          {/* Quotation CTA — matches site-wide gradient style */}
          <button
            onClick={() => setOpen(true)}
            aria-label={`Mi cotización${count > 0 ? ` (${count} productos)` : ""}`}
            className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-soft px-4 py-2.5 text-sm font-bold text-black shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:shadow-accent/35"
          >
            <ClipboardList className="h-4 w-4" />
            <span className="hidden sm:inline">Mi Cotización</span>
            {count > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-black px-1 text-xs font-bold text-accent">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
