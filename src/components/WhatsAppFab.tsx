import { site } from "@/data/site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        "Hola KORIAKI IMPORT, quiero más información"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-black shadow-xl shadow-black/40 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
