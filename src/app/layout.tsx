import type { Metadata } from "next";
import { Inter, Anton, Oswald, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-cond",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koriakiimport.com"),
  title: {
    default: "KORIAKI IMPORT — Kits de Conversión y Accesorios 4x4 | Lima, Perú",
    template: "%s | KORIAKI IMPORT",
  },
  description:
    "Importadores y distribuidores de kits de conversión, faros LED, parachoques, guardafangos y accesorios exteriores para Toyota Hilux, Fortuner, Prado y Ford Ranger. Stock en Lima, envíos a todo el Perú.",
  keywords: [
    "kit conversión Hilux GR Sport",
    "kit conversión Fortuner Legender",
    "kit conversión Ranger F150",
    "faros LED Hilux",
    "faros LED Fortuner",
    "parachoques Hilux",
    "guardafangos Hilux",
    "accesorios Toyota Hilux Lima",
    "accesorios Ford Ranger Lima",
    "importador accesorios 4x4 Perú",
    "KORIAKI IMPORT",
  ],
  authors: [{ name: "KORIAKI IMPORT" }],
  openGraph: {
    title: "KORIAKI IMPORT — Kits de Conversión y Accesorios 4x4",
    description:
      "Importadores de kits de conversión y accesorios exteriores premium para Toyota Hilux, Fortuner, Prado y Ford Ranger. Stock disponible en Lima, Perú.",
    type: "website",
    locale: "es_PE",
    siteName: "KORIAKI IMPORT",
    images: [
      {
        url: "/img/raptor-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Kit de conversión Hilux por KORIAKI IMPORT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KORIAKI IMPORT — Kits de Conversión y Accesorios 4x4",
    description:
      "Importadores de kits de conversión y accesorios exteriores premium para Toyota y Ford. Stock en Lima, Perú.",
    images: ["/img/raptor-sunset.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${anton.variable} ${oswald.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
