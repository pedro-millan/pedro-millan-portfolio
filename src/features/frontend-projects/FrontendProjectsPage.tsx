import PortfolioCard from "@/components/common/PortfolioCard";
import { frontendProjects } from "./data/frontendProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FrontendProjectsPage() {
  const { t, lang } = useLanguage();
  const fp = t.frontendProjects;

  return (
    <section className="bg-neutral-950 py-28 text-white md:py-36">
      <div className="container-max reveal-up">
        <div className="mb-14 flex flex-col items-center gap-6 text-center">
          <h2 className="portfolio-title text-5xl md:text-7xl">
            {fp.title} <span className="text-neutral-300">{fp.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-300">
        {fp.description}
        <br /><br />
        <strong>{fp.note}</strong>
          </p>
        </div>

        {frontendProjects.length === 0 ? (
        <p className="text-neutral-300 text-center">{fp.empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
      </div>
    </section>
  );
}
