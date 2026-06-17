import PortfolioCard from "@/components/common/PortfolioCard";
import { shopifyProjects } from "./data/shopifyProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ShopifyDevPage() {
  const { t, lang } = useLanguage();
  const sd = t.shopifyDev;

  return (
    <section className="bg-neutral-950 py-28 text-white md:py-36">
      <div className="container-max reveal-up">
        <div className="mb-14 flex flex-col items-center gap-6 text-center">
          <h2 className="portfolio-title text-5xl md:text-7xl">
            {sd.title} <span className="text-neutral-300">{sd.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-300">
        {sd.description}
        <br /><br />
        <strong>{sd.note}</strong>
          </p>
        </div>

        {shopifyProjects.length === 0 ? (
        <p className="text-neutral-300 text-center">{sd.empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {shopifyProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description[lang]}
              tech={project.tech}
              thumbnail={project.thumbnail}
              basePath="/shopify-dev"
            />
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
