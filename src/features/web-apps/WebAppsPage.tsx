import PortfolioCard from "@/components/common/PortfolioCard";
import { webApps } from "./data/webApps";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WebAppsPage() {
  const { t } = useLanguage();
  const wa = t.webApps;

  return (
    <section className="container-max py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {wa.title} <span className="text-primary">{wa.titleHighlight}</span>
      </h2>

      <p className="text-neutral-400 max-w-2xl mx-auto text-center mb-16">
        {wa.description}
        <br /><br />
        <strong>{wa.note}</strong>
      </p>

      {webApps.length === 0 ? (
        <p className="text-neutral-500 text-center">{wa.empty}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {webApps.map((app) => (
            <PortfolioCard
              key={app.id}
              id={app.id}
              title={app.title}
              description={app.description}
              tech={app.tech}
              thumbnail={app.thumbnail}
              basePath="/web-apps"
            />
          ))}
        </div>
      )}
    </section>
  );
}
