import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { LanguageProvider, useLanguage } from "@/lib/i18n/LanguageContext";

function Layout() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-600">
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
