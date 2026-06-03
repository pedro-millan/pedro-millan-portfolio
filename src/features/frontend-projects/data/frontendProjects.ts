
export interface ViewportMedia {
  vimeoUrl?: string;
  images: { src: string; alt: string }[];
}

export interface FrontendProject {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  thumbnail: string;
  projectUrl?: string;
  desktop?: ViewportMedia;
  mobile?: ViewportMedia;
}

export const frontendProjects: FrontendProject[] = [
  {
    id: "vulcan",
    title: "Vulcan",
    description: "Landing page con diseño futurista, animaciones CSS y diseño totalmente responsive.",
    longDescription:
      "Vulcan es una landing page de diseño futurista desarrollada con HTML5, CSS3 y JavaScript. Incluye animaciones CSS avanzadas, scroll reveal, paleta oscura con acentos violeta y una experiencia de usuario inmersiva tanto en escritorio como en móvil.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    thumbnail: "d1.webp",
    projectUrl: "https://pedro-millan.github.io/Vulcan/",
    desktop: {
      vimeoUrl: "https://player.vimeo.com/video/1198001651?",
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
];
