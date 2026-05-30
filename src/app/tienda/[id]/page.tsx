import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts, getProduct } from "@/data/site";
import { ProductDetail } from "@/components/ProductDetail";

export function generateStaticParams() {
  return allProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} — ${product.categoryTitle}`,
    description: `${product.desc} Precio de distribuidor. Compatible con ${product.fits.join(", ")}. KORIAKI IMPORT, Lima.`,
    openGraph: {
      title: `${product.name} | KORIAKI IMPORT`,
      description: product.desc,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
