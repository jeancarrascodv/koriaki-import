import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { VehicleSelector } from "@/components/VehicleSelector";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <Providers>
      <Nav />
      <main className="flex-1">
        <Hero />
        <VehicleSelector />
        <div className="mt-20">
          <Trust />
        </div>
        <Services />
        <Gallery />
        <Products />
        <section className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-accent/20 via-steel to-steel p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="eyebrow text-xs text-accent">Catálogo completo</p>
                <h3 className="font-display uppercase mt-2 text-3xl sm:text-4xl">
                  Explora todos nuestros productos
                </h3>
                <p className="mt-2 max-w-xl text-white/65">
                  Busca por modelo, categoría o nombre. Agrega lo que te interesa
                  a tu lista y solicita una cotización personalizada por WhatsApp.
                </p>
              </div>
              <a
                href="/tienda"
                className="shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-soft px-8 py-4 font-cond text-base font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
              >
                Ver catálogo →
              </a>
            </div>
          </div>
        </section>
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </Providers>
  );
}
