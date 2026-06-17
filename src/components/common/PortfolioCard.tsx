import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type PortfolioCardProps = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  thumbnail: string;
  basePath: string;
};

export default function PortfolioCard({ id, title, description, tech, thumbnail, basePath }: PortfolioCardProps) {
  const thumbSrc = thumbnail ? `${import.meta.env.BASE_URL}${thumbnail}` : `${import.meta.env.BASE_URL}placeholder.png`;

  return (
    <Link
      to={`${basePath}/${id}`}
      className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] text-left shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-white/[0.07]"
    >
      {thumbnail ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
          <img src={thumbSrc} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center bg-white/5 text-sm text-neutral-400">Sin imagen</div>
      )}

      <div className="p-7">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition group-hover:rotate-12 group-hover:scale-105">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <p className="mb-5 text-sm leading-6 text-neutral-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
