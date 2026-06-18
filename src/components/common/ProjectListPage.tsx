import PortfolioCard from "@/components/common/PortfolioCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { LocalizedText } from "@/lib/types";

interface ListProject {
  id: string;
  title: string;
  description: LocalizedText;
  tech: string[];
  thumbnail: string;
}

interface ListCopy {
  title: string;
  titleHighlight: string;
  description: string;
  note: string;
  empty: string;
}

export default function ProjectListPage<T extends ListProject>({
  data,
  basePath,
  copy,
}: {
  data: T[];
  basePath: string;
  copy: ListCopy;
}) {
  const { lang } = useLanguage();

  return (
    <section className="bg-neutral-950 py-28 text-white md:py-36">
      <div className="container-max reveal-up">
        <div className="mb-14 flex flex-col items-center gap-6 text-center">
          <h2 className="portfolio-title text-5xl md:text-7xl">
            {copy.title} <span className="text-neutral-300">{copy.titleHighlight}</span>
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-300">
        {copy.description}
        <br /><br />
        <strong>{copy.note}</strong>
          </p>
        </div>

        {data.length === 0 ? (
        <p className="text-neutral-300 text-center">{copy.empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.map((item) => (
            <PortfolioCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description[lang]}
              tech={item.tech}
              thumbnail={item.thumbnail}
              basePath={basePath}
            />
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
