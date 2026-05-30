"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import type { Fit } from "@/data/site";

/* ------------------------- Catalog filter context ------------------------- */

type Filter = { category: string | null; model: Fit | null };
type FilterCtx = {
  filter: Filter;
  setFilter: (f: Partial<Filter>) => void;
  resetFilter: () => void;
};

const FilterContext = createContext<FilterCtx | null>(null);

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilter must be used within Providers");
  return ctx;
}

/* ----------------------------- Lightbox context --------------------------- */

type Slide = { src: string; alt: string };
type LightboxCtx = { open: (slides: Slide[], index: number) => void };

const LightboxContext = createContext<LightboxCtx | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within Providers");
  return ctx;
}

/* -------------------------------- Provider -------------------------------- */

export function Providers({ children }: { children: React.ReactNode }) {
  const [filter, setFilterState] = useState<Filter>({ category: null, model: null });

  const setFilter = (f: Partial<Filter>) =>
    setFilterState((prev) => ({ ...prev, ...f }));
  const resetFilter = () => setFilterState({ category: null, model: null });

  const [slides, setSlides] = useState<Slide[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = (s: Slide[], i: number) => {
    setSlides(s);
    setIndex(i);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, slides.length]);

  return (
    <FilterContext.Provider value={{ filter, setFilter, resetFilter }}>
      <LightboxContext.Provider value={{ open }}>
        {children}

        <AnimatePresence>
          {isOpen && slides[index] && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            >
              <button
                onClick={close}
                aria-label="Cerrar"
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              {slides.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    aria-label="Anterior"
                    className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    aria-label="Siguiente"
                    className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              <motion.div
                key={index}
                className="relative mx-4 max-h-[82vh] w-full max-w-5xl"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={slides[index].src}
                  alt={slides[index].alt}
                  width={1600}
                  height={1066}
                  className="mx-auto max-h-[82vh] w-auto rounded-xl object-contain"
                />
                <p className="mt-3 text-center text-sm text-white/70">
                  {slides[index].alt}
                  {slides.length > 1 && (
                    <span className="ml-2 text-white/40">
                      {index + 1} / {slides.length}
                    </span>
                  )}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LightboxContext.Provider>
    </FilterContext.Provider>
  );
}
