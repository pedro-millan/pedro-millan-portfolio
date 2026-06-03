import PortfolioCard from "@/components/common/PortfolioCard";
import { shopifyProjects } from "./data/shopifyProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ShopifyDevPage() {
  const { t } = useLanguage();
  const sd = t.shopifyDev;

  return (
    <section className="container-max py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {sd.title} <span className="text-primary">{sd.titleHighlight}</span>
      </h2>

      <p className="text-neutral-400 max-w-2xl mx-auto text-center mb-16">
        {sd.description}
        <br /><br />
        <strong>{sd.note}</strong>
      </p>

      {shopifyProjects.length === 0 ? (
        <p className="text-neutral-500 text-center">{sd.empty}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {shopifyProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              thumbnail={project.thumbnail}
              basePath="/shopify-dev"
            />
          ))}
        </div>
      )}
    </section>
  );
}
