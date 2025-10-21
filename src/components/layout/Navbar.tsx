import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "HOME" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold tracking-wide whitespace-nowrap">
          Pedro P. Millán Mompó
          <br />
          P O R T F O L I O
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {links.map((link, index) => (
            <div key={link.to} className="flex items-center">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${
                    isActive ? "text-primary" : "text-zinc-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
              {index < links.length - 1 && (
                <span className="text-zinc-700 mx-4">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-zinc-300 hover:text-primary transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black/90 backdrop-blur-md">
          <div className="flex flex-col items-center py-4 space-y-3 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
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
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

