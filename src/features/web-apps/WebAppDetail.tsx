import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { webApps } from "./data/webApps";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { ViewportMedia } from "./data/webApps";

function ViewportCard({ label, icon, isActive, onClick, selectedLabel, ctaLabel }: {
  label: string; icon: string; isActive: boolean; onClick: () => void;
  selectedLabel: string; ctaLabel: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-44 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-300 group
        ${isActive
          ? "border-white bg-neutral-950 text-white shadow-xl shadow-black/10 scale-[1.02]"
          : "border-white/10 bg-white/5 hover:border-violet-400 hover:bg-white/10 hover:scale-[1.01]"
        }`}
    >
      <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <span className={`font-bold text-xl transition-colors ${isActive ? "text-white" : "text-white"}`}>
        {label}
      </span>
      <span className={`text-xs tracking-wide transition-colors ${isActive ? "text-white/70" : "text-neutral-300 group-hover:text-white"}`}>
        {isActive ? selectedLabel : ctaLabel}
      </span>
    </button>
  );
}

function VimeoPlayer({ url }: { url: string }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/10 bg-black"
      style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`${url}?autoplay=1&muted=1&loop=1&color=8b5cf6&title=0&byline=0&portrait=0&badge=0`}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture; muted"
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
            <img key={i} src={`${import.meta.env.BASE_URL}${img.src}`} alt={img.alt}
              className="w-full rounded-xl border border-white/10 object-cover hover:border-violet-400 transition-colors duration-200" loading="lazy" />
          ))}
        </div>
      )}
    </div>
  );
}

export default function WebAppDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLanguage();
  const wa = t.webApps;
  const ui = t.common;
  const app = webApps.find((a) => a.id === id);
  const [activeView, setActiveView] = useState<"desktop" | "mobile" | null>(null);

  if (!app) {
    return (
      <section className="container-max py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">{wa.notFound}</h2>
        <Link to="/web-apps" className="text-white hover:underline">{wa.backLink}</Link>
      </section>
    );
  }

  return (
    <section className="bg-neutral-950 py-28 text-white md:py-36">
      <div className="container-max max-w-5xl reveal-up">
      <Link to="/web-apps"
        className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition mb-10">
        {wa.backLink}
      </Link>

      <h2 className="portfolio-title mb-6 text-5xl md:text-7xl">{app.title}</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {app.tech.map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 bg-white/10 border border-white/10 text-neutral-300 rounded-full">{tech}</span>
        ))}
      </div>

      {app.longDescription && (
        <p className="text-neutral-300 leading-relaxed mb-8 text-lg">{app.longDescription[lang]}</p>
      )}

      {app.projectUrl && (
        <a href={app.projectUrl} target="_blank" rel="noopener noreferrer"
          className="inline-block mb-12 px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-neutral-950 transition font-semibold">
          {wa.knowApp}
        </a>
      )}

      {(app.desktop || app.mobile) && (
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-300">{ui.viewportSection}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {app.desktop && (
              <ViewportCard label="Desktop" icon="🖥️"
                isActive={activeView === "desktop"}
                onClick={() => setActiveView(activeView === "desktop" ? null : "desktop")}
                selectedLabel={ui.viewportSelected} ctaLabel={ui.viewportCta} />
            )}
            {app.mobile && (
              <ViewportCard label={ui.mobileLabel} icon="📱"
                isActive={activeView === "mobile"}
                onClick={() => setActiveView(activeView === "mobile" ? null : "mobile")}
                selectedLabel={ui.viewportSelected} ctaLabel={ui.viewportCta} />
            )}
          </div>
          {activeView === "desktop" && app.desktop && <ViewportGallery data={app.desktop} />}
          {activeView === "mobile"  && app.mobile  && <ViewportGallery data={app.mobile}  />}
        </div>
      )}
      </div>
    </section>
  );
}
