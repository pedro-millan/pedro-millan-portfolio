import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 xl:px-6 py-4">

        {/* Logo */}
        <img
          src={`${import.meta.env.BASE_URL}logo-pedro-millan.webp`}
          alt="Pedro Millán Portfolio"
          className="h-8 w-auto md:h-10 lg:h-9 xl:h-12 xl:-ml-36"
        />

        {/* Menú desktop */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[11px] xl:text-sm min-w-0">
          {links.map((link, index) => (
            <div key={link.to} className="flex items-center shrink-0">
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `whitespace-nowrap xl:px-1 hover:text-primary transition-colors ${
                    isActive ? "text-primary" : "text-zinc-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
              {index < links.length - 1 && (
                <span className="text-zinc-700 mx-1 xl:mx-3">|</span>
              )}
            </div>
          ))}

          {/* Switch de idioma */}
          <span className="text-zinc-700 mx-1 xl:mx-2">|</span>
          <button
            onClick={toggleLang}
            className="text-[11px] xl:text-xs font-bold px-1 xl:px-3 py-1 rounded border border-zinc-700 hover:border-primary hover:text-primary transition-colors text-zinc-300 shrink-0"
            title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Botón hamburguesa — solo por debajo de lg */}
        <button
          className="lg:hidden text-zinc-300 hover:text-primary transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="lg:hidden border-t border-zinc-800 bg-black/90 backdrop-blur-md">
          <div className="flex flex-col items-center py-4 space-y-3 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${
                    isActive ? "text-primary" : "text-zinc-300"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => { toggleLang(); setOpen(false); }}
              className="mt-2 text-xs font-bold px-4 py-1 rounded border border-zinc-700 hover:border-primary hover:text-primary transition-colors text-zinc-300"
            >
              {lang === "es" ? "Switch to English" : "Cambiar a Español"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
