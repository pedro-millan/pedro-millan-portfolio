import ProjectCard from "@/components/common/ProjectCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const projectData = [
  {
    github: "https://github.com/pedro-millan/UserAuthAPI",
    image: "userauth.png",
    tech: ["Python", "VSCode", "FastAPI"],
  },
  {
    github: "https://github.com/pedro-millan/control-acceso-java",
    image: "acceso.png",
    tech: ["Java", "NetBeans"],
  },
  {
    github: "https://github.com/pedro-millan/Temporizador-python",
    image: "temporizador.png",
    tech: ["Python", "VSCode"],
  },
  {
    github: "https://github.com/pedro-millan/contador_caracteres_latinos",
    image: "latinos.png",
    tech: ["Python", "VSCode"],
  },
  {
    github: "https://github.com/pedro-millan/contador_ocurrencias_anuales",
    image: "anuales.png",
    tech: ["Python", "VSCode"],
  },
];

export default function ProjectsPage() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section className="bg-neutral-950 py-28 text-white md:py-36">
      <div className="container-max reveal-up">
        <div className="mb-14 flex flex-col items-center gap-6 text-center">
          <h2 className="portfolio-title text-5xl md:text-7xl">
            {p.title} <span className="text-neutral-300">{p.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-300">
        {p.description}
        <br /><br />
        <strong>{p.note}</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {p.items.map((item, i) => (
          <ProjectCard
            key={i}
            title={item.title}
            description={item.description}
            tech={projectData[i].tech}
            github={projectData[i].github}
            image={`${import.meta.env.BASE_URL}${projectData[i].image}`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
