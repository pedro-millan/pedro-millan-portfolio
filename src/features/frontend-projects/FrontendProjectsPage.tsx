import PortfolioCard from "@/components/common/PortfolioCard";
import { frontendProjects } from "./data/frontendProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FrontendProjectsPage() {
  const { t, lang } = useLanguage();
  const fp = t.frontendProjects;

  return (
    <section className="container-max py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {fp.title} <span className="text-primary">{fp.titleHighlight}</span>
      </h2>

      <p className="text-neutral-400 max-w-2xl mx-auto text-center mb-16">
        {fp.description}
        <br /><br />
        <strong>{fp.note}</strong>
      </p>

      {frontendProjects.length === 0 ? (
        <p className="text-neutral-500 text-center">{fp.empty}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {frontendProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description[lang]}
              tech={project.tech}
              thumbnail={project.thumbnail}
              basePath="/frontend-projects"
            />
          ))}
        </div>
      )}
    </section>
  );
}
