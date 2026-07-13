"use client";

import { useEffect, useState } from "react";
import { waGeneral } from "@/lib/wa";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFab() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed,   setDismissed]   = useState(true); // start hidden

  // Show tooltip once after a short delay on first visit
  useEffect(() => {
    const seen = sessionStorage.getItem("wa-tooltip-seen");
    if (seen) return;

    const timer = setTimeout(() => {
      setDismissed(false);
      setShowTooltip(true);
      sessionStorage.setItem("wa-tooltip-seen", "1");
    }, 4000); // appear 4 s after page load

    // Auto-dismiss after 6 s
    const dismiss = setTimeout(() => setDismissed(true), 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(dismiss);
    };
  }, []);

  const visible = showTooltip && !dismissed;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

      {/* Tooltip bubble */}
      {visible && (
        <div className="relative flex items-center gap-2 rounded-2xl border border-white/15 bg-steel/95 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Cerrar mensaje"
            className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-white/20 text-white/70 transition-colors hover:bg-white/35"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>

          <div className="h-2 w-2 animate-pulse rounded-full bg-[#25D366]" />
          <p className="text-sm font-medium text-white/90 whitespace-nowrap">
            ¿Necesitas ayuda?{" "}
            <span className="text-[#25D366]">Escríbenos →</span>
          </p>

          {/* Tail */}
          <div className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-white/15 bg-steel/95" />
        </div>
      )}

      {/* FAB button */}
      <a
        href={waGeneral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp — atención Lun–Sáb 9 a.m.–6 p.m."
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-black shadow-xl shadow-black/40 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon className="h-7 w-7 transition-transform group-hover:scale-110" />

        {/* Pulse ring — subtle, not distracting */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25"
        />
      </a>
    </div>
  );
}
