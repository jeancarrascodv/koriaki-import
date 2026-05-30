type IconKey = "convert" | "headlight" | "taillight" | "step" | "rain" | "led";

const paths: Record<IconKey, React.ReactNode> = {
  convert: (
    <>
      <path d="M4 17h16M6 17l1.5-5A3 3 0 0 1 10.4 10h3.2a3 3 0 0 1 2.9 2l1.5 5" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
      <path d="M3 9l3-3M21 9l-3-3" />
    </>
  ),
  headlight: (
    <>
      <path d="M4 7c5-2 11-2 16 0v10c-5 2-11 2-16 0Z" />
      <path d="M8 10h7M8 13h5" />
    </>
  ),
  taillight: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M8 6v12M14 9h3M14 12h3M14 15h3" />
    </>
  ),
  step: (
    <>
      <path d="M3 16h14l3-3M3 16v2M6 16v-3h6" />
      <path d="M9 13v-3h6" />
    </>
  ),
  rain: (
    <>
      <path d="M4 7h16l-2 5H6Z" />
      <path d="M8 16v3M12 16v3M16 16v3" />
    </>
  ),
  led: (
    <>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
};

export function Icon({
  name,
  className = "",
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3Z" />
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
    </svg>
  );
}
