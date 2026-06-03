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
    <section className="container-max py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {p.title} <span className="text-primary">{p.titleHighlight}</span>
      </h2>

      <p className="text-neutral-400 max-w-2xl mx-auto text-center mb-16">
        {p.description}
        <br /><br />
        <strong>{p.note}</strong>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
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
    </section>
  );
}
