import { useLanguage } from "@/lib/i18n/LanguageContext";

const si = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const di = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

// ─── Tipos ────────────────────────────────────────────────────────────────────
type TechItem = {
  name: string;
  logo?: string;                         // URL de imagen
  emoji?: string;                        // emoji de respaldo
  badge?: { text: string; bg: string };  // badge estilo Adobe CC (texto + color)
};

// ─── Datos del stack ──────────────────────────────────────────────────────────
const techStack: Record<string, TechItem[]> = {
  frontend: [
    { name: "HTML5",      logo: si("html5",      "E34F26") },
    { name: "CSS3",       logo: di("css3") },
    { name: "JavaScript", logo: si("javascript", "F7DF1E") },
    { name: "TypeScript", logo: si("typescript", "3178C6") },
    { name: "React",      logo: si("react",      "61DAFB") },
    { name: "Liquid",     logo: si("shopify",    "96BF48") },
  ],
  backend: [
    { name: "Python",  logo: si("python",    "3776AB") },
    { name: "Java",    logo: si("openjdk",   "ED8B00") },
    { name: "PHP",     logo: si("php",       "777BB4") },
    { name: "Node.js", logo: si("nodedotjs", "5FA04E") },
    { name: "FastAPI", logo: si("fastapi",   "009688") },
    { name: "MySQL",   logo: si("mysql",     "4479A1") },
  ],
  os: [
    { name: "macOS",        logo: si("apple", "ffffff") },
    { name: "Apache",       logo: si("apache","D22128") },
    { name: "Tomcat",       emoji: "🐱" },
    { name: "Git & GitHub", logo: si("git",   "F05032") },
  ],
  design: [
    { name: "Adobe Photoshop",    badge: { text: "Ps", bg: "#31A8FF" } },
    { name: "Adobe Premiere Pro", badge: { text: "Pr", bg: "#9999FF" } },
    { name: "Magnific", logo: import.meta.env.BASE_URL + "mag.webp" },
  ],
  aiTools: [
    { name: "ChatGPT", logo: import.meta.env.BASE_URL + "OpenAI.png" },
    { name: "Claude",   logo: si("anthropic",  "D97757") },
    { name: "Lovable", logo: import.meta.env.BASE_URL + "lovable.webp" },
  ],
  others: [
    { name: "Audio Processing", emoji: "🎛️" },
  ],
};

// ─── Estilos por categoría ────────────────────────────────────────────────────
const categoryStyles: Record<string, {
  accent: string; line: string; cardBorder: string; glow: string;
}> = {
  frontend: {
    accent:     "text-cyan-400",
    line:       "via-cyan-500/40",
    cardBorder: "border-cyan-500/20 hover:border-cyan-400/60",
    glow:       "hover:shadow-cyan-500/10",
  },
  backend: {
    accent:     "text-emerald-400",
    line:       "via-emerald-500/40",
    cardBorder: "border-emerald-500/20 hover:border-emerald-400/60",
    glow:       "hover:shadow-emerald-500/10",
  },
  os: {
    accent:     "text-amber-400",
    line:       "via-amber-500/40",
    cardBorder: "border-amber-500/20 hover:border-amber-400/60",
    glow:       "hover:shadow-amber-500/10",
  },
  design: {
    accent:     "text-violet-400",
    line:       "via-violet-500/40",
    cardBorder: "border-violet-500/20 hover:border-violet-400/60",
    glow:       "hover:shadow-violet-500/10",
  },
  aiTools: {
    accent:     "text-indigo-400",
    line:       "via-indigo-500/40",
    cardBorder: "border-indigo-500/20 hover:border-indigo-400/60",
    glow:       "hover:shadow-indigo-500/10",
  },
  others: {
    accent:     "text-rose-400",
    line:       "via-rose-500/40",
    cardBorder: "border-rose-500/20 hover:border-rose-400/60",
    glow:       "hover:shadow-rose-500/10",
  },
};

// ─── Subcomponente: categoría ─────────────────────────────────────────────────
function TechCategory({
  label, items, styles,
}: {
  label: string;
  items: TechItem[];
  styles: (typeof categoryStyles)[string];
}) {
  return (
    <div className="mb-12">
      {/* Línea decorativa con nombre de categoría */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${styles.line} to-transparent`} />
        <span className={`text-xs font-bold tracking-[0.2em] uppercase ${styles.accent}`}>
          {label}
        </span>
        <div className={`flex-1 h-px bg-gradient-to-l from-transparent ${styles.line} to-transparent`} />
      </div>

      {/* Grid de tecnologías */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {items.map((tech) => (
          <div
            key={tech.name}
            className={`
              flex flex-col items-center justify-center
              bg-neutral-900/80 border rounded-xl p-4
              transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5
              ${styles.cardBorder} ${styles.glow}
            `}
          >
            {/* Badge estilo Adobe CC / gradiente personalizado */}
            {tech.badge ? (
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 font-black text-white text-sm leading-none select-none"
                style={{ background: tech.badge.bg }}
              >
                {tech.badge.text}
              </div>
            ) : tech.logo ? (
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-9 h-9 object-contain mb-2.5"
                loading="lazy"
              />
            ) : (
              <span className="text-3xl mb-2.5 leading-none">{tech.emoji}</span>
            )}

            <p className="text-neutral-300 text-[11px] font-medium text-center leading-tight">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Página ───────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  const categories = [
    { key: "frontend", label: a.techCategories.frontend },
    { key: "backend",  label: a.techCategories.backend  },
    { key: "os",       label: a.techCategories.os       },
    { key: "design",   label: a.techCategories.design   },
    { key: "aiTools",  label: a.techCategories.aiTools  },
    { key: "others",   label: a.techCategories.others   },
  ];

  return (
    <section className="container-max py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {a.title} <span className="text-primary">{a.titleHighlight}</span>
      </h2>

      <p className="text-neutral-300 max-w-3xl mx-auto text-lg leading-relaxed text-center mb-12">
        <strong>{a.bio1Strong}</strong>
        {a.bio2}
        <strong>{a.bio3Strong}</strong>
      </p>

      {/* CERTIFICACIONES */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-center mb-6">{a.certifications}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 text-center">
          <a
            href="https://www.credly.com/badges/1b6db9e0-328a-4a81-afae-af9bae5d844f/public_url"
            target="_blank" rel="noopener noreferrer"
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center shadow-sm hover:shadow-lg hover:shadow-primary/10"
          >
            <img src={`${import.meta.env.BASE_URL}PCAPbadge.png`} alt="PCAP Badge" className="w-20 h-20 object-contain mb-3" />
            <p className="text-neutral-200 font-medium">Python PCAP</p>
            <img src={`${import.meta.env.BASE_URL}certi.png`} alt="Certificado PCAP" className="w-full object-cover mt-3 rounded" />
          </a>
          <a
            href="https://www.credly.com/badges/90f0ea0f-00b1-4754-8ea1-1a6568c86694/public_url"
            target="_blank" rel="noopener noreferrer"
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center shadow-sm hover:shadow-lg hover:shadow-primary/10"
          >
            <img src={`${import.meta.env.BASE_URL}pcep.png`} alt="PCEP Badge" className="w-20 h-20 object-contain mb-3" />
            <p className="text-neutral-200 font-medium">Python PCEP</p>
            <img src={`${import.meta.env.BASE_URL}pcepcertif.png`} alt="Certificado PCEP" className="w-full object-cover mt-3 rounded" />
          </a>
          <a className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
            <p className="text-neutral-200 font-medium mb-2">Linux Unhatched</p>
            <p className="text-2xl">🐧</p>
            <img src={`${import.meta.env.BASE_URL}linux.png`} alt="Linux Unhatched" className="w-full object-cover mt-3 rounded" />
          </a>
          <a className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
            <p className="text-neutral-200 font-medium mb-2">Introduction to Cybersecurity</p>
            <p className="text-2xl">🔒</p>
            <img src={`${import.meta.env.BASE_URL}ciber.png`} alt="Ciberseguridad" className="w-full object-cover mt-3 rounded" />
          </a>
        </div>
      </div>

      {/* TECH STACK */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-12">{a.techStack}</h3>
        {categories.map(({ key, label }) => (
          <TechCategory
            key={key}
            label={label}
            items={techStack[key]}
            styles={categoryStyles[key]}
          />
        ))}
      </div>
    </section>
  );
}
