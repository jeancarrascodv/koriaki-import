import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProducts, getProduct } from "@/data/site";
import { ProductDetail } from "@/components/ProductDetail";
import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/JsonLd";

const BASE = "https://koriakiimport.com";

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

  const compatibleWith = product.fits
    .filter((f) => f !== "Universal")
    .join(", ");

  const description = `${product.desc}${
    compatibleWith ? ` Compatible con ${compatibleWith}.` : ""
  } Importación directa. Solicita cotización personalizada — KORIAKI IMPORT, Lima, Perú.`;

  return {
    title: `${product.name} — ${product.categoryTitle}`,
    description,
    alternates: {
      canonical: `${BASE}/tienda/${id}`,
    },
    openGraph: {
      title: `${product.name} | KORIAKI IMPORT`,
      description,
      url: `${BASE}/tienda/${id}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | KORIAKI IMPORT`,
      description,
      images: [product.image],
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

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: BASE },
          { name: "Catálogo", url: `${BASE}/tienda` },
          { name: product.categoryTitle, url: `${BASE}/tienda?categoria=${product.categoryId}` },
          { name: product.name, url: `${BASE}/tienda/${id}` },
        ]}
      />
      <ProductJsonLd
        name={product.name}
        description={product.desc}
        image={product.image}
        id={product.id}
        categoryTitle={product.categoryTitle}
        fits={product.fits}
      />
      <ProductDetail product={product} />
    </>
  );
}
