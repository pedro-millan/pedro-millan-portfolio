import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Pedro P. Millán Mompó. All rights reserved.
      </footer>
    </div>
  );
}




