
export interface ViewportMedia {
  vimeoUrl?: string;
  images: { src: string; alt: string }[];
}

export interface ShopifyProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  thumbnail: string;
  projectUrl?: string;
  password?: string;
  desktop?: ViewportMedia;
  mobile?: ViewportMedia;
}

export const shopifyProjects: ShopifyProject[] = [
  {
    id: "shutsami",
    title: "Shutsami",
    description: "Desarrollo completo de tema Shopify personalizado.",
    longDescription:
      "Plataforma e-commerce para venta de productos orientales en Shopify, desarrollado a medida con secciones Liquid personalizadas, diseño responsive y optimización de conversión.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    thumbnail: "1.webp",
    projectUrl: "https://shutsami.myshopify.com",
    password: "demo_2026",
    desktop: {
      vimeoUrl: "https://player.vimeo.com/video/1197986706",
      images: [
        { src: "1.webp", alt: "Captura desktop 1" },
        { src: "2.webp", alt: "Captura desktop 2" },
        { src: "3.webp", alt: "Captura desktop 3" },
        { src: "4.webp", alt: "Captura desktop 4" },
        { src: "5.webp", alt: "Captura desktop 5" },
        { src: "6.webp", alt: "Captura desktop 6" },
      ],
    },
    mobile: {
      vimeoUrl: "https://player.vimeo.com/video/1198018452",
      images: [
        { src: "1m.webp", alt: "Captura móvil 1" },
        { src: "2m.webp", alt: "Captura móvil 2" },
        { src: "3m.webp", alt: "Captura móvil 3" },
        { src: "4m.webp", alt: "Captura móvil 4" },
        { src: "5m.webp", alt: "Captura móvil 5" },
        { src: "6m.webp", alt: "Captura móvil 6" },
        { src: "7m.webp", alt: "Captura móvil 7" },
        { src: "8m.webp", alt: "Captura móvil 8" },
        { src: "9m.webp", alt: "Captura móvil 9" },
        { src: "10m.webp", alt: "Captura móvil 10" },
        { src: "11m.webp", alt: "Captura móvil 11" },
        { src: "12m.webp", alt: "Captura móvil 12" },
      ],
    },
  },
];
