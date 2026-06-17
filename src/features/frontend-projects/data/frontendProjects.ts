export interface LocalizedText {
  es: string;
  en: string;
}

export interface ViewportMedia {
  vimeoUrl?: string;
  images: { src: string; alt: string }[];
}

export interface FrontendProject {
  id: string;
  title: string;
  description: LocalizedText;
  longDescription?: LocalizedText;
  tech: string[];
  thumbnail: string;
  projectUrl?: string;
  desktop?: ViewportMedia;
  mobile?: ViewportMedia;
}


//===========================VULCAN==========================
export const frontendProjects: FrontendProject[] = [
  {
    id: "vulcan",
    title: "Vulcan",
    description: {
      es: "Elegancia, branding robusto e innovación de proceso en el producto.",
      en: "Elegance, strong branding and process innovation in the product.",
    },
    longDescription: {
      es: "El website de Vulcan hace justicia a su línea de cosméticos de procedencia volcánica y sostenible. Es una landing page con clase y contenido cautivadores, desarrollada con HTML5, CSS3 y JavaScript. Incluye animaciones CSS avanzadas, scroll reveal, 4 colores corporativos concretos y una experiencia de usuario inmersiva tanto en escritorio como en móvil.",
      en: "The Vulcan website does justice to its line of volcanic and sustainable cosmetics. It is a landing page with captivating style and content, developed with HTML5, CSS3 and JavaScript. It includes advanced CSS animations, scroll reveal, 4 specific brand colors and an immersive user experience on both desktop and mobile.",
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    thumbnail: "d1.webp",
    projectUrl: "https://pedro-millan.github.io/Vulcan/",
    desktop: {
      vimeoUrl: "https://player.vimeo.com/video/1198001651",
      images: [
        { src: "d1.webp",  alt: "Vista desktop 1"  },
        { src: "d2.webp",  alt: "Vista desktop 2"  },
        { src: "d3.webp",  alt: "Vista desktop 3"  },
        { src: "d4.webp",  alt: "Vista desktop 4"  },
        { src: "d5.webp",  alt: "Vista desktop 5"  },
        { src: "d6.webp",  alt: "Vista desktop 6"  },
        { src: "d7.webp",  alt: "Vista desktop 7"  },
        { src: "d8.webp",  alt: "Vista desktop 8"  },
        { src: "d9.webp",  alt: "Vista desktop 9"  },
        { src: "d10.webp", alt: "Vista desktop 10" },
      ],
    },
    mobile: {
      vimeoUrl: "https://player.vimeo.com/video/1198009167",
      images: [
        { src: "m1.webp", alt: "Vista móvil 1" },
        { src: "m2.webp", alt: "Vista móvil 2" },
        { src: "m3.webp", alt: "Vista móvil 3" },
        { src: "m4.webp", alt: "Vista móvil 4" },
        { src: "m5.webp", alt: "Vista móvil 5" },
        { src: "m6.webp", alt: "Vista móvil 6" },
      ],
    },
  },



//===========================BOGGO FRESH BAGEL==========================

  {
    id: "boggo",
    title: "Boggo",
    description: {
      es: "Website temático para un restaurante innovador.",
      en: "Themed website for an innovative restaurant.",
    },
    longDescription: {
      es: "Boggo Fresh Bagel es una web estática desarrollada para un restaurante ficticio especializado en bagels, con una identidad visual inspirada en los diners americanos de los años 50. El proyecto presenta una experiencia colorida, divertida y responsive, incluyendo una home con vídeo y animaciones, carta de productos por categorías, formulario de reserva de mesa, Club Boggo con sistema de puntos y páginas informativas complementarias.",
      en: "Boggo Fresh Bagel is a static website developed for a fictional restaurant specialized in bagels, with a visual identity inspired by 1950s American diners. The project offers a colorful, playful and responsive experience, including a home page with video and animations, a product menu organized by categories, a table reservation form, Club Boggo with a points system, and additional informational pages.",
    },
    tech: ["HTML5", "CSS3", "JavaScript"],
    thumbnail: "boggo_desktop/1d.webp",
    projectUrl: "https://pedro-millan.github.io/Boggo/",
    desktop: {
      vimeoUrl: "https://www.youtube-nocookie.com/embed/GHIZgBopRMY",
      images: [
        { src: "boggo_desktop/1d.webp",  alt: "Vista desktop 1"  },
        { src: "boggo_desktop/2d.webp",  alt: "Vista desktop 2"  },
        { src: "boggo_desktop/3d.webp",  alt: "Vista desktop 3"  },
        { src: "boggo_desktop/4d.webp",  alt: "Vista desktop 4"  },
        { src: "boggo_desktop/5d.webp",  alt: "Vista desktop 5"  },
        { src: "boggo_desktop/6d.webp",  alt: "Vista desktop 6"  },
        { src: "boggo_desktop/7d.webp",  alt: "Vista desktop 7"  },
        { src: "boggo_desktop/8d.webp",  alt: "Vista desktop 8"  },
        { src: "boggo_desktop/9d.webp",  alt: "Vista desktop 9"  },
        { src: "boggo_desktop/10d.webp", alt: "Vista desktop 10" },
      ],
    },
    mobile: {
      vimeoUrl: "https://www.youtube-nocookie.com/embed/tT38cH-R6LY" ,
      images: [
        { src: "boggo_movil/1m.webp", alt: "Vista móvil 1" },
        { src: "boggo_movil/2m.webp", alt: "Vista móvil 2" },
        { src: "boggo_movil/3m.webp", alt: "Vista móvil 3" },
        { src: "boggo_movil/4m.webp", alt: "Vista móvil 4" },
        { src: "boggo_movil/5m.webp", alt: "Vista móvil 5" },
        { src: "boggo_movil/6m.webp", alt: "Vista móvil 6" },
      ],
    },
  },
];
