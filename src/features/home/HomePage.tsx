import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// ── Partículas flotantes ──────────────────────────────────────────────────────
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 72 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r:  Math.random() * 1.2 + 0.4,
      a:  Math.random() * 0.3 + 0.07,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ── Efecto typewriter ─────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 45) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { setDone(true); clearInterval(id); }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}

// ── Clip-path hexagonal ───────────────────────────────────────────────────────
const HEX = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

// ── Página ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { t, lang } = useLanguage();
  const h = t.home;
  const badge = lang === "es" ? "< Desarrollador Web />" : "< Web Developer />";
  const { displayed, done } = useTypewriter(h.subtitle);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* Partículas */}
      <Particles />

      {/* Rejilla sutil */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">

        {/* Badge */}
        <div className="anim-1 mb-5 inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm tracking-wide">
          {badge}
        </div>

        {/* Nombre */}
        <h1 className="anim-2 text-5xl md:text-6xl font-extrabold tracking-tight mb-2 leading-tight">
          <span className="gradient-name">Pedro P. Millán Mompó</span>
        </h1>

        {/* Separador + subtítulo typewriter */}
        <div className="anim-3 flex items-center gap-4 my-5">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
          <h2 className="text-base md:text-lg text-neutral-400 font-light tracking-wide font-mono min-h-[1.5em]">
            {displayed}
            <span
              className={`inline-block w-0.5 h-[1em] bg-primary ml-0.5 align-middle ${done ? "cursor-blink" : ""}`}
            />
          </h2>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
        </div>

        {/* Foto hexagonal */}
        <div className="anim-4 relative mb-6">
          {/* capa de borde con gradiente */}
          <div
            className="absolute -inset-[3px] bg-gradient-to-br from-primary/80 via-blue-500/50 to-violet-600/80"
            style={{ clipPath: HEX }}
          />
          <img
            src={`${import.meta.env.BASE_URL}yo-smile.webp`}
            alt="Pedro P. Millán"
            className="relative w-36 h-36 object-cover"
            style={{ clipPath: HEX }}
          />
        </div>

        {/* Línea decorativa */}
        <div className="anim-4 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

        {/* Descripción */}
        <p className="anim-5 text-neutral-400 max-w-2xl mx-auto mb-3 leading-relaxed text-lg">
          {h.desc1}{" "}
          <em className="text-neutral-300 not-italic font-medium">{h.desc1em}</em>{" "}
          {h.desc2}
        </p>
        <p className="anim-5 text-neutral-400 max-w-2xl mx-auto mb-6 leading-relaxed text-[15px]">
          {h.desc3}{" "}
          <strong className="text-neutral-200 font-semibold">{h.desc3strong}</strong>{" "}
          {h.desc4}
        </p>

        {/* CTA */}
        <p className="anim-5 text-purple-300/80 text-sm mb-8 font-light tracking-wide">
          {h.cta}
        </p>

        {/* Botones — glow en hover, sin float */}
        <div className="anim-6 flex gap-3">
          <a
            href="https://github.com/pedro-millan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-2.5 bg-neutral-900/80 border border-neutral-700 rounded-xl text-sm text-neutral-300 hover:text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-neutral-800/80 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            <img
              src={`${import.meta.env.BASE_URL}github.png`}
              alt="GitHub"
              className="w-4 h-4 object-contain opacity-75 group-hover:opacity-100 transition"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-pablo-millán-mompó-499a36377/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-2.5 bg-neutral-900/80 border border-neutral-700 rounded-xl text-sm text-neutral-300 hover:text-white backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-neutral-800/80 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            <img
              src={`${import.meta.env.BASE_URL}in.png`}
              alt="LinkedIn"
              className="w-4 h-4 object-contain opacity-75 group-hover:opacity-100 transition"
            />
            LinkedIn
          </a>
        </div>


      </div>
    </section>
  );
}
