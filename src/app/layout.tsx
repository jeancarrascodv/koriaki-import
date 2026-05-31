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
  metadataBase: new URL("https://koriaki-import.vercel.app"),
  title: {
    default: "KORIAKI IMPORT — Conversiones Hilux & Raptor | Lima",
    template: "%s | KORIAKI IMPORT",
  },
  description:
    "Conversiones, faros LED, faros posteriores, pisaderas y cubrelluvias para Hilux y Raptor. Modernización de vehículos 4x4. Almacén en Separadora Industrial, Ate, Lima. Precios de distribuidor.",
  keywords: [
    "conversiones Hilux",
    "Raptor Perú",
    "faros LED Hilux",
    "pisaderas pickup",
    "cubrelluvias",
    "modernización 4x4",
    "accesorios Hilux Lima",
    "KORIAKI IMPORT",
  ],
  authors: [{ name: "KORIAKI IMPORT" }],
  openGraph: {
    title: "KORIAKI IMPORT — Conversiones & Accesorios 4x4",
    description:
      "Conversiones Hilux a Raptor, faros LED, pisaderas y más. Precios de distribuidor en Lima.",
    type: "website",
    locale: "es_PE",
    siteName: "KORIAKI IMPORT",
    images: [
      {
        url: "/img/raptor-sunset.jpg",
        width: 1200,
        height: 630,
        alt: "Raptor modernizado por KORIAKI IMPORT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KORIAKI IMPORT — Conversiones & Accesorios 4x4",
    description: "Conversiones Hilux/Raptor, faros LED, pisaderas y más. Precios de distribuidor en Lima.",
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
