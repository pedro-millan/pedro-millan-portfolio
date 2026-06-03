export interface ViewportMedia {
  video?: string;
  images: { src: string; alt: string }[];
}

export type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

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
  media?: MediaItem[];
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
    media: [
      { type: "video", src: "shutsami-video-demo.mp4" },
      { type: "image", src: "1.webp", alt: "Captura 1" },
      { type: "image", src: "2.webp", alt: "Captura 2" },
      { type: "image", src: "3.webp", alt: "Captura 3" },
      { type: "image", src: "4.webp", alt: "Captura 4" },
      { type: "image", src: "5.webp", alt: "Captura 5" },
      { type: "image", src: "6.webp", alt: "Captura 6" },
    ],
  },
];
