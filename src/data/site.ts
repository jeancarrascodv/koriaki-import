export const site = {
  name: "KORIAKI IMPORT",
  tagline: "Conversiones & Modernización 4x4",
  phone: "+51 999 999 999",
  whatsapp: "51999999999", // editar: número real con código de país
  email: "ventas@koriakiimport.com",
  address: "Separadora Industrial, Ate — Lima, Perú",
  hours: "Lun a Sáb · 9:00 a.m. – 6:00 p.m.",
  instagram: "https://instagram.com/koriakiimport",
};

export type Product = {
  name: string;
  desc: string;
  price: number; // soles, precio de distribuidor
  unit?: string;
  tag?: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  icon: "convert" | "headlight" | "taillight" | "step" | "rain" | "led";
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "conversiones",
    title: "Conversiones",
    subtitle: "Transforma tu Hilux o Raptor con kits de carrocería completos",
    icon: "convert",
    products: [
      { name: "Kit Conversión Hilux → Raptor", desc: "Parrilla, parachoques, guardafangos y emblemas. Look Ford Raptor completo.", price: 4200, tag: "TOP" },
      { name: "Kit Conversión Hilux GR Sport", desc: "Estética deportiva GR: parrilla, bumper y detalles negros.", price: 3500 },
      { name: "Kit Carrocería Raptor (restyling)", desc: "Renovación frontal y posterior para Ford Raptor modelos previos.", price: 3900 },
    ],
  },
  {
    id: "faros-led",
    title: "Faros LED Delanteros",
    subtitle: "Iluminación de alto rendimiento con DRL secuencial",
    icon: "headlight",
    products: [
      { name: "Faros LED Hilux 2016–2023", desc: "Proyector full LED, luz diurna secuencial y direccional dinámico.", price: 1450, unit: "par", tag: "MÁS VENDIDO" },
      { name: "Faros LED Ford Raptor", desc: "Diseño OEM+ con barra DRL y guías de luz.", price: 1680, unit: "par" },
      { name: "Faros LED Hilux estilo Raptor", desc: "Conjunto para conversión, plug & play.", price: 1390, unit: "par" },
    ],
  },
  {
    id: "faros-posteriores",
    title: "Faros Posteriores",
    subtitle: "Stops LED con secuencial e intermitente dinámico",
    icon: "taillight",
    products: [
      { name: "Faros Posteriores LED Hilux", desc: "Humo / rojo, intermitente secuencial estilo Mustang.", price: 980, unit: "par" },
      { name: "Faros Posteriores Ford Raptor", desc: "Full LED con efecto dinámico y reversa integrada.", price: 1120, unit: "par" },
    ],
  },
  {
    id: "pisaderas",
    title: "Pisaderas",
    subtitle: "Estribos laterales reforzados, antideslizantes",
    icon: "step",
    products: [
      { name: "Pisaderas Aluminio Hilux", desc: "Estribo de aluminio con insertos antideslizantes y soportes.", price: 720, unit: "par", tag: "OFERTA" },
      { name: "Pisaderas Tubo Negro Raptor", desc: "Tubular acero negro mate, alta resistencia.", price: 650, unit: "par" },
    ],
  },
  {
    id: "cubrelluvias",
    title: "Cubrelluvias",
    subtitle: "Deflectores de ventana ahumados a medida",
    icon: "rain",
    products: [
      { name: "Cubrelluvias Hilux (4 puertas)", desc: "Acrílico ahumado con cinta 3M, instalación sin perforar.", price: 180, unit: "juego" },
      { name: "Cubrelluvias Ford Raptor", desc: "Set completo ahumado, ajuste exacto.", price: 200, unit: "juego" },
    ],
  },
];
