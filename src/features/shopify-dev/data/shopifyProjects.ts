
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
      vimeoUrl: "https://vimeo.com/1197986706?fl=ip&fe=ec",
      images: [
        { src: "1.webp", alt: "Captura desktop 1" },
        { src: "2.webp", alt: "Captura desktop 2" },
        { src: "3.webp", alt: "Captura desktop 3" },
      ],
    },
    mobile: {
      vimeoUrl: "https://player.vimeo.com/video/YYYYYYYYY",
      images: [
        { src: "4.webp", alt: "Captura móvil 1" },
        { src: "5.webp", alt: "Captura móvil 2" },
        { src: "6.webp", alt: "Captura móvil 3" },
      ],
    },
  },
];
