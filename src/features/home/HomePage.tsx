export default function HomePage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Hola, soy <a href="about"><span className="text-primary">Pedro P. Millán Mompó</span></a>
      </h1>
      <h2 className="text-xl text-neutral-300 mb-6">
        Técnico Superior en Desarrollo de Aplicaciones Web
      </h2>
      <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
        Desarrollo web con enfoque limpio, mantenible y orientado a resultados.
        En constante aprendizaje de las tecnologías y herramientas contemporáneas más eficientes.
        <br />
        </p>
        <img src="yo.jpg" alt="Pedro P. Millán - Full Stack Junior Developer" className="w-40 h-50 rounded-full object-cover mx-auto mb-6 border border-neutral-700"/>
        <br />
        

      <p className="text-purple-300 text-xl mb-8 font-extralight">
      Puedes encontrar más sobre mis proyectos y perfil profesional clicando abajo:
      </p>
      <div className = "flex gap-4">
        <a href="https://github.com/pedro-millan" className="px-5 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition h-10">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pedro-pablo-millán-mompó-499a36377/" className="px-5 py-2 border border-neutral-700 rounded-md hover:border-primary transition">
          LinkedIn
        </a>
      </div>
    </section>
  );
}



