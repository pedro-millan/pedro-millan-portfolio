export interface LocalizedText {
  es: string;
  en: string;
}

export interface ViewportMedia {
  vimeoUrl?: string;
  images: { src: string; alt: string }[];
}

export interface WebApp {
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

export const webApps: WebApp[] = [
  {
    id: "lowfator",
    title: "LowFator",
    description: {
      es: "Aplicación web para procesado de audio.",
      en: "Web application for audio processing.",
    },
    longDescription: {
      es: "Especial para procesamiento de audio creativo. Permite experimentar con texturas y efectos para modular el archivo de audio subido por el usuario.",
      en: "Designed for creative audio processing. Lets users experiment with textures and effects to modulate their uploaded audio file.",
    },
    tech: ["React", "Python", "TypeScript", "Tailwind", "FastAPI", "Wavesurfer.js", "JavaScript", "HTML", "CSS", "Uvicorn"],
    thumbnail: "lf1.webp",
    projectUrl: "https://github.com/pedro-millan/LowFator",
    desktop: {
      vimeoUrl: "https://player.vimeo.com/video/1198095820",
      images: [
        { src: "lfd1.webp", alt: "Vista LowFator desktop 1" },
        { src: "lfd2.webp", alt: "Vista LowFator desktop 2" },
        { src: "lfd3.webp", alt: "Vista LowFator desktop 3" },
        { src: "lfd4.webp", alt: "Vista LowFator desktop 4" },
        { src: "lfd5.webp", alt: "Vista LowFator desktop 5" },
      ],
    },
    mobile: {
      vimeoUrl: "https://player.vimeo.com/video/1198100990",
      images: [
        { src: "lfm2.webp", alt: "Vista LowFator móvil 1" },
        { src: "lfm3.webp", alt: "Vista LowFator móvil 2" },
        { src: "lfm4.webp", alt: "Vista LowFator móvil 3" },
        { src: "lfm5.webp", alt: "Vista LowFator móvil 4" },
      ],
    },
  },
];
