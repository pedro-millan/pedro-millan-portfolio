import PortfolioCard from "@/components/common/PortfolioCard";
import { webApps } from "./data/webApps";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WebAppsPage() {
  const { t, lang } = useLanguage();
  const wa = t.webApps;

  return (
    <section className="bg-neutral-950 py-28 text-white md:py-36">
      <div className="container-max reveal-up">
        <div className="mb-14 flex flex-col items-center gap-6 text-center">
          <h2 className="portfolio-title text-5xl md:text-7xl">
            {wa.title} <span className="text-neutral-300">{wa.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-300">
        {wa.description}
        <br /><br />
        <strong>{wa.note}</strong>
          </p>
        </div>

        {webApps.length === 0 ? (
        <p className="text-neutral-300 text-center">{wa.empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {webApps.map((app) => (
            <PortfolioCard
              key={app.id}
              id={app.id}
              title={app.title}
              description={app.description[lang]}
              tech={app.tech}
              thumbnail={app.thumbnail}
              basePath="/web-apps"
            />
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
