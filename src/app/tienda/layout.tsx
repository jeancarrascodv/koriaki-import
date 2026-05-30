import { CartProvider } from "@/components/cart/CartProvider";
import { TiendaNav } from "@/components/cart/TiendaNav";
import { CartDrawer } from "@/components/cart/CartDrawer";

export default function TiendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <TiendaNav />
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
