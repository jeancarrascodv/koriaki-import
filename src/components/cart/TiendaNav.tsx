"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Logo } from "../Logo";
import { useCart } from "./CartProvider";

export function TiendaNav() {
  const { count, setOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/">
          <Logo size="sm" />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white sm:flex"
          >
            <ArrowLeft className="h-4 w-4" /> Inicio
          </Link>
          <Link
            href="/tienda"
            className="hidden text-sm font-medium text-white/70 hover:text-white sm:block"
          >
            Catálogo
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cotización</span>
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
