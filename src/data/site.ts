// ─────────────────────────────────────────────────────────────────────────────
// KORIAKI IMPORT — Site data
//
// Single source of truth for all content, types, and helpers.
// PRICING: prices are NOT displayed on the website. Every product CTA
// routes to a personalized WhatsApp quotation. Do not add price fields
// to Product or render them in any UI component.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "KORIAKI IMPORT",
  tagline: "Kits de conversión y accesorios premium para Toyota y Ford",
  phone: "976 382 433",
  whatsapp: "51976382433", // Perú (+51) 976 382 433
  email: "koriakioperaciones@gmail.com",
  address: "Separadora Industrial, Ate — Lima, Perú",
  hours: "Lun. a sáb. · 9:00 a. m. – 6:00 p. m.",
  instagram: "https://www.instagram.com/koriaki.import",
};

// ─── Vehicle compatibility ────────────────────────────────────────────────────

export type Fit =
  // Toyota
  | "Hilux"
  | "Fortuner"
  | "Fortuner Legender"
  | "Prado"
  | "Revo"
  // Ford
  | "Ranger"
  | "Ranger Raptor"
  | "F150"
  // Generic
  | "Universal";

// ─── Icon keys ───────────────────────────────────────────────────────────────

export type IconKey =
  | "convert"
  | "headlight"
  | "taillight"
  | "step"
  | "rain"
  | "led"
  | "bar"
  | "wheel"
  | "bull"
  | "rack"
  | "hood"
  | "fender"
  | "fog";

// ─── Product type ─────────────────────────────────────────────────────────────
// NOTE: No price field. Pricing is handled via personalized WhatsApp quotation.

export type Product = {
  /** Stable URL slug — never change once published (breaks indexed URLs) */
  slug: string;
  name: string;
  desc: string;
  /** Short label highlighting the vehicle generation upgrade, e.g. "Hilux → GR Sport" */
  transforms?: string;
  unit?: string;
  tag?: string;
  image: string;
  fits: Fit[];
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: IconKey;
  image: string;
  products: Product[];
};

// ─────────────────────────────────────────────────────────────────────────────
// CATALOG
// ─────────────────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  // ── 1. Conversion Kits ──────────────────────────────────────────────────
  {
    id: "kits-conversion",
    title: "Kits de Conversión",
    subtitle: "Transforma tu vehículo al estilo de la generación más reciente",
    icon: "convert",
    image: "/img/raptor-yellow.jpg",
    products: [
      {
        slug: "kit-hilux-gr-sport",
        name: "Kit Conversión Hilux → GR Sport",
        desc: "Kit completo de carrocería que transforma tu Hilux al estilo GR Sport: parrilla agresiva, parachoques deportivo, guardafangos ensanchados y emblemas.",
        transforms: "Hilux → GR Sport",
        tag: "DESTACADO",
        image: "/img/raptor-bridge.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "kit-hilux-raptor-style",
        name: "Kit Conversión Hilux → Raptor Style",
        desc: "Transforma tu Hilux con estética Raptor: parrilla, parachoques frontal y trasero, guardafangos y detalles negros mate.",
        transforms: "Hilux → Raptor Style",
        image: "/img/raptor-black.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "kit-fortuner-legender",
        name: "Kit Conversión Fortuner → Legender",
        desc: "Actualiza tu Fortuner al look Legender con parrilla bicolor, parachoques rediseñado y molduras laterales.",
        transforms: "Fortuner → Legender",
        tag: "NUEVO",
        image: "/img/tacoma-forest.jpg",
        fits: ["Fortuner"],
      },
      {
        slug: "kit-ranger-f150-style",
        name: "Kit Conversión Ranger → F150 R Style",
        desc: "Lleva tu Ranger al siguiente nivel con el kit de carrocería F150 R Style: parrilla, parachoques y guardafangos de alto impacto.",
        transforms: "Ranger → F150 R Style",
        image: "/img/raptor-orange.jpg",
        fits: ["Ranger"],
      },
      {
        slug: "kit-revo-facelift",
        name: "Kit Facelift Revo",
        desc: "Kit de actualización frontal y trasera para Toyota Revo, estilo facelift reciente.",
        transforms: "Revo → Facelift",
        image: "/img/raptor-sunset.jpg",
        fits: ["Revo"],
      },
    ],
  },

  // ── 2. Front LED Headlights ─────────────────────────────────────────────
  {
    id: "faros-led",
    title: "Faros LED Delanteros",
    subtitle: "Iluminación de alto rendimiento con DRL secuencial y proyector LED",
    icon: "headlight",
    image: "/img/led-angel.jpg",
    products: [
      {
        slug: "faros-led-hilux-2016-2023",
        name: "Faros LED Hilux 2016–2023",
        desc: "Proyector LED completo con luz diurna secuencial y direccional dinámico. Conexión Plug & Play, temperatura 6000K.",
        tag: "MÁS VENDIDO",
        unit: "par",
        image: "/img/led-angel.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "faros-led-hilux-gr-sport-style",
        name: "Faros LED Hilux Estilo GR Sport",
        desc: "Conjunto para conversión GR Sport con barra DRL integrada y firma luminosa distintiva. Compatibilidad garantizada con Hilux.",
        unit: "par",
        image: "/img/led-glow.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "faros-led-fortuner",
        name: "Faros LED Fortuner",
        desc: "Faros LED completos para Fortuner con DRL secuencial y luz de cruce proyector. Ajuste OEM.",
        unit: "par",
        image: "/img/led-projector.jpg",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "faros-led-ranger-raptor",
        name: "Faros LED Ranger Raptor Style",
        desc: "Diseño OEM+ con barra DRL y guías de luz características del Raptor. Compatible con Ranger y Ranger Raptor.",
        unit: "par",
        image: "/img/led-black.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "faros-led-prado",
        name: "Faros LED Prado",
        desc: "Faros LED de alto rendimiento para Prado con proyector y DRL en ángulo.",
        unit: "par",
        image: "/img/led-angel.jpg",
        fits: ["Prado"],
      },
    ],
  },

  // ── 3. Tail Lights ──────────────────────────────────────────────────────
  {
    id: "faros-posteriores",
    title: "Faros Posteriores",
    subtitle: "Stops LED con intermitente secuencial dinámico",
    icon: "taillight",
    image: "/img/taillight.jpg",
    products: [
      {
        slug: "stops-led-hilux",
        name: "Faros Posteriores LED Hilux",
        desc: "Par de stops LED con intermitente secuencial dinámico. Acabado humo / rojo, conexión directa.",
        unit: "par",
        image: "/img/taillight.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "stops-led-fortuner",
        name: "Faros Posteriores LED Fortuner",
        desc: "Stops LED completos para Fortuner con efecto dinámico y reversa integrada.",
        unit: "par",
        image: "/img/taillight2.jpg",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "stops-led-ranger",
        name: "Faros Posteriores LED Ranger",
        desc: "Par de stops LED secuenciales para Ford Ranger con ajuste OEM.",
        unit: "par",
        image: "/img/taillight-glow.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "stops-led-prado",
        name: "Faros Posteriores LED Prado",
        desc: "Stops LED con intermitente secuencial para Prado, acabado ahumado.",
        unit: "par",
        image: "/img/taillight-y.jpg",
        fits: ["Prado"],
      },
    ],
  },

  // ── 4. Front Bumpers ────────────────────────────────────────────────────
  {
    id: "parachoques-delanteros",
    title: "Parachoques Delanteros",
    subtitle: "Parachoques frontales de alto impacto, estilo OEM y offroad",
    icon: "bull",
    image: "/img/bullbar.jpg",
    products: [
      {
        slug: "parachoques-delantero-hilux-gr",
        name: "Parachoques Delantero Hilux GR Sport Style",
        desc: "Parachoques frontal ABS/PP automotriz con acabado negro mate, soporte para luces auxiliares y ganchos de remolque.",
        tag: "DESTACADO",
        image: "/img/bullbar.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "parachoques-delantero-ranger-raptor",
        name: "Parachoques Delantero Ranger Raptor Style",
        desc: "Parachoques frontal de alto impacto para Ranger con estética Raptor, soporte para winch y luces LED.",
        image: "/img/trx-rear.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "parachoques-delantero-fortuner",
        name: "Parachoques Delantero Fortuner Legender Style",
        desc: "Bumper frontal para Fortuner con diseño Legender, acabado bicolor y soporte para faros auxiliares.",
        image: "/img/bullbar.jpg",
        fits: ["Fortuner", "Fortuner Legender"],
      },
    ],
  },

  // ── 5. Rear Bumpers ─────────────────────────────────────────────────────
  {
    id: "parachoques-traseros",
    title: "Parachoques Traseros",
    subtitle: "Parachoques posteriores con diseño deportivo y acabado premium",
    icon: "bull",
    image: "/img/trx-rear.jpg",
    products: [
      {
        slug: "parachoques-trasero-hilux",
        name: "Parachoques Trasero Hilux GR Sport Style",
        desc: "Parachoques trasero ABS con difusor deportivo, soporte para ménsula de placa y acabado negro mate.",
        image: "/img/trx-rear.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "parachoques-trasero-ranger",
        name: "Parachoques Trasero Ranger F150 Style",
        desc: "Bumper trasero de alto impacto para Ranger con estética F150, gancho de remolque integrado.",
        image: "/img/trx-rear.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
    ],
  },

  // ── 6. Fender Flares ────────────────────────────────────────────────────
  {
    id: "guardafangos",
    title: "Guardafangos Ensanchados",
    subtitle: "Fender flares para mayor amplitud visual y protección de carrocería",
    icon: "fender",
    image: "/img/raptor-orange.jpg",
    products: [
      {
        slug: "guardafangos-hilux-gr",
        name: "Guardafangos Hilux GR Sport Style",
        desc: "Set de 4 guardafangos ensanchados en ABS para Hilux, estilo GR Sport. Acabado texturizado negro.",
        tag: "DESTACADO",
        unit: "juego",
        image: "/img/raptor-orange.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "guardafangos-fortuner",
        name: "Guardafangos Fortuner",
        desc: "Guardafangos ensanchados para Fortuner, ajuste OEM sin perforar la carrocería.",
        unit: "juego",
        image: "/img/raptor-orange.jpg",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "guardafangos-ranger",
        name: "Guardafangos Ranger Raptor Style",
        desc: "Fender flares para Ranger con estética Raptor, cobertura amplia y acabado negro mate.",
        unit: "juego",
        image: "/img/raptor-black.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
    ],
  },

  // ── 7. Grilles ──────────────────────────────────────────────────────────
  {
    id: "parrillas",
    title: "Parrillas Frontales",
    subtitle: "Parrillas de alto impacto que transforman el frente de tu vehículo",
    icon: "convert",
    image: "/img/raptor-black.jpg",
    products: [
      {
        slug: "parrilla-hilux-gr-sport",
        name: "Parrilla Hilux GR Sport Style",
        desc: "Parrilla frontal estilo GR Sport con acabado negro mate y detalles en rojo. ABS de alta resistencia.",
        tag: "MÁS VENDIDO",
        image: "/img/raptor-black.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "parrilla-hilux-raptor",
        name: "Parrilla Hilux Raptor Style",
        desc: "Parrilla frontal estilo Raptor con letras en relieve y soporte para barra LED central.",
        image: "/img/raptor-bridge.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "parrilla-ranger-raptor",
        name: "Parrilla Ranger Raptor",
        desc: "Parrilla OEM style para Ranger Raptor con acabado negro texturizado y letras FORD en relieve.",
        image: "/img/raptor-orange.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "parrilla-fortuner-legender",
        name: "Parrilla Fortuner Legender Style",
        desc: "Parrilla bicolor negro/plata para Fortuner, diseño Legender con acabado premium.",
        image: "/img/raptor-black.jpg",
        fits: ["Fortuner", "Fortuner Legender"],
      },
    ],
  },

  // ── 8. Fog Lights ───────────────────────────────────────────────────────
  {
    id: "neblineros",
    title: "Neblineros y Faros Auxiliares",
    subtitle: "Faros auxiliares LED de alta intensidad para cualquier condición",
    icon: "fog",
    image: "/img/offroad-lightbar.jpg",
    products: [
      {
        slug: "neblineros-led-hilux",
        name: "Neblineros LED Hilux",
        desc: "Par de neblineros LED de alta intensidad para Hilux. Temperatura 6000K, conexión directa al arnés OEM.",
        unit: "par",
        image: "/img/offroad-lightbar.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "neblineros-led-fortuner",
        name: "Neblineros LED Fortuner",
        desc: "Neblineros LED para Fortuner con lente proyector y acabado cromado/negro.",
        unit: "par",
        image: "/img/led-black.jpg",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "faros-cubo-led",
        name: "Faros Cubo LED (par)",
        desc: "Cubos LED de 4 pulgadas para parrilla o parachoques. Haz concentrado, IP68.",
        unit: "par",
        image: "/img/led-black.jpg",
        fits: ["Universal"],
      },
    ],
  },

  // ── 9. LED Bars ─────────────────────────────────────────────────────────
  {
    id: "barras-led",
    title: "Barras LED",
    subtitle: "Barras de luz para techo, parrilla y parachoques",
    icon: "bar",
    image: "/img/lightbar.jpg",
    products: [
      {
        slug: "barra-led-curva-22",
        name: "Barra LED Curva 22\"",
        desc: "Barra LED curva de 120W con haz combinado spot/flood, carcasa de aluminio aeronáutico IP68. Incluye arnés, relé y switch.",
        tag: "NUEVO",
        image: "/img/offroad-lightbar.jpg",
        fits: ["Universal"],
      },
      {
        slug: "barra-led-techo-kit",
        name: "Barra LED Techo + Soportes",
        desc: "Kit completo para techo con arnés, relé y soportes a medida para Hilux y Raptor.",
        image: "/img/lightbar.jpg",
        fits: ["Hilux", "Ranger Raptor"],
      },
    ],
  },

  // ── 10. Wheels ──────────────────────────────────────────────────────────
  {
    id: "aros",
    title: "Aros y Rines",
    subtitle: "Rines todoterreno reforzados en varios diámetros",
    icon: "wheel",
    image: "/img/wheels.jpg",
    products: [
      {
        slug: "aros-todoterreno-17-negros",
        name: "Aros Todoterreno 17\" Negros",
        desc: "Diseño offroad con acabado negro mate, alta resistencia. Patrón 6×139.7, compatible con Hilux, Fortuner y Ranger.",
        tag: "DESTACADO",
        unit: "juego",
        image: "/img/wheels.jpg",
        fits: ["Hilux", "Fortuner", "Ranger"],
      },
      {
        slug: "aros-maquinados-18",
        name: "Aros 18\" Maquinados",
        desc: "Aleación reforzada con acabado negro y maquinado de alta gama. Patrón 6×139.7.",
        unit: "juego",
        image: "/img/wheels2.jpg",
        fits: ["Hilux", "Fortuner", "Ranger Raptor"],
      },
    ],
  },

  // ── 11. Running Boards ──────────────────────────────────────────────────
  {
    id: "pisaderas",
    title: "Pisaderas",
    subtitle: "Estribos laterales de aluminio y acero, antideslizantes",
    icon: "step",
    image: "/img/raptor-black.jpg",
    products: [
      {
        slug: "pisaderas-aluminio-hilux",
        name: "Pisaderas Aluminio Hilux",
        desc: "Estribo de aluminio con insertos antideslizantes y soportes incluidos. Ajuste exacto para Hilux.",
        unit: "par",
        tag: "OFERTA",
        image: "/img/raptor-black.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "pisaderas-tubo-negro-ranger",
        name: "Pisaderas Tubo Negro Ranger",
        desc: "Estribos tubulares de acero negro mate para Ranger y Ranger Raptor.",
        unit: "par",
        image: "/img/raptor-sunset.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
      {
        slug: "pisaderas-fortuner",
        name: "Pisaderas Fortuner / Prado",
        desc: "Pisaderas de aluminio con superficie antideslizante para Fortuner y Prado.",
        unit: "par",
        image: "/img/raptor-black.jpg",
        fits: ["Fortuner", "Fortuner Legender", "Prado"],
      },
    ],
  },

  // ── 12. Rain Guards ─────────────────────────────────────────────────────
  {
    id: "cubrelluvias",
    title: "Cubrelluvias",
    subtitle: "Deflectores de ventana ahumados, fijación sin perforar",
    icon: "rain",
    image: "/img/raptor-orange.jpg",
    products: [
      {
        slug: "cubrelluvias-hilux-4p",
        name: "Cubrelluvias Hilux (4 puertas)",
        desc: "Acrílico ahumado de alta calidad con cinta 3M. Fijación sin perforar la carrocería. Juego de 4 piezas.",
        unit: "juego",
        image: "/img/raptor-orange.jpg",
        fits: ["Hilux"],
      },
      {
        slug: "cubrelluvias-fortuner",
        name: "Cubrelluvias Fortuner",
        desc: "Conjunto de cubrelluvias ahumados para Fortuner, ajuste exacto por modelo.",
        unit: "juego",
        image: "/img/raptor-bridge.jpg",
        fits: ["Fortuner", "Fortuner Legender"],
      },
      {
        slug: "cubrelluvias-ranger",
        name: "Cubrelluvias Ranger",
        desc: "Deflectores de ventana ahumados para Ford Ranger, fijación con cinta 3M.",
        unit: "juego",
        image: "/img/raptor-sunset.jpg",
        fits: ["Ranger", "Ranger Raptor"],
      },
    ],
  },

  // ── 13. Roof Racks & Accessories ────────────────────────────────────────
  {
    id: "canastillas",
    title: "Canastillas y Portaequipajes",
    subtitle: "Parrillas de techo modulares para aventura y trabajo",
    icon: "rack",
    image: "/img/overland.jpg",
    products: [
      {
        slug: "canastilla-portaequipajes-hilux",
        name: "Canastilla Portaequipajes Hilux / Fortuner",
        desc: "Plataforma modular de aluminio con rieles en T. Capacidad dinámica hasta 150 kg.",
        image: "/img/overland.jpg",
        fits: ["Hilux", "Fortuner"],
      },
      {
        slug: "barras-techo-universal",
        name: "Barras de Techo + Portaequipaje",
        desc: "Juego de barras transversales con cerradura y base universal para múltiples modelos.",
        unit: "juego",
        image: "/img/overland-amarok.jpg",
        fits: ["Universal"],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY POOLS — images shown in each product category detail
// ─────────────────────────────────────────────────────────────────────────────

const categoryGallery: Record<string, string[]> = {
  "kits-conversion": [
    "/img/raptor-yellow.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-black.jpg",
    "/img/raptor-orange.jpg",
    "/img/raptor-sunset.jpg",
    "/img/tacoma-forest.jpg",
  ],
  "faros-led": [
    "/img/led-angel.jpg",
    "/img/led-glow.jpg",
    "/img/led-projector.jpg",
    "/img/led-black.jpg",
  ],
  "faros-posteriores": [
    "/img/taillight.jpg",
    "/img/taillight2.jpg",
    "/img/taillight-glow.jpg",
    "/img/taillight-y.jpg",
    "/img/taillight-suv.jpg",
  ],
  "parachoques-delanteros": [
    "/img/bullbar.jpg",
    "/img/trx-rear.jpg",
    "/img/raptor-black.jpg",
    "/img/offroad-lightbar.jpg",
  ],
  "parachoques-traseros": [
    "/img/trx-rear.jpg",
    "/img/raptor-bridge.jpg",
    "/img/bullbar.jpg",
  ],
  guardafangos: [
    "/img/raptor-orange.jpg",
    "/img/raptor-black.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-sunset.jpg",
  ],
  parrillas: [
    "/img/raptor-black.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-orange.jpg",
  ],
  neblineros: [
    "/img/offroad-lightbar.jpg",
    "/img/led-black.jpg",
    "/img/lightbar.jpg",
  ],
  "barras-led": [
    "/img/lightbar.jpg",
    "/img/offroad-lightbar.jpg",
    "/img/led-black.jpg",
    "/img/hero-night.jpg",
  ],
  aros: [
    "/img/wheels.jpg",
    "/img/wheels2.jpg",
    "/img/wheel-detail1.jpg",
    "/img/wheel-detail2.jpg",
    "/img/wheel-detail3.jpg",
  ],
  pisaderas: [
    "/img/raptor-black.jpg",
    "/img/raptor-sunset.jpg",
    "/img/raptor-bridge.jpg",
  ],
  cubrelluvias: [
    "/img/raptor-orange.jpg",
    "/img/raptor-bridge.jpg",
    "/img/raptor-sunset.jpg",
  ],
  canastillas: [
    "/img/overland.jpg",
    "/img/overland-amarok.jpg",
    "/img/rooftop-tent.jpg",
    "/img/tacoma-forest.jpg",
  ],
};

function buildGallery(categoryId: string, main: string): string[] {
  const pool = categoryGallery[categoryId] ?? [];
  return Array.from(new Set([main, ...pool])).slice(0, 6);
}

// ─────────────────────────────────────────────────────────────────────────────
// FLAT PRODUCT — enriched product used by Marketplace, ProductDetail, Cart
// ─────────────────────────────────────────────────────────────────────────────

export type FlatProduct = Product & {
  /** Stable page ID — same as slug */
  id: string;
  categoryId: string;
  categoryTitle: string;
  gallery: string[];
};

export const allProducts: FlatProduct[] = categories.flatMap((c) =>
  c.products.map((p) => ({
    ...p,
    id: p.slug,          // slug is the stable URL ID — never index-based
    categoryId: c.id,
    categoryTitle: c.title,
    gallery: buildGallery(c.id, p.image),
  }))
);

export function getProduct(id: string): FlatProduct | undefined {
  return allProducts.find((p) => p.id === id);
}

export function relatedProducts(p: FlatProduct, n = 4): FlatProduct[] {
  const same = allProducts.filter((x) => x.categoryId === p.categoryId && x.id !== p.id);
  const others = allProducts.filter((x) => x.categoryId !== p.categoryId && x.id !== p.id);
  return [...same, ...others].slice(0, n);
}

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY SPECS — shown on product detail pages
// No price fields. No installation claims.
// ─────────────────────────────────────────────────────────────────────────────

export const categorySpecs: Record<string, { label: string; value: string }[]> = {
  "kits-conversion": [
    { label: "Material", value: "ABS / PP automotriz" },
    { label: "Incluye", value: "Parrilla, bumper, guardafangos, emblemas" },
    { label: "Compatibilidad", value: "Por modelo y año" },
    { label: "Garantía", value: "6 meses" },
  ],
  "faros-led": [
    { label: "Tecnología", value: "Full LED + DRL secuencial" },
    { label: "Conexión", value: "Plug & Play" },
    { label: "Temperatura", value: "6000K blanco frío" },
    { label: "Garantía", value: "12 meses" },
  ],
  "faros-posteriores": [
    { label: "Tecnología", value: "LED dinámico secuencial" },
    { label: "Acabado", value: "Humo / rojo" },
    { label: "Conexión", value: "Plug & Play" },
    { label: "Garantía", value: "12 meses" },
  ],
  "parachoques-delanteros": [
    { label: "Material", value: "ABS / PP de alta resistencia" },
    { label: "Acabado", value: "Negro mate texturizado" },
    { label: "Compatibilidad", value: "Específico por modelo" },
    { label: "Garantía", value: "6 meses" },
  ],
  "parachoques-traseros": [
    { label: "Material", value: "ABS / PP de alta resistencia" },
    { label: "Acabado", value: "Negro mate texturizado" },
    { label: "Compatibilidad", value: "Específico por modelo" },
    { label: "Garantía", value: "6 meses" },
  ],
  guardafangos: [
    { label: "Material", value: "ABS flexible" },
    { label: "Acabado", value: "Negro texturizado" },
    { label: "Fijación", value: "OEM, sin modificar carrocería" },
    { label: "Garantía", value: "6 meses" },
  ],
  parrillas: [
    { label: "Material", value: "ABS de alta resistencia" },
    { label: "Acabado", value: "Negro mate / detalles cromados" },
    { label: "Compatibilidad", value: "Específico por modelo" },
    { label: "Garantía", value: "6 meses" },
  ],
  neblineros: [
    { label: "Tecnología", value: "LED de alta intensidad" },
    { label: "Temperatura", value: "6000K blanco frío" },
    { label: "Conexión", value: "Plug & Play arnés OEM" },
    { label: "Protección", value: "IP67" },
  ],
  "barras-led": [
    { label: "Potencia", value: "120W combo spot/flood" },
    { label: "Protección", value: "IP68 sumergible" },
    { label: "Carcasa", value: "Aluminio aeronáutico" },
    { label: "Incluye", value: "Arnés + relé + switch" },
  ],
  aros: [
    { label: "Material", value: "Aleación reforzada" },
    { label: "Patrón", value: "6×139.7" },
    { label: "Diámetros", value: "17\" / 18\"" },
    { label: "Garantía", value: "Estructural" },
  ],
  pisaderas: [
    { label: "Material", value: "Aluminio / acero" },
    { label: "Superficie", value: "Antideslizante" },
    { label: "Soportes", value: "Incluidos" },
    { label: "Garantía", value: "6 meses" },
  ],
  cubrelluvias: [
    { label: "Material", value: "Acrílico ahumado" },
    { label: "Fijación", value: "Cinta 3M (sin perforar)" },
    { label: "Cobertura", value: "4 puertas" },
    { label: "Garantía", value: "6 meses" },
  ],
  canastillas: [
    { label: "Material", value: "Aluminio modular" },
    { label: "Sistema", value: "Rieles en T" },
    { label: "Carga", value: "Hasta 150 kg dinámica" },
    { label: "Garantía", value: "12 meses" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VEHICLE SELECTOR — models and need → category map
// ─────────────────────────────────────────────────────────────────────────────

export const selectorModels: { label: string; fit: Fit | null; brand: "Toyota" | "Ford" | null }[] = [
  // Toyota
  { label: "Hilux",             fit: "Hilux",            brand: "Toyota" },
  { label: "Fortuner",          fit: "Fortuner",         brand: "Toyota" },
  { label: "Fortuner Legender", fit: "Fortuner Legender",brand: "Toyota" },
  { label: "Prado",             fit: "Prado",            brand: "Toyota" },
  { label: "Revo",              fit: "Revo",             brand: "Toyota" },
  // Ford
  { label: "Ranger",            fit: "Ranger",           brand: "Ford"   },
  { label: "Ranger Raptor",     fit: "Ranger Raptor",    brand: "Ford"   },
  { label: "F150",              fit: "F150",             brand: "Ford"   },
  // Other
  { label: "Otro / No estoy seguro", fit: null,          brand: null     },
];

export const needToCategory: Record<string, string> = {
  "Kit de Conversión":        "kits-conversion",
  "Faros LED Delanteros":     "faros-led",
  "Faros Posteriores":        "faros-posteriores",
  "Parachoques Delantero":    "parachoques-delanteros",
  "Parachoques Trasero":      "parachoques-traseros",
  "Guardafangos":             "guardafangos",
  "Parrilla Frontal":         "parrillas",
  "Neblineros / Auxiliares":  "neblineros",
  "Barra LED":                "barras-led",
  "Aros y Rines":             "aros",
  "Pisaderas":                "pisaderas",
  "Cubrelluvias":             "cubrelluvias",
  "Portaequipajes / Techo":   "canastillas",
};

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY — homepage masonry grid
// ─────────────────────────────────────────────────────────────────────────────

export const gallery: { src: string; alt: string; span?: boolean }[] = [
  { src: "/img/raptor-sunset.jpg",    alt: "Kit conversión Hilux al estilo Raptor",           span: true },
  { src: "/img/overland.jpg",         alt: "Fortuner con portaequipajes y barra LED"                     },
  { src: "/img/offroad-lightbar.jpg", alt: "Ranger con barra LED y parachoques offroad"                  },
  { src: "/img/raptor-bridge.jpg",    alt: "Hilux GR Sport Style con kit de conversión completo"         },
  { src: "/img/wheels.jpg",           alt: "Aros todoterreno 17 pulgadas para Hilux y Fortuner"          },
  { src: "/img/bullbar.jpg",          alt: "Parachoques delantero con soporte para winch"                },
  { src: "/img/led-angel.jpg",        alt: "Faros LED con DRL secuencial para Hilux"                     },
  { src: "/img/taillight2.jpg",       alt: "Faros posteriores LED secuenciales"                          },
];
