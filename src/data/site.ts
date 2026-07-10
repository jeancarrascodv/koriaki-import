export const site = {
  name: "KORIAKI IMPORT",
  tagline: "Conversiones & Modernización 4x4",
  phone: "+51 998 477 446",
  whatsapp: "51998477446", // Perú (+51) 998 477 446
  email: "koriakioperaciones@gmail.com",
  address: "Separadora Industrial, Ate — Lima, Perú",
  hours: "Mon to Sat · 9:00 a.m. – 6:00 p.m.",
  instagram: "https://instagram.com/koriakiimport",
};

export type Fit = "Hilux" | "Raptor" | "Ranger" | "Universal";

export type Product = {
  name: string;
  desc: string;
  price: number; // soles, precio de distribuidor
  unit?: string;
  tag?: string;
  image: string;
  fits: Fit[];
};

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
  | "rack";

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: IconKey;
  image: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "conversiones",
    title: "Conversiones",
    subtitle: "Transforma tu Hilux o Raptor con kits de carrocería completos",
    icon: "convert",
    image: "/img/raptor-yellow.jpg",
    products: [
      { name: "Kit Conversión Hilux → Raptor", desc: "Parrilla, parachoques, guardafangos y emblemas. Look Raptor completo.", price: 4200, tag: "TOP", image: "/img/raptor-bridge.jpg", fits: ["Hilux"] },
      { name: "Kit Conversión Hilux Deportivo", desc: "Estética deportiva: parrilla, bumper y detalles negros.", price: 3500, image: "/img/raptor-black.jpg", fits: ["Hilux"] },
      { name: "Kit Carrocería Raptor (restyling)", desc: "Renovación frontal y posterior para Raptor modelos previos.", price: 3900, image: "/img/raptor-orange.jpg", fits: ["Raptor"] },
    ],
  },
  {
    id: "faros-led",
    title: "Faros LED Delanteros",
    subtitle: "Iluminación de alto rendimiento con DRL secuencial",
    icon: "headlight",
    image: "/img/led-angel.jpg",
    products: [
      { name: "Faros LED Hilux 2016–2023", desc: "Proyector full LED, luz diurna secuencial y direccional dinámico.", price: 1450, unit: "par", tag: "MÁS VENDIDO", image: "/img/led-angel.jpg", fits: ["Hilux"] },
      { name: "Faros LED Raptor", desc: "Diseño OEM+ con barra DRL y guías de luz.", price: 1680, unit: "par", image: "/img/led-glow.jpg", fits: ["Raptor"] },
      { name: "Faros LED Hilux estilo Raptor", desc: "Conjunto para conversión, plug & play.", price: 1390, unit: "par", image: "/img/led-projector.jpg", fits: ["Hilux"] },
    ],
  },
  {
    id: "faros-posteriores",
    title: "Faros Posteriores",
    subtitle: "Stops LED con secuencial e intermitente dinámico",
    icon: "taillight",
    image: "/img/taillight.jpg",
    products: [
      { name: "Faros Posteriores LED Hilux", desc: "Humo / rojo, intermitente secuencial dinámico.", price: 980, unit: "par", image: "/img/taillight.jpg", fits: ["Hilux"] },
      { name: "Faros Posteriores Raptor", desc: "Full LED con efecto dinámico y reversa integrada.", price: 1120, unit: "par", image: "/img/taillight2.jpg", fits: ["Raptor"] },
    ],
  },
  {
    id: "barras-led",
    title: "Barras LED",
    subtitle: "Light bars y faros auxiliares para off-road",
    icon: "bar",
    image: "/img/lightbar.jpg",
    products: [
      { name: 'Barra LED Curva 22"', desc: "Combo spot/flood, 120W, carcasa de aluminio IP68.", price: 540, tag: "NUEVO", image: "/img/offroad-lightbar.jpg", fits: ["Universal"] },
      { name: "Barra LED Techo + soportes", desc: "Kit completo con arnés, relé y soportes a medida.", price: 690, image: "/img/lightbar.jpg", fits: ["Hilux", "Raptor"] },
      { name: "Faros Auxiliares Cube (par)", desc: "Cubos LED 4\" para parrilla o parachoques. Spot.", price: 260, unit: "par", image: "/img/led-black.jpg", fits: ["Universal"] },
    ],
  },
  {
    id: "aros",
    title: "Aros & Rines",
    subtitle: "Rines off-road reforzados, varios diámetros",
    icon: "wheel",
    image: "/img/wheels.jpg",
    products: [
      { name: 'Aros Off-Road 17" Negro', desc: "Diseño beadlock-look, alta resistencia. Patrón 6x139.", price: 1280, unit: "juego", tag: "TOP", image: "/img/wheels.jpg", fits: ["Hilux", "Raptor", "Ranger"] },
      { name: 'Aros 18" Maquinado', desc: "Acabado negro/maquinado para look premium.", price: 1520, unit: "juego", image: "/img/wheels2.jpg", fits: ["Hilux", "Raptor", "Ranger"] },
    ],
  },
  {
    id: "defensas",
    title: "Defensas & Bull Bar",
    subtitle: "Parachoques reforzados con winch y ganchos",
    icon: "bull",
    image: "/img/bullbar.jpg",
    products: [
      { name: "Defensa Delantera + soporte winch", desc: "Acero reforzado con ganchos de rescate y luces.", price: 1850, tag: "OFERTA", image: "/img/bullbar.jpg", fits: ["Hilux", "Raptor"] },
      { name: "Bull Bar Tubular Negro", desc: "Protección frontal tubular, pintura electrostática.", price: 980, image: "/img/trx-rear.jpg", fits: ["Hilux", "Ranger"] },
    ],
  },
  {
    id: "canastillas",
    title: "Canastillas & Roof Rack",
    subtitle: "Parrillas de techo y portaequipaje overland",
    icon: "rack",
    image: "/img/overland.jpg",
    products: [
      { name: "Canastilla Roof Rack Overland", desc: "Plataforma modular de aluminio con rieles en T.", price: 1450, image: "/img/overland.jpg", fits: ["Hilux", "Raptor"] },
      { name: "Barras de Techo + portaequipaje", desc: "Juego de barras transversales con cerradura.", price: 620, unit: "juego", image: "/img/overland.jpg", fits: ["Universal"] },
    ],
  },
  {
    id: "pisaderas",
    title: "Pisaderas",
    subtitle: "Estribos laterales reforzados, antideslizantes",
    icon: "step",
    image: "/img/raptor-black.jpg",
    products: [
      { name: "Pisaderas Aluminio Hilux", desc: "Estribo de aluminio con insertos antideslizantes y soportes.", price: 720, unit: "par", tag: "OFERTA", image: "/img/raptor-black.jpg", fits: ["Hilux"] },
      { name: "Pisaderas Tubo Negro Raptor", desc: "Tubular acero negro mate, alta resistencia.", price: 650, unit: "par", image: "/img/raptor-sunset.jpg", fits: ["Raptor"] },
    ],
  },
  {
    id: "cubrelluvias",
    title: "Cubrelluvias",
    subtitle: "Deflectores de ventana ahumados a medida",
    icon: "rain",
    image: "/img/raptor-orange.jpg",
    products: [
      { name: "Cubrelluvias Hilux (4 puertas)", desc: "Acrílico ahumado con cinta 3M, instalación sin perforar.", price: 180, unit: "juego", image: "/img/raptor-orange.jpg", fits: ["Hilux"] },
      { name: "Cubrelluvias Raptor", desc: "Set completo ahumado, ajuste exacto.", price: 200, unit: "juego", image: "/img/raptor-bridge.jpg", fits: ["Raptor"] },
    ],
  },
];

// Pool de imágenes por categoría — usado para armar la galería de cada ficha
const categoryGallery: Record<string, string[]> = {
  conversiones: ["/img/raptor-yellow.jpg", "/img/raptor-bridge.jpg", "/img/raptor-black.jpg", "/img/raptor-orange.jpg", "/img/raptor-sunset.jpg"],
  "faros-led": ["/img/led-angel.jpg", "/img/led-glow.jpg", "/img/led-projector.jpg", "/img/led-black.jpg"],
  "faros-posteriores": ["/img/taillight.jpg", "/img/taillight2.jpg", "/img/taillight-glow.jpg", "/img/taillight-y.jpg", "/img/taillight-suv.jpg"],
  "barras-led": ["/img/lightbar.jpg", "/img/offroad-lightbar.jpg", "/img/led-black.jpg", "/img/hero-night.jpg", "/img/overland.jpg"],
  aros: ["/img/wheels.jpg", "/img/wheels2.jpg", "/img/wheel-detail1.jpg", "/img/wheel-detail2.jpg", "/img/wheel-detail3.jpg"],
  defensas: ["/img/bullbar.jpg", "/img/trx-rear.jpg", "/img/raptor-black.jpg", "/img/offroad-lightbar.jpg", "/img/raptor-orange.jpg"],
  canastillas: ["/img/overland.jpg", "/img/overland-amarok.jpg", "/img/rooftop-tent.jpg", "/img/tacoma-forest.jpg"],
  pisaderas: ["/img/raptor-black.jpg", "/img/raptor-sunset.jpg", "/img/raptor-bridge.jpg", "/img/wheels.jpg"],
  cubrelluvias: ["/img/raptor-orange.jpg", "/img/raptor-bridge.jpg", "/img/raptor-sunset.jpg"],
};

function buildGallery(categoryId: string, main: string): string[] {
  const pool = categoryGallery[categoryId] ?? [];
  return Array.from(new Set([main, ...pool])).slice(0, 6);
}

// Producto plano con metadatos de categoría — usado por el Marketplace y las fichas
export type FlatProduct = Product & {
  id: string;
  slug: string;
  categoryId: string;
  categoryTitle: string;
  gallery: string[];
};

export const allProducts: FlatProduct[] = categories.flatMap((c) =>
  c.products.map((p, i) => ({
    ...p,
    id: `${c.id}-${i}`,
    slug: `${c.id}-${i}`,
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

// Especificaciones genéricas por categoría para la ficha de producto
export const categorySpecs: Record<string, { label: string; value: string }[]> = {
  conversiones: [
    { label: "Material", value: "ABS / PP automotriz" },
    { label: "Incluye", value: "Parrilla, bumper, emblemas" },
    { label: "Instalación", value: "Profesional (disponible)" },
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
  "barras-led": [
    { label: "Potencia", value: "120W combo spot/flood" },
    { label: "Protección", value: "IP68 sumergible" },
    { label: "Carcasa", value: "Aluminio aeronáutico" },
    { label: "Incluye", value: "Arnés + relé + switch" },
  ],
  aros: [
    { label: "Material", value: "Aleación reforzada" },
    { label: "Patrón", value: "6x139.7" },
    { label: "Diámetros", value: '17\" / 18\"' },
    { label: "Garantía", value: "Estructural" },
  ],
  defensas: [
    { label: "Material", value: "Acero al carbono" },
    { label: "Pintura", value: "Electrostática anticorrosiva" },
    { label: "Soporta", value: "Winch / cabrestante" },
    { label: "Incluye", value: "Ganchos de rescate" },
  ],
  canastillas: [
    { label: "Material", value: "Aluminio modular" },
    { label: "Sistema", value: "Rieles en T" },
    { label: "Carga", value: "Hasta 150 kg dinámica" },
    { label: "Garantía", value: "12 meses" },
  ],
  pisaderas: [
    { label: "Material", value: "Aluminio / acero" },
    { label: "Superficie", value: "Antideslizante" },
    { label: "Instalación", value: "Con soportes incluidos" },
    { label: "Garantía", value: "6 meses" },
  ],
  cubrelluvias: [
    { label: "Material", value: "Acrílico ahumado" },
    { label: "Fijación", value: "Cinta 3M (sin perforar)" },
    { label: "Cobertura", value: "4 puertas" },
    { label: "Garantía", value: "6 meses" },
  ],
};

// Mapa de "¿qué buscas?" (selector) -> id de categoría
export const needToCategory: Record<string, string> = {
  Conversión: "conversiones",
  "Faros LED": "faros-led",
  "Faros posteriores": "faros-posteriores",
  "Barras LED": "barras-led",
  "Aros & Rines": "aros",
  Defensas: "defensas",
  Canastillas: "canastillas",
  Pisaderas: "pisaderas",
  Cubrelluvias: "cubrelluvias",
};

export const gallery: { src: string; alt: string; span?: boolean }[] = [
  { src: "/img/raptor-sunset.jpg", alt: "Raptor al atardecer", span: true },
  { src: "/img/overland.jpg", alt: "camioneta 4x4 overland con roof rack y barra LED" },
  { src: "/img/offroad-lightbar.jpg", alt: "4x4 con barra LED y defensa en la noche" },
  { src: "/img/raptor-bridge.jpg", alt: "Raptor negro modernizado" },
  { src: "/img/wheels.jpg", alt: "Aros off-road con neumático todoterreno" },
  { src: "/img/bullbar.jpg", alt: "Defensa frontal con ganchos de rescate" },
  { src: "/img/led-angel.jpg", alt: "Faros LED con luz diurna" },
  { src: "/img/taillight2.jpg", alt: "Faros posteriores LED" },
];
