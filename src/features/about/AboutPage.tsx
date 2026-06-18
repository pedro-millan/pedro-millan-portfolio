import { ArrowUpRight, Code2, Database, Github, Palette, Server, ShoppingBag, Wrench, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const base = import.meta.env.BASE_URL;

const si = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`;
const di = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

type SkillBlock = {
  title: string;
  description: string;
  icons: { src: string; alt: string }[];
  tags: string[];
  icon: React.ReactNode;
};

type Certification = {
  title: string;
  subtitle: string;
  badge: string;
};

function SkillBlockCard({ block }: { block: SkillBlock }) {
  return (
    <article className="reveal-up min-h-[22rem] border-b border-neutral-200 p-8 md:border-r lg:p-10">
      <div className="mb-8 flex flex-wrap gap-3">
        {block.icons.map((item) => (
          <div key={item.alt} className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 p-3">
            <img src={item.src} alt={item.alt} className="h-full w-full object-contain" loading="lazy" />
          </div>
        ))}
      </div>

      <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">{block.title}</h3>
      <p className="mb-8 text-base leading-7 text-neutral-600">{block.description}</p>

      <div className="flex flex-wrap gap-2">
        {block.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function CertificationCard({ cert, onOpen }: { cert: Certification; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="reveal-up flex h-full w-full items-center gap-5 rounded-[1.5rem] border border-neutral-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
    >
      <img src={`${base}${cert.badge}`} alt={cert.title} className="h-24 w-24 shrink-0 rounded-xl object-contain" loading="lazy" />
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-neutral-950">{cert.title}</h3>
        <p className="mt-1 text-sm leading-5 text-neutral-600">{cert.subtitle}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-neutral-950">Ampliar <ArrowUpRight size={14} /></span>
      </div>
    </button>
  );
}

export default function AboutPage() {
  const { t, lang } = useLanguage();
  const a = t.about;
  const [openCert, setOpenCert] = useState<Certification | null>(null);

  const content = {
    es: {
      kicker: "// sobre mí",
      intro:
        "Actualmente mi perfil técnico se enfoca en la construcción de websites profesionales, interfaces modernos, soluciones web para empresas, plataformas e-commerce personalizadas y aplicaciones y herramientas web.\n\nMe especializo contínuamente en el uso de los frameworks frontend más modernos, como React y Next.js, y tecnologías backend como FastAPI y Spring Boot para la construcción de experiencias de usuario cuidadas y profesionales. A su vez, desarrollo plataformas de e-commerce personalizadas en Shopify, así como aplicaciones y herramientas web para el uso de empresas y particulares de cualquier sector. Mi base full stack me permite entender y poner en práctica flujos completos que abarcan interfaz, lógica, datos, despliegue y mantenimiento.\n\nDestaco mi uso avanzado de IA agéntica y la implementación que hago de ella en mi flujo de trabajo diario, lo que me permite maximizar la eficacia en cada proyecto y una eficiencia elevada respecto a tiempos de ejecución.",
      skillsKicker: "// habilidades aplicadas",
      skillsTitle: "Cómo uso mi stack en proyectos reales",
      skillsIntro:
        "He reorganizado mi stack para mostrar no solo qué tecnologías conozco, sino dónde las aplico y qué tipo de resultado puedo aportar en un equipo.",
      certificationsIntro: "Certificaciones que respaldan mi base técnica y mi compromiso con el aprendizaje continuo.",

      ctaTitle: "¿Buscas un Web Developer junior con criterio visual, constancia y base full stack?",
      ctaButton: "Contáctame",
      blocks: [
        {
          title: "Desarrollo Frontend e Interfaces",
          description:
            "Construyo interfaces responsive con React, Vite, JavaScript, TypeScript, HTML5 y CSS3, cuidando componentes, jerarquía visual, animaciones, accesibilidad y experiencia de usuario.",
          icons: [
            { src: si("html5", "E34F26"), alt: "HTML5" },
            { src: `${base}css3-logo.png`, alt: "CSS3" },
            { src: si("javascript", "F7DF1E"), alt: "JavaScript" },
            { src: si("typescript", "3178C6"), alt: "TypeScript" },
            { src: si("react", "61DAFB"), alt: "React" },
          ],
          tags: ["React", "Vite", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
          icon: <Code2 size={26} />,
        },
        {
          title: "Shopify, e-commerce y aplicaciones",
          description:
            "Personalizo temas, secciones y estructuras de tienda con Liquid y Shopify CLI. También desarrollo herramientas y aplicaciones para Shopify orientadas a mejorar la experiencia de tienda, producto y conversión.",
          icons: [
            { src: si("shopify", "95BF47"), alt: "Shopify" },
            { src: `${base}liquid-logo.png`, alt: "Liquid" },
          ],
          tags: ["Shopify", "Liquid", "Shopify CLI", "Theme Customization", "Collections", "Shopify Apps"],
          icon: <ShoppingBag size={26} />,
        },
        {
          title: "Backend, APIs y lógica de servidor",
          description:
            "He desarrollado endpoints, formularios funcionales, APIs REST, lógica de procesamiento y proyectos de programación con FastAPI, PHP, Node.js, Java, Python y bases de datos.",
          icons: [
            { src: si("fastapi", "009688"), alt: "FastAPI" },
            { src: si("nodedotjs", "5FA04E"), alt: "Node.js" },
            { src: si("php", "777BB4"), alt: "PHP" },
            { src: si("python", "3776AB"), alt: "Python" },
            { src: di("java"), alt: "Java" },
          ],
          tags: ["FastAPI", "Node.js", "Java", "PHP", "REST APIs", "Python", "MariaDB"],
          icon: <Server size={26} />,
        },
        {
          title: "Bases de datos y persistencia",
          description:
            "Diseño esquemas, relaciones, consultas SQL y conexiones backend para almacenar contenido dinámico, usuarios, actividades o datos de aplicación.",
          icons: [
            { src: si("mysql", "4479A1"), alt: "MySQL" },
            { src: si("mariadb", "003545"), alt: "MariaDB" },
          ],
          tags: ["MariaDB", "MySQL", "SQL", "CRUD", "Modelado"],
          icon: <Database size={26} />,
        },
        {
          title: "Diseño visual y branding web",
          description:
            "Combino desarrollo con criterio visual: composición, tipografías, color, jerarquía y recursos gráficos. Mi experiencia con Photoshop y Premiere refuerza la creación de identidades visuales profesionales.",
          icons: [
            { src: `${base}photoshop-logo.png`, alt: "Adobe Photoshop" },
            { src: `${base}premiere-logo.png`, alt: "Adobe Premiere Pro" },
            { src: `${base}mag.webp`, alt: "Magnific" },
          ],
          tags: ["UI", "Responsive", "Branding", "Photoshop", "Premiere", "Identidad visual"],
          icon: <Palette size={26} />,
        },
        {
          title: "Flujo profesional con Git, despliegue e IA",
          description:
            "Trabajo con GitHub, Vercel, VS Code y herramientas de IA. Uso Claude Code de forma nativa junto a PonyTail para optimizar la eficiencia del código, revisar cambios y acelerar el flujo de desarrollo.",
          icons: [
            { src: si("git", "F05032"), alt: "Git" },
            { src: si("github", "181717"), alt: "GitHub" },
            { src: `${base}OpenAI.png`, alt: "OpenAI" },
            { src: `${base}claude-pro.png`, alt: "Claude" },
            { src: `${base}ponytail.png`, alt: "PonyTail" },
          ],
          tags: ["Git", "GitHub", "Vercel", "VS Code", "Claude Code", "PonyTail"],
          icon: <Wrench size={26} />,
        },
      ],
      certifications: [
        { title: "PCAP · Certified Associate Python Programmer", subtitle: "Programación orientada a objetos, módulos, excepciones, archivos y fundamentos avanzados de Python.", badge: "certi.webp" },
        { title: "PCEP · Certified Entry-Level Python Programmer", subtitle: "Fundamentos de Python, estructuras de control, funciones, colecciones y lógica básica.", badge: "pcepcertif.webp" },
        { title: "Introducción a la Seguridad Cibernética · Cisco", subtitle: "Conceptos básicos de ciberseguridad, amenazas, protección de organizaciones y buenas prácticas digitales.", badge: "ciber.webp" },
        { title: "NDG Linux Unhatched · Cisco Networking Academy", subtitle: "Introducción a Linux, línea de comandos y fundamentos de sistemas para perfiles IT.", badge: "linux.webp" },
      ],
    },
    en: {
      kicker: "// about me",
      intro:
        "Currently, my technical profile focuses on building professional websites, modern interfaces, web solutions for businesses, custom e-commerce platforms, and web applications and tools.\n\nI'm constantly specializing in using the latest frontend frameworks, such as React and Next.js, and backend technologies like FastAPI and Spring Boot to build polished and professional user experiences. I also develop custom e-commerce platforms on Shopify, as well as web applications and tools for businesses and individuals in any sector. My full-stack foundation allows me to understand and implement complete workflows encompassing interface, logic, data, deployment, and maintenance.\n\nI highlight my advanced use of agentic AI and its integration into my daily workflow, which allows me to maximize effectiveness in each project and achieve high efficiency in execution times.",
      skillsKicker: "// applied skills",
      skillsTitle: "How I use my stack in real projects",
      skillsIntro:
        "I have reorganized my stack to show not only which technologies I know, but where I apply them and what kind of outcome I can contribute to a team.",
      certificationsIntro: "Certifications that support my technical foundation and commitment to continuous learning.",

      ctaTitle: "Looking for a junior Web Developer with visual judgement, consistency and a full-stack foundation?",
      ctaButton: "Contact me",
      blocks: [
        {
          title: "Frontend & Interface Development",
          description: "I build responsive interfaces with React, Vite, JavaScript, TypeScript, HTML5 and CSS3, taking care of components, visual hierarchy, animations, accessibility and user experience.",
          icons: [
            { src: si("html5", "E34F26"), alt: "HTML5" },
            { src: `${base}css3-logo.png`, alt: "CSS3" },
            { src: si("javascript", "F7DF1E"), alt: "JavaScript" },
            { src: si("typescript", "3178C6"), alt: "TypeScript" },
            { src: si("react", "61DAFB"), alt: "React" },
          ],
          tags: ["React", "Vite", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
          icon: <Code2 size={26} />,
        },
        {
          title: "Shopify, e-commerce & applications",
          description: "I customize themes, sections and store structures with Liquid and Shopify CLI. I also develop Shopify tools and applications aimed at improving store, product and conversion experiences.",
          icons: [{ src: si("shopify", "95BF47"), alt: "Shopify" }, { src: `${base}liquid-logo.png`, alt: "Liquid" }],
          tags: ["Shopify", "Liquid", "Shopify CLI", "Theme Customization", "Collections", "Shopify Apps"],
          icon: <ShoppingBag size={26} />,
        },
        {
          title: "Backend, APIs & server logic",
          description: "I have developed endpoints, functional forms, REST APIs, processing logic and programming projects with FastAPI, PHP, Node.js, Java, Python and databases.",
          icons: [{ src: si("fastapi", "009688"), alt: "FastAPI" }, { src: si("nodedotjs", "5FA04E"), alt: "Node.js" }, { src: si("php", "777BB4"), alt: "PHP" }, { src: si("python", "3776AB"), alt: "Python" }, { src: di("java"), alt: "Java" }],
          tags: ["FastAPI", "Node.js", "Java", "PHP", "REST APIs", "Python", "MariaDB"],
          icon: <Server size={26} />,
        },
        {
          title: "Databases & persistence",
          description: "I design schemas, relationships, SQL queries and backend connections to store dynamic content, users, activities or application data.",
          icons: [{ src: si("mysql", "4479A1"), alt: "MySQL" }, { src: si("mariadb", "003545"), alt: "MariaDB" }],
          tags: ["MariaDB", "MySQL", "SQL", "CRUD", "Modeling"],
          icon: <Database size={26} />,
        },
        {
          title: "Visual design & web branding",
          description: "I combine development with visual judgement: composition, typography, color, hierarchy and graphic assets. Photoshop and Premiere reinforce my ability to create professional visual identities.",
          icons: [{ src: `${base}photoshop-logo.png`, alt: "Adobe Photoshop" }, { src: `${base}premiere-logo.png`, alt: "Adobe Premiere Pro" }, { src: `${base}mag.webp`, alt: "Magnific" }],
          tags: ["UI", "Responsive", "Branding", "Photoshop", "Premiere", "Visual identity"],
          icon: <Palette size={26} />,
        },
        {
          title: "Professional workflow with Git, deployment & AI",
          description: "I work with GitHub, Vercel, VS Code and AI tools. I use Claude Code natively together with PonyTail to optimize code efficiency, review changes and speed up my development workflow.",
          icons: [{ src: si("git", "F05032"), alt: "Git" }, { src: si("github", "181717"), alt: "GitHub" }, { src: `${base}OpenAI.png`, alt: "OpenAI" }, { src: `${base}claude-pro.png`, alt: "Claude" }, { src: `${base}ponytail.png`, alt: "PonyTail" }],
          tags: ["Git", "GitHub", "Vercel", "VS Code", "Claude Code", "PonyTail"],
          icon: <Wrench size={26} />,
        },
      ] as SkillBlock[],
      certifications: [
        { title: "PCAP · Certified Associate Python Programmer", subtitle: "Object-oriented programming, modules, exceptions, files and advanced Python fundamentals.", badge: "certi.webp" },
        { title: "PCEP · Certified Entry-Level Python Programmer", subtitle: "Python fundamentals, control flow, functions, collections and basic programming logic.", badge: "pcepcertif.webp" },
        { title: "Introduction to Cybersecurity · Cisco", subtitle: "Cybersecurity fundamentals, threats, organizational protection and digital best practices.", badge: "ciber.webp" },
        { title: "NDG Linux Unhatched · Cisco Networking Academy", subtitle: "Introduction to Linux, command line and operating system foundations for IT profiles.", badge: "linux.webp" },
      ] as Certification[],
    },
  }[lang];

  const spanishBlocks = content.blocks as SkillBlock[];
  const certifications = content.certifications as Certification[];

  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-neutral-200 py-28 md:py-36">
        <div className="container-max reveal-up mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.28em] text-neutral-500">{content.kicker}</p>
          <p className="whitespace-pre-line text-base leading-7 text-neutral-700 md:text-2xl md:leading-10">{content.intro}</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-max">
          <div className="mb-14 flex flex-col items-center gap-6 text-center">
            <div className="reveal-up">
              <p className="mb-5 text-sm uppercase tracking-[0.28em] text-neutral-500">{content.skillsKicker}</p>
              <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-7xl">
                {content.skillsTitle}
              </h2>
            </div>
            <p className="reveal-up reveal-delay-1 max-w-2xl text-base leading-7 text-neutral-600">{content.skillsIntro}</p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white">
            <div className="grid md:grid-cols-2 xl:grid-cols-3">
              {spanishBlocks.map((block) => (
                <SkillBlockCard key={block.title} block={block} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-24 md:py-32">
        <div className="container-max">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal-up">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">// credentials</p>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">{a.certifications}</h2>
            </div>
            <p className="reveal-up reveal-delay-1 max-w-lg text-base leading-7 text-neutral-600 md:text-right">{content.certificationsIntro}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} cert={cert} onOpen={() => setOpenCert(cert)} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 p-8 text-white md:p-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-neutral-400">{content.ctaKicker}</p>
            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] md:text-6xl">
                {content.ctaTitle}
              </h2>
              <Link to="/contact" className="flex h-40 w-40 items-center justify-center rounded-full bg-white text-center text-lg font-semibold text-neutral-950 transition hover:scale-105 md:h-52 md:w-52">
                {content.ctaButton}
              </Link>
            </div>
            <div className="relative z-10 mt-12 flex flex-wrap gap-5 border-t border-white/15 pt-8 text-sm text-neutral-400">
              <a href="mailto:millanpedrop@gmail.com" className="transition hover:text-white">millanpedrop@gmail.com</a>
              <a href="https://www.linkedin.com/in/pedro-pablo-millán-mompó-499a36377/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition hover:text-white">LinkedIn <ArrowUpRight size={14} /></a>
              <a href="https://github.com/pedro-millan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition hover:text-white">GitHub <Github size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      {openCert && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setOpenCert(null)}>
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[2rem] bg-white p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white transition hover:scale-105" onClick={() => setOpenCert(null)} aria-label="Cerrar certificación">
              <X size={20} />
            </button>
            <img src={`${base}${openCert.badge}`} alt={openCert.title} className="mx-auto max-h-[82vh] w-full object-contain" loading="lazy" />
          </div>
        </div>
      )}
    </div>
  );
}
