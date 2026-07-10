import Image from "next/image";

const sizes = {
  sm: { w: 120, h: 40 },
  md: { w: 150, h: 50 },
  lg: { w: 190, h: 63 },
};

export function Logo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { w, h } = sizes[size];
  return (
    <Image
      src="/img/LOGO-HORIZONTAL.jpg"
      alt="Koriaki Import"
      width={w}
      height={h}
      className={`object-contain ${className}`}
      priority
    />
  );
}

/** Kept for backward compatibility — renders the same image */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/img/LOGO-HORIZONTAL.jpg"
      alt="Koriaki Import"
      width={48}
      height={48}
      className={`object-contain ${className}`}
      priority
    />
  );
}
