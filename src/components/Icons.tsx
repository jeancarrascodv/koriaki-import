import {
  RefreshCw,
  Lightbulb,
  Disc3,
  Footprints,
  CloudRain,
  Zap,
  Flashlight,
  CircleDashed,
  Shield,
  LayoutGrid,
  Wind,
  Layers,
  Focus,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/data/site";

const map: Record<IconKey, LucideIcon> = {
  convert:   RefreshCw,
  headlight: Lightbulb,
  taillight: Disc3,
  step:      Footprints,
  rain:      CloudRain,
  led:       Zap,
  bar:       Flashlight,
  wheel:     CircleDashed,
  bull:      Shield,
  rack:      LayoutGrid,
  hood:      Layers,
  fender:    Wind,
  fog:       Focus,
};

export function Icon({
  name,
  className = "",
}: {
  name: IconKey;
  className?: string;
}) {
  const Cmp = map[name] ?? Zap;
  return <Cmp className={className} strokeWidth={1.8} aria-hidden="true" />;
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3Z" />
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}
