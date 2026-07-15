import type { LocalizedText, ViewportMedia } from "@/lib/types";
export type { ViewportMedia };

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


export const frontendProjects: FrontendProject[] = [

    //===========================SANTA PAPA==========================
    {
      id: "santa-papa",
      title: "Santa Papa",
      description: {
        es: "Sutileza en un universo de marca diferenciadora donde la interactividad y el dinamismo caracterizan su sitio web.",
        en: "Subtlety in a universe of distinctive branding where interactivity and dynamism characterize its website.",
      },
      longDescription: {
        es: "La landing page de la marca de snacks gourmet Santa Papa bebe de la mezcla de pinceladas elegantes, satíricas y atrevidas que la caracterizan. Ha sido desarrollada contando con Next.js y React como base, una capa de Tailwind CSS que complementa el CSS personalizado, animaciones interactivas con GSAP + ScrollTrigger y TypeScript para mantener un código sólido y mantenible. Introduce una funcionalidad nueva: un tablón interactivo en el que cada usuario que visite el sitio web puede plasmar unas palabras a modo de feedback comunitario.",
        en: "The landing page for the gourmet snack brand Santa Papa draws on the elegant, satirical, and bold touches that characterize the brand. It was developed using Next.js and React as its foundation, a Tailwind CSS layer complementing the custom CSS, interactive animations with GSAP + ScrollTrigger, and TypeScript to maintain robust and maintainable code. It introduces a new feature: an interactive message board where each visitor can leave a message as a form of community feedback.",
      },
      tech: ["Next.js", "React", "GSAP", "Tailwind CSS", "CSS3"],
      thumbnail: "spd1.webp",
      projectUrl: "https://www.santapapa.es",
      desktop: {
        vimeoUrl: "https://www.youtube-nocookie.com/embed/pNqzVj0riEc?si=IZFVmsVyJUjjx5_c",
        images: [
          { src: "spd1.webp",  alt: "Vista desktop 1"  },
          { src: "spd2.webp",  alt: "Vista desktop 2"  },
          { src: "spd3.webp",  alt: "Vista desktop 3"  },
          { src: "spd4.webp",  alt: "Vista desktop 4"  },
          { src: "spd5.webp",  alt: "Vista desktop 5"  },
          { src: "spd6.webp",  alt: "Vista desktop 6"  },
          { src: "spd7.webp",  alt: "Vista desktop 7"  },
          { src: "spd8.webp",  alt: "Vista desktop 8"  },
        ],
      },
      mobile: {
        vimeoUrl: "https://www.youtube-nocookie.com/embed/J8noUfO0jac",
        images: [
          { src: "spm1.webp", alt: "Vista móvil 1" },
          { src: "spm2.webp", alt: "Vista móvil 2" },
          { src: "spm3.webp", alt: "Vista móvil 3" },
          { src: "spm4.webp", alt: "Vista móvil 4" },
          { src: "spm5.webp", alt: "Vista móvil 5" },
        ],
      },
    },
  
  
  //===========================VULCAN==========================
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
    tech: ["CSS3", "JavaScript"],
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
    tech: ["CSS3", "JavaScript"],
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


      //===========================CÁRITAS==========================
      {
        id: "caritas",
        title: "Cáritas Banyeres de Mariola",
        description: {
          es: "Sitio web para Cáritas Parroquial Banyeres de Mariola",
          en: "Cáritas Parroquial Banyeres de Mariola website",
        },
        longDescription: {
          es: "Formas sutiles, minimalismo y luz convergen en esta plataforma web para dar visibilidad a la labor de Cáritas, mostrar sus actividades tanto gráfica como textualmente y dar facilidad al usuario que precise de su ayuda.",
          en: "Subtle forms, minimalism, and light converge on this web platform to highlight the work of Cáritas, showcase its activities through both visuals and text, and make it easy for users in need of assistance to access help.",
        },
        tech: ["React", "Vite", "Framer Motion", "React Router", "CSS3", "JavaScript"],
        thumbnail: "thumbnail.webp",
        projectUrl: "https://www.caritasbanyeres.com",
        desktop: {
          vimeoUrl: "https://www.youtube.com/embed/g_22YWAPNQQ?si=mGRPjptv8s2Xo3en",
          images: [
            { src: "cd1.webp",  alt: "Vista desktop 1"  },
            { src: "cd3.webp",  alt: "Vista desktop 3"  },
            { src: "cd4.webp",  alt: "Vista desktop 4"  },
            { src: "cd5.webp",  alt: "Vista desktop 5"  },
            { src: "cd6.webp",  alt: "Vista desktop 6"  },
            { src: "cd7.webp",  alt: "Vista desktop 7"  },
            { src: "cd8.webp",  alt: "Vista desktop 8"  },
          ],
        },
        mobile: {
          vimeoUrl: "https://www.youtube-nocookie.com/embed/rw6LyGE2F_8",
          images: [
            { src: "cm1.webp", alt: "Vista móvil 1" },
            { src: "cm2.webp", alt: "Vista móvil 2" },
            { src: "cm3.webp", alt: "Vista móvil 3" },
            { src: "cm4.webp", alt: "Vista móvil 4" },
            { src: "cm5.webp", alt: "Vista móvil 5" },
            { src: "cm6.webp", alt: "Vista móvil 6" },
          ],
        },
      },

];


