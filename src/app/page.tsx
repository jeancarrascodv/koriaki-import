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
    <>
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
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
