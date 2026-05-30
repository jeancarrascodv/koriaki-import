import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koriaki-import.vercel.app"),
  title: {
    default: "KORIAKI IMPORT — Conversiones Toyota Hilux & Ford Raptor | Lima",
    template: "%s | KORIAKI IMPORT",
  },
  description:
    "Conversiones, faros LED, faros posteriores, pisaderas y cubrelluvias para Toyota Hilux y Ford Raptor. Modernización de vehículos 4x4. Almacén en Separadora Industrial, Ate, Lima. Precios de distribuidor.",
  keywords: [
    "conversiones Hilux",
    "Ford Raptor Perú",
    "faros LED Hilux",
    "pisaderas Toyota",
    "cubrelluvias",
    "modernización 4x4",
    "accesorios Hilux Lima",
    "KORIAKI IMPORT",
  ],
  authors: [{ name: "KORIAKI IMPORT" }],
  openGraph: {
    title: "KORIAKI IMPORT — Conversiones & Accesorios 4x4",
    description:
      "Conversiones Toyota Hilux a Ford Raptor, faros LED, pisaderas y más. Precios de distribuidor en Lima.",
    type: "website",
    locale: "es_PE",
    siteName: "KORIAKI IMPORT",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
