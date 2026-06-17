import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";

const REVEAL = '.reveal-up, .reveal-soft, .reveal-left, .reveal-scale';

function RevealOnScroll() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();
  useEffect(() => {
    // Reset elements that are below the fold so they re-animate on each page visit
    document.querySelectorAll(REVEAL).forEach(el => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top >= window.innerHeight || bottom <= 0) el.classList.remove('is-visible');
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll(`${REVEAL}:not(.is-visible)`).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [pathname, lang]);
  return null;
}

function GlobalCTA() {
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const alreadyHasCta = ["/", "/about", "/contact", "/frontend-projects", "/shopify-dev", "/web-apps", "/projects"].includes(pathname);
  if (alreadyHasCta) return null;

  return (
    <section className="bg-neutral-950 pb-24 text-white md:pb-32">
      <div className="container-max reveal-up">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white p-8 text-neutral-950 md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-neutral-950/10 blur-3xl" />
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-neutral-500">
            {lang === "es" ? "Disponible para nuevas oportunidades." : "Available for new opportunities."}
          </p>
          <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] md:text-6xl">
              {lang === "es"
                ? "¿Buscas un Web Developer junior con criterio visual, constancia y base full stack?"
                : "Looking for a junior Web Developer with visual judgement, consistency and a full-stack foundation?"}
            </h2>
            <Link
              to="/contact"
              className="flex h-40 w-40 items-center justify-center rounded-full bg-neutral-950 text-center text-lg font-semibold text-white transition hover:scale-105 md:h-52 md:w-52"
            >
              {lang === "es" ? "Contáctame" : "Contact me"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Layout() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <RevealOnScroll />
        <Outlet />
        <GlobalCTA />
      </main>
      <footer className="border-t border-zinc-800 bg-black py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Pedro P. Millán Mompó. {t.footer}
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}
