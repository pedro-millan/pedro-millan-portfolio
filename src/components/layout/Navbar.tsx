import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const goingDown = currentScroll > lastScroll;

      if (currentScroll < 80) {
        setVisible(true);
      } else if (Math.abs(currentScroll - lastScroll) > 8) {
        setVisible(!goingDown);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/frontend-projects", label: t.nav.frontend },
    { to: "/shopify-dev", label: t.nav.shopify },
    { to: "/web-apps", label: t.nav.webApps },
    { to: "/projects", label: t.nav.projects },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-black/55 backdrop-blur-md transition-all duration-500 ease-out ${
        visible || open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 py-4 lg:px-6">
        <img
          src={`${import.meta.env.BASE_URL}logo-pedro-millan.webp`}
          alt="Pedro Millán Portfolio"
          className="h-8 w-auto md:h-10 lg:h-9 xl:h-12"
        />

        <div className="hidden min-w-0 items-center gap-1 text-[11px] lg:flex xl:gap-2 xl:text-sm">
          {links.map((link, index) => (
            <div key={link.to} className="flex shrink-0 items-center">
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative whitespace-nowrap xl:px-1 transition-colors hover:text-violet-400 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-violet-400 after:transition-[width] after:duration-300 hover:after:w-full ${
                    isActive ? "text-white after:!w-full after:bg-white" : "text-zinc-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
              {index < links.length - 1 && <span className="mx-1 text-zinc-700 xl:mx-3">|</span>}
            </div>
          ))}

          <span className="mx-1 text-zinc-700 xl:mx-2">|</span>
          <button
            onClick={toggleLang}
            className="shrink-0 rounded-full border border-zinc-700 px-3 py-1 text-[11px] font-bold text-zinc-300 transition-colors hover:border-white hover:text-white xl:text-xs"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>

        <button
          className="text-zinc-300 transition hover:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-black/90 backdrop-blur-md lg:hidden">
          <div className="flex flex-col items-center space-y-3 py-4 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `transition-colors hover:text-violet-400 hover:underline hover:underline-offset-4 hover:decoration-violet-400 ${isActive ? "text-white underline underline-offset-4 decoration-white/40" : "text-zinc-300"}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setOpen(false);
              }}
              className="mt-2 rounded-full border border-zinc-700 px-4 py-1 text-xs font-bold text-zinc-300 transition-colors hover:border-white hover:text-white"
            >
              {lang === "es" ? "Switch to English" : "Cambiar a Español"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
