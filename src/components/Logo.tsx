/* Logo KORIAKI IMPORT — recreado en SVG vectorial (nítido a cualquier tamaño).
   Hexágono + camión de carga con contenedores apilados, en dorado de marca. */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {/* Hexágono */}
      <path
        d="M50 7 L82 25 L82 61 L50 79 L18 61 L18 25 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Cabina + furgón del camión */}
      <path
        d="M28 56 L28 47 Q28 45 30 45 L40 45 L40 36 L62 36 L62 56 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Ventana cabina */}
      <path d="M31 47 L31 42 L37 42 L37 47 Z" fill="currentColor" opacity="0.9" />
      {/* Contenedores apilados (lado derecho) */}
      <g stroke="currentColor" strokeWidth="2.4" fill="none">
        <rect x="48" y="30" width="18" height="9" rx="0.5" />
        <rect x="46" y="41" width="20" height="11" rx="0.5" />
      </g>
      <g stroke="currentColor" strokeWidth="1.4" opacity="0.85">
        <line x1="54" y1="30.5" x2="54" y2="38.5" />
        <line x1="60" y1="30.5" x2="60" y2="38.5" />
        <line x1="52" y1="41.5" x2="52" y2="51.5" />
        <line x1="56" y1="41.5" x2="56" y2="51.5" />
        <line x1="60" y1="41.5" x2="60" y2="51.5" />
      </g>
      {/* Ruedas */}
      <circle cx="36" cy="60" r="4.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="55" cy="60" r="4.5" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function Logo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const mark = size === "lg" ? "h-12 w-12" : size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const k = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg";
  const i = size === "lg" ? "text-[11px]" : "text-[9px]";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`${mark} text-accent`} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif font-bold uppercase tracking-[0.12em] text-accent ${k}`}>
          Koriaki
        </span>
        <span className={`font-serif uppercase tracking-[0.5em] text-foreground/80 ${i}`}>
          Import
        </span>
      </span>
    </span>
  );
}
