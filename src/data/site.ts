export const site = {
  name: "KORIAKI IMPORT",
  tagline: "Conversiones & Modernización 4x4",
  phone: "+51 998 477 446",
  whatsapp: "51998477446", // Perú (+51) 998 477 446
  email: "ventas@koriakiimport.com",
  address: "Separadora Industrial, Ate — Lima, Perú",
  hours: "Lun a Sáb · 9:00 a.m. – 6:00 p.m.",
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
      { name: "Kit Conversión Hilux → Raptor", desc: "Parrilla, parachoques, guardafangos y emblemas. Look Ford Raptor completo.", price: 4200, tag: "TOP", image: "/img/raptor-bridge.jpg", fits: ["Hilux"] },
      { name: "Kit Conversión Hilux GR Sport", desc: "Estética deportiva GR: parrilla, bumper y detalles negros.", price: 3500, image: "/img/raptor-black.jpg", fits: ["Hilux"] },
      { name: "Kit Carrocería Raptor (restyling)", desc: "Renovación frontal y posterior para Ford Raptor modelos previos.", price: 3900, image: "/img/raptor-orange.jpg", fits: ["Raptor"] },
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
      { name: "Faros LED Ford Raptor", desc: "Diseño OEM+ con barra DRL y guías de luz.", price: 1680, unit: "par", image: "/img/led-glow.jpg", fits: ["Raptor"] },
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
      { name: "Faros Posteriores LED Hilux", desc: "Humo / rojo, intermitente secuencial estilo Mustang.", price: 980, unit: "par", image: "/img/taillight.jpg", fits: ["Hilux"] },
      { name: "Faros Posteriores Ford Raptor", desc: "Full LED con efecto dinámico y reversa integrada.", price: 1120, unit: "par", image: "/img/taillight2.jpg", fits: ["Raptor"] },
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
      { name: "Cubrelluvias Ford Raptor", desc: "Set completo ahumado, ajuste exacto.", price: 200, unit: "juego", image: "/img/raptor-bridge.jpg", fits: ["Raptor"] },
    ],
  },
];

// Producto plano con metadatos de categoría — usado por el Marketplace
export type FlatProduct = Product & {
  id: string;
  categoryId: string;
  categoryTitle: string;
};

export const allProducts: FlatProduct[] = categories.flatMap((c) =>
  c.products.map((p, i) => ({
    ...p,
    id: `${c.id}-${i}`,
    categoryId: c.id,
    categoryTitle: c.title,
  }))
);

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
  { src: "/img/raptor-sunset.jpg", alt: "Ford Raptor al atardecer", span: true },
  { src: "/img/overland.jpg", alt: "Toyota 4x4 overland con roof rack y barra LED" },
  { src: "/img/offroad-lightbar.jpg", alt: "4x4 con barra LED y defensa en la noche" },
  { src: "/img/raptor-bridge.jpg", alt: "Ford Raptor negro modernizado" },
  { src: "/img/wheels.jpg", alt: "Aros off-road con neumático todoterreno" },
  { src: "/img/bullbar.jpg", alt: "Defensa frontal con ganchos de rescate" },
  { src: "/img/led-angel.jpg", alt: "Faros LED con luz diurna" },
  { src: "/img/taillight2.jpg", alt: "Faros posteriores LED" },
];
