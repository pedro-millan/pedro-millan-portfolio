import { Link } from "react-router-dom";

type PortfolioCardProps = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  thumbnail: string;
  /** Ruta base de la sección */
  basePath: string;
};

export default function PortfolioCard({
  id,
  title,
  description,
  tech,
  thumbnail,
  basePath,
}: PortfolioCardProps) {
  const thumbSrc = thumbnail
    ? `${import.meta.env.BASE_URL}${thumbnail}`
    : `${import.meta.env.BASE_URL}placeholder.png`;

  return (
    <Link
      to={`${basePath}/${id}`}
      className="block border border-neutral-800 rounded-lg overflow-hidden hover:border-primary transition group hover:-translate-y-1 bg-neutral-950"
    >
      {thumbnail ? (
        <img
          src={thumbSrc}
          alt={title}
          className="w-full h-auto border-b border-neutral-800 group-hover:opacity-90 transition"
        />
      ) : (
        <div className="w-full h-48 bg-neutral-900 border-b border-neutral-800 flex items-center justify-center text-neutral-600 text-sm">
          Sin imagen
        </div>
      )}

      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition">
          {title}
        </h3>
        <p className="text-neutral-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 justify-center">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
