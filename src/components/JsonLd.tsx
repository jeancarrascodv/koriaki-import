/**
 * JSON-LD structured data components for KORIAKI IMPORT.
 *
 * All schemas are rendered as <script type="application/ld+json"> in <head>.
 * No prices are exposed — business model is quotation-based.
 */

const BASE = "https://koriakiimport.com";
const LOGO = `${BASE}/img/LOGO-HORIZONTAL.png`;

// ─── Reusable address ────────────────────────────────────────────────────────

const address = {
  "@type": "PostalAddress",
  streetAddress: "Separadora Industrial",
  addressLocality: "Ate",
  addressRegion: "Lima",
  addressCountry: "PE",
};

// ─── Organization ────────────────────────────────────────────────────────────

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "KORIAKI IMPORT",
    url: BASE,
    logo: {
      "@type": "ImageObject",
      url: LOGO,
      width: 400,
      height: 100,
    },
    description:
      "Importadores y distribuidores de kits de conversión y accesorios exteriores premium para Toyota Hilux, Fortuner, Prado y Ford Ranger. Stock en Lima, Perú.",
    address,
    telephone: "+51976382433",
    email: "koriakioperaciones@gmail.com",
    sameAs: ["https://www.instagram.com/koriaki.import"],
    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── LocalBusiness ───────────────────────────────────────────────────────────

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "@id": `${BASE}/#business`,
    name: "KORIAKI IMPORT",
    url: BASE,
    image: `${BASE}/img/raptor-sunset.jpg`,
    logo: LOGO,
    description:
      "Importadores directos de kits de conversión, faros LED, parachoques y accesorios exteriores premium para Toyota y Ford. Almacén en Ate, Lima.",
    address,
    telephone: "+51976382433",
    email: "koriakioperaciones@gmail.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-12.0291",
      longitude: "-76.9638",
    },
    priceRange: "$$",
    servesCuisine: undefined,
    sameAs: ["https://www.instagram.com/koriaki.import"],
    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
    hasMap:
      "https://www.google.com/maps/search/?api=1&query=Separadora+Industrial+Ate+Lima",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── WebSite ─────────────────────────────────────────────────────────────────

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: "KORIAKI IMPORT",
    description:
      "Catálogo de kits de conversión y accesorios 4x4 para Toyota y Ford — importación directa desde Lima, Perú.",
    publisher: { "@id": `${BASE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/tienda?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── BreadcrumbList ──────────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Product ─────────────────────────────────────────────────────────────────

interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  id: string;
  categoryTitle: string;
  fits: string[];
}

export function ProductJsonLd({
  name,
  description,
  image,
  id,
  categoryTitle,
  fits,
}: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image.startsWith("http") ? image : `${BASE}${image}`,
    url: `${BASE}/tienda/${id}`,
    brand: {
      "@type": "Brand",
      name: "KORIAKI IMPORT",
    },
    category: categoryTitle,
    audience: {
      "@type": "PeopleAudience",
      suggestedGender: "unisex",
    },
    additionalProperty: fits.map((fit) => ({
      "@type": "PropertyValue",
      name: "Compatible con",
      value: fit,
    })),
    seller: {
      "@id": `${BASE}/#business`,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${BASE}/#business` },
      areaServed: { "@type": "Country", name: "Peru" },
      // No price exposed — quotation-based business model
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
