import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { shopifyProjects } from "./data/shopifyProjects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { ViewportMedia } from "./data/shopifyProjects";

function ViewportCard({ label, icon, isActive, onClick }: {
  label: string; icon: string; isActive: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-44 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-300 group
        ${isActive
          ? "border-primary bg-neutral-800/80 shadow-xl shadow-primary/20 scale-[1.02]"
          : "border-neutral-700 bg-neutral-900/80 hover:border-primary/50 hover:bg-neutral-800/60 hover:scale-[1.01]"
        }`}
    >
      <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <span className={`font-bold text-xl transition-colors ${isActive ? "text-primary" : "text-white"}`}>{label}</span>
      <span className={`text-xs tracking-wide transition-colors ${isActive ? "text-primary/80" : "text-neutral-500 group-hover:text-neutral-300"}`}>
        {isActive ? "✓ Seleccionado" : "Ver vídeo y capturas"}
      </span>
    </button>
  );
}

function VimeoPlayer({ url }: { url: string }) {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl shadow-black/60 bg-black"
      style={{ paddingBottom: "56.25%" /* 16:9 */ }}
    >
      <iframe
        src={`${url}?color=8b5cf6&title=0&byline=0&portrait=0&badge=0`}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title="Demo del proyecto"
      />
    </div>
  );
}

function ViewportGallery({ data }: { data: ViewportMedia }) {
  return (
    <div className="mt-8 space-y-8">
      {data.vimeoUrl && <VimeoPlayer url={data.vimeoUrl} />}
      {data.images.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {data.images.map((img, i) => (
            <img
              key={i}
              src={`${import.meta.env.BASE_URL}${img.src}`}
              alt={img.alt}
              className="w-full rounded-xl border border-neutral-800 object-cover hover:border-primary/40 transition-colors duration-200"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ShopifyDevDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const sd = t.shopifyDev;
  const project = shopifyProjects.find((p) => p.id === id);
  const [activeView, setActiveView] = useState<"desktop" | "mobile" | null>(null);

  if (!project) {
    return (
      <section className="container-max py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">{sd.notFound}</h2>
        <Link to="/shopify-dev" className="text-primary hover:underline">{sd.backLink}</Link>
      </section>
    );
  }

  return (
    <section className="container-max py-20 max-w-4xl mx-auto px-4">
      <Link
        to="/shopify-dev"
        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-primary transition mb-10"
      >
        {sd.backLink}
      </Link>

      <h2 className="text-4xl font-bold mb-4">{project.title}</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full">{tech}</span>
        ))}
      </div>

      {project.longDescription && (
        <p className="text-neutral-300 leading-relaxed mb-8 text-lg">{project.longDescription}</p>
      )}

      {project.password && (
        <p className="mb-8 text-lg">
          <strong className="text-white">🔐 Password de acceso: {project.password}</strong>
        </p>
      )}

      {project.projectUrl && (
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-12 px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-black transition font-semibold"
        >
          {sd.liveProject}
        </a>
      )}

      {(project.desktop || project.mobile) && (
        <div>
          <p className="text-xs font-semibold text-neutral-500 mb-5 tracking-widest uppercase">Vista del Proyecto</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.desktop && (
              <ViewportCard
                label="Desktop"
                icon="🖥️"
                isActive={activeView === "desktop"}
                onClick={() => setActiveView(activeView === "desktop" ? null : "desktop")}
              />
            )}
            {project.mobile && (
              <ViewportCard
                label="Móvil"
                icon="📱"
                isActive={activeView === "mobile"}
                onClick={() => setActiveView(activeView === "mobile" ? null : "mobile")}
              />
            )}
          </div>
          {activeView === "desktop" && project.desktop && <ViewportGallery data={project.desktop} />}
          {activeView === "mobile"  && project.mobile  && <ViewportGallery data={project.mobile}  />}
        </div>
      )}
    </section>
  );
}
