import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Code2, Github, Layers3, Linkedin, Mail, Palette, Server, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { frontendProjects } from "@/features/frontend-projects/data/frontendProjects";
import { shopifyProjects } from "@/features/shopify-dev/data/shopifyProjects";
import { webApps } from "@/features/web-apps/data/webApps";

const base = import.meta.env.BASE_URL;

function FeaturedProjectCard({
  title,
  description,
  image,
  to,
}: {
  title: string;
  description: string;
  image: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={`${base}${image}`}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-7">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">{title}</h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition group-hover:rotate-12">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <p className="text-sm leading-6 text-neutral-600">{description}</p>
      </div>
    </Link>
  );
}

function SkillUseCard({
  icon,
  title,
  text,
  chips,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  chips: string[];
}) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-6 text-sm leading-6 text-neutral-400">{text}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-neutral-300">
            {chip}
          </span>
        ))}
      </div>
    </article>
  );
}

function CertificationCard({
  badge,
  title,
  subtitle,
  href,
}: {
  badge: string;
  title: string;
  subtitle: string;
  href?: string;
}) {
  const content = (
    <div className="flex h-full items-center gap-5 rounded-[1.5rem] border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
      <img src={`${base}${badge}`} alt={title} className="h-20 w-20 shrink-0 object-contain" loading="lazy" />
      <div>
        <p className="text-lg font-semibold text-neutral-950">{title}</p>
        <p className="mt-1 text-sm leading-5 text-neutral-600">{subtitle}</p>
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

export default function HomePage() {
  const { t, lang } = useLanguage();
  const h = t.home;
  const vulcan = frontendProjects.find((project) => project.id === "vulcan")!;
  const shutsami = shopifyProjects.find((project) => project.id === "shutsami")!;
  const lowfator = webApps.find((project) => project.id === "lowfator")!;

  const copy = {
    es: {

      headline: "Full Stack Developer",
      headlineSub: "Creación de interfaces, websites profesionales, plataformas e-commerce como Shopify Developer, aplicaciones web y herramientas en línea.",
      aboutLabel: "Más sobre mí",
      projectsTitle: "Proyectos Destacados",
      projectsIntro:
        "Una selección breve de proyectos pensados para mostrar criterio visual, estructura responsive, e-commerce, lógica en aplicaciones y desarrollo de interfaces funcionales.",
      stackTitle: "Stack aplicado a proyectos reales",
      stackIntro:
        "Áreas en las que a diario combino diseño, código, despliegue y lógica de producto.",
      certTitle: "Certificaciones",
      certIntro: "La formación y el aprendizaje continuo de las tecnologías más eficientes son la base de mi crecimiento profesional.",
      certPcep: "Fundamentos de Python, control de flujo, funciones, colecciones y lógica de programación.",
      certPcap: "POO, módulos, excepciones, archivos y fundamentos avanzados de Python.",
      ctaTitle: "¿Buscas un Web Developer junior eficaz, con criterio visual, adaptable y con base full stack?",
      ctaButton: "Hablemos",
      featured: {
        vulcan:
          "Landing page profesional para línea de productos de cosmética volcánica genderless, con branding elegante, animaciones sofisticadas y experiencia responsive.",
        shutsami:
          "E-commerce demo en Shopify con tema personalizado, secciones Liquid, estética oriental y enfoque de tienda real.",
        lowfator:
          "Aplicación web full stack para procesado creativo de audio, con React, FastAPI, WaveSurfer, FFmpeg y exportación WAV/MP3.",
      },
      stack: [
        {
          title: "Frontend e interfaces",
          text: "Construyo interfaces modernas con React, Vite, HTML5, CSS3, JavaScript, Next.js y gran variedad de los frameworks más contemporáneos cuidando jerarquía visual, responsividad, elementos animados y una experiencia de usuario única.",
          chips: ["HTML5", "CSS3", "React", "Vite", "JavaScript", "Next.js"],
        },
        {
          title: "Shopify & e-commerce",
          text: "Trabajo con Liquid y Shopify CLI para la personalización de temas y la creación de tiendas navegables modernas, secciones visuales, bloques responsive premium, herramientas y aplicaciones para Shopify orientadas a conversión.",
          chips: ["Shopify", "Liquid", "Shopify CLI", "Themes", "E-Commerce Websites", "Collections"],
        },
        {
          title: "Backend, APIs y datos",
          text: "He desarrollado APIs REST, aplicaciones de procesado de datos, herramientas en línea y proyectos de programación con FastAPI, PHP, Node.js, Java, Python y MariaDB. Actualmente aprendiendo e integrando Spring Boot en nuevos proyectos.",
          chips: ["FastAPI", "Node.js", "Java", "PHP", "Python", "MySQL", "MariaDB"],
        },
        {
          title: "Diseño visual, branding e IA",
          text: "Apoyo el frontend con Photoshop y Adobe Premiere para, en combinación con herramientas basadas en IA como Magnific, crear identidades visuales cuidadas y profesionales. Optimizo mi código con el uso nativo de Claude Code CLI + PonyTail, así como GPT Plus e IA agéntica, para acelerar mi flujo profesional y maximizar la eficiencia en cada proyecto.",
          chips: ["Photoshop", "Premiere", "Magnific", "Claude Code", "PonyTail", "GPT Plus"],
        },
      ],
    },
    en: {

      headline: "Full Stack Developer",
      headlineSub: "Creation of interfaces, professional websites, e-commerce platforms such as Shopify Developer, web applications and online tools.",
      aboutLabel: "More about me",
      projectsTitle: "Featured Projects",
      projectsIntro:
        "A brief selection of projects designed to show visual judgement, responsive structure, e-commerce work, applications logic and functional interface development.",
      stackTitle: "Stack applied to real projects",
      stackIntro:
        "Areas where I combine design, code, deployment and product logic.",
      certTitle: "Certifications",
      certIntro: "Training and continuous learning of the most efficient technologies are the foundation of my professional growth.",
      certPcep: "Python fundamentals, control flow, functions, collections and programming logic.",
      certPcap: "OOP, modules, exceptions, file handling and advanced Python fundamentals.",
      ctaTitle: "Looking for an efficient junior web developer with a visual sense, adaptability, and a full-stack foundation?",
      ctaButton: "Let's talk",
      featured: {
        vulcan:
          "Professional landing page for a volcanic genderless cosmetic products line, with elegant branding, sofisticated animations and a responsive experience.",
        shutsami:
          "Shopify demo e-commerce with a custom theme, Liquid sections, oriental aesthetics and a real-store approach.",
        lowfator:
          "Full-stack web app for creative audio processing, built with React, FastAPI, WaveSurfer, FFmpeg and WAV/MP3 export.",
      },
      stack: [
        {
          title: "Frontend & interfaces",
          text: "I build modern interfaces with React, Vite, HTML5, CSS3, JavaScript, Next.js and a wide variety of the most contemporary frameworks, taking care of visual hierarchy, responsiveness, animated elements and a unique user experience.",
          chips: ["React", "HTML5", "CSS3", "Vite", "JavaScript", "Next.js"],
        },
        {
          title: "Shopify & e-commerce",
          text: "I work with Liquid and Shopify CLI for theme customization and the creation of modern navigable stores, visual sections, premium responsive blocks, conversion-oriented tools and apps for Shopify.",
          chips: ["Shopify", "Liquid", "Shopify CLI", "Themes", "E-Commerce Websites", "Collections"],
        },
        {
          title: "Backend, APIs & data",
          text: "I have built REST APIs, forms, data processing applications, online tools and programming projects with FastAPI, PHP, Node.js, Java, Python and MariaDB. Currently learning and integrating Spring Boot into new projects.",
          chips: ["FastAPI", "Node.js", "Java", "PHP", "Python", "MySQL", "MariaDB"],
        },
        {
          title: "Visual design, branding & AI",
          text: "I support the frontend with Photoshop and Adobe Premiere to, in combination with AI-powered tools like Magnific, create polished and professional visual identities. I optimize my code using the native Claude Code CLI + PonyTail, as well as GPT Plus and agentic AI, to accelerate my workflow and maximize efficiency on every project.",
          chips: ["Photoshop", "Premiere", "Magnific", "Claude Code", "PonyTail", "GPT Plus"],
        },
      ],
    },
  }[lang];

  const heroPhotoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (heroPhotoRef.current) {
          heroPhotoRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.15}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const dockStyle = (i: number): React.CSSProperties => {
    if (hoveredIdx === null) return { transform: 'translateZ(0)' };
    const d = Math.abs(i - hoveredIdx);
    if (d === 0) return { transform: 'translateY(-5px) scale(1.14) rotate(-2deg)' };
    if (d === 1) return { transform: 'translateY(-3px) scale(1.07)' };
    return { transform: 'translateZ(0)' };
  };
  const dockItems = [
    { key: 'home', type: 'link', to: '/', icon: <span className="text-lg">⌂</span>, label: 'Home', home: true },
    { key: 'frontend', type: 'link', to: '/frontend-projects', icon: <Code2 size={19} />, label: 'Proyectos Frontend' },
    { key: 'shopify', type: 'link', to: '/shopify-dev', icon: <ShoppingBag size={19} />, label: 'Shopify Dev' },
    { key: 'webapps', type: 'link', to: '/web-apps', icon: <Layers3 size={19} />, label: 'Aplicaciones Web' },
    { key: 'projects', type: 'link', to: '/projects', icon: <Server size={19} />, label: 'Proyectos Backend' },
    { key: 'linkedin', type: 'a', href: 'https://www.linkedin.com/in/pedro-pablo-millán-mompó-499a36377/', icon: <Linkedin size={19} />, label: 'LinkedIn', external: true },
    { key: 'github', type: 'a', href: 'https://github.com/pedro-millan', icon: <Github size={19} />, label: 'GitHub', external: true },
    { key: 'email', type: 'a', href: 'mailto:millanpedrop@gmail.com', icon: <Mail size={19} />, label: 'Email' },
  ];

  return (
    <div className="bg-neutral-950 text-white">
      <section className="relative overflow-hidden bg-neutral-950 pt-20 md:pt-24 xl:min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_55%_at_80%_36%,rgba(255,255,255,0.13),transparent_100%),linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.86)_45%,rgba(0,0,0,0.30)_100%)]" />

        {/* Foto de fondo a pantalla completa — solo desktop ancho (xl+), donde hay hueco de sobra */}
        <div className="fade-sides-bottom absolute inset-y-0 right-0 hidden w-[34vw] overflow-hidden xl:block xl:right-36">
          <img
            src={`${base}yo-smile-final-2.webp`}
            alt="Pedro P. Millán Mompó"
            className="h-full w-full scale-125 object-contain object-top opacity-75"
            loading="eager"
          />
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-[1] hidden select-none whitespace-nowrap text-[10vw] font-black leading-none tracking-[-0.08em] text-white/[0.055] md:block">
          Pedro Millán · Portfolio
        </div>
        {/* Foto a ancho completo, detrás del texto, con parallax — mobile y tablet (< xl) */}
        <div ref={heroPhotoRef} className="hero-portrait absolute inset-x-0 -top-10 h-[58vh] max-h-[460px] will-change-transform md:-top-6 md:left-[28rem] xl:hidden">
          <img
            src={`${base}yo-smile-final-2.webp`}
            alt="Pedro P. Millán Mompó"
            className="h-full w-full object-cover object-[center_30%] opacity-50 md:opacity-70"
            loading="eager"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-neutral-950 to-transparent" />

        <div className="container-max relative z-10 flex flex-col py-10 md:py-12 xl:min-h-[calc(100vh-6rem)] xl:w-full xl:max-w-none xl:mx-0 xl:justify-between xl:px-16">

          <div className="max-w-4xl pb-10 pt-10 sm:pt-14 md:max-w-3xl md:pt-16 xl:pt-20 xl:pb-16">
            <h1 className="hero-display max-w-5xl break-words text-[clamp(2.75rem,10vw,10rem)] font-semibold leading-[0.86] tracking-[-0.085em] text-white">
              {copy.headline}
            </h1>
            <p className="mt-7 max-w-3xl break-words text-[clamp(1.45rem,3vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.055em] text-white/86">
              {copy.headlineSub}
            </p>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-lg font-medium text-white/85 transition hover:text-white"
            >
              {copy.aboutLabel} <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="mt-10 flex flex-nowrap items-center gap-2 overflow-x-auto rounded-[1.7rem] border border-white/10 bg-white/10 p-2 backdrop-blur-md sm:gap-3 md:w-max md:self-center xl:mt-0">
            {dockItems.map((item, i) => {
              const cls = `quick-link-bubble flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${'home' in item ? 'bg-white text-neutral-950' : 'bg-white/10 text-white hover:bg-white hover:text-neutral-950'}`;
              const handlers = { style: dockStyle(i), onMouseEnter: () => setHoveredIdx(i), onMouseLeave: () => setHoveredIdx(null) };
              if (item.type === 'link') return <Link key={item.key} to={item.to} className={cls} aria-label={item.label} {...handlers}>{item.icon}</Link>;
              return <a key={item.key} href={item.href} className={cls} aria-label={item.label} {...('external' in item ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...handlers}>{item.icon}</a>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-neutral-950 md:py-32">
        <div className="container-max grid gap-4 md:grid-cols-[1.25fr_0.75fr] md:items-start md:gap-12 reveal-up">
          <div>
            <h2 className="max-w-4xl text-2xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              {h.desc1} <span className="font-bold">{h.desc1em}</span>{h.desc2}
            </h2>
          </div>
          <div className="reveal-up reveal-delay-1 md:pt-14">
            <p className="mb-8 text-lg leading-8 text-neutral-600">
              {h.desc3} <strong className="font-semibold text-neutral-950">{h.desc3strong}</strong> {h.desc4}
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-base font-semibold text-neutral-950 transition hover:translate-x-1">
              {copy.aboutLabel} <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-24 text-neutral-950 md:py-32">
        <div className="container-max">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal-up">
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">{copy.projectsTitle}</h2>
            </div>
            <p className="reveal-up reveal-delay-1 max-w-xl text-base leading-7 text-neutral-600 md:text-right">{copy.projectsIntro}</p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            <div className="reveal-up reveal-delay-1">
              <FeaturedProjectCard
                title="Vulcan"
                description={copy.featured.vulcan}
                image={vulcan.thumbnail}
                to="/frontend-projects/vulcan"
              />
            </div>
            <div className="reveal-up reveal-delay-2">
              <FeaturedProjectCard
                title="Shutsami"
                description={copy.featured.shutsami}
                image={shutsami.thumbnail}
                to="/shopify-dev/shutsami"
              />
            </div>
            <div className="reveal-up reveal-delay-3">
              <FeaturedProjectCard
                title="LowFator"
                description={copy.featured.lowfator}
                image={lowfator.thumbnail}
                to="/web-apps/lowfator"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-24 md:py-32">
        <div className="container-max">
          <div className="mb-12 flex flex-col items-center gap-6 text-center">
            <div className="reveal-up">
              <p className="mb-4 font-mono text-sm text-neutral-500">// stack & skills</p>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">{copy.stackTitle}</h2>
            </div>
            <p className="reveal-up reveal-delay-1 max-w-2xl text-base leading-7 text-neutral-400">{copy.stackIntro}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.stack.map((item, index) => (
              <div key={item.title} className={`reveal-up reveal-delay-${index + 1}`}>
                <SkillUseCard
                  icon={index === 0 ? <Code2 size={24} /> : index === 1 ? <ShoppingBag size={24} /> : index === 2 ? <Server size={24} /> : <Palette size={24} />}
                  title={item.title}
                  text={item.text}
                  chips={item.chips}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-neutral-950 md:py-32">
        <div className="container-max">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="reveal-up">
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">{copy.certTitle}</h2>
            </div>
            <p className="reveal-up reveal-delay-1 max-w-lg text-base leading-7 text-neutral-600 md:text-right">{copy.certIntro}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="reveal-up reveal-delay-1">
              <CertificationCard
                badge="pcep-badge.webp"
                title="PCEP · Certified Entry-Level Python Programmer"
                subtitle={copy.certPcep}
                href="https://www.credly.com/badges/90f0ea0f-00b1-4754-8ea1-1a6568c86694/public_url"
              />
            </div>
            <div className="reveal-up reveal-delay-2">
              <CertificationCard
                badge="pcap-badge.webp"
                title="PCAP · Certified Associate Python Programmer"
                subtitle={copy.certPcap}
                href="https://www.credly.com/badges/1b6db9e0-328a-4a81-afae-af9bae5d844f/public_url"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 text-neutral-950 md:pb-32">
        <div className="container-max">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-neutral-950 p-8 text-white md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <p className="mb-6 font-mono text-sm text-neutral-400">{copy.ctaKicker}</p>
            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] md:text-6xl">
                {copy.ctaTitle}
              </h2>
              <Link
                to="/contact"
                className="flex h-40 w-40 items-center justify-center rounded-full bg-white text-center text-lg font-semibold text-neutral-950 transition hover:scale-105 md:h-52 md:w-52"
              >
                {copy.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
