export default function HomePage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">
        Hola, soy <a href="about"><span className="text-primary">Pedro P. Millán Mompó</span></a>
      </h1>
      <h2 className="text-xl text-neutral-300 mb-6">
        Futuro Técnico Superior en Desarrollo de Aplicaciones Web
      </h2>
      <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
      
          Actualmente cursando el <em>Grado Superior en Desarrollo de Aplicaciones Web (DAW)</em> y 
        construyendo proyectos propios mientras profundizo en programación backend y frontend. <br />
        Me instruyo diariamente
        en ámbitos que complementan mis habilidades como futuro full stack developer, y estoy en <strong>constante aprendizaje</strong> de las tecnologías y herramientas contemporáneas más eficientes.
        <br />
        </p>
        <img src="yo.jpg" alt="Pedro P. Millán - Full Stack Junior Developer" className="w-40 h-50 rounded-full object-cover mx-auto mb-6 border border-neutral-700"/>
        <br />
        

      <p className="text-purple-300 text-xl mb-8 font-extralight">
      Puedes encontrar más sobre mis proyectos y perfil profesional clicando abajo:
      </p>
      <div className = "flex gap-4">
        <a href="https://github.com/pedro-millan" target="blank" className="flex items-center justify-center bg-neutral-900 border hover:border-primary transition">
        <img src={`${import.meta.env.BASE_URL}github.png`} alt="GitHub" className="w-13 h-10 object-contain" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-pablo-millán-mompó-499a36377/" target="blank" className="flex items-center justify-center w-12 h-12 bg-neutral-900 border hover:border-primary transition">
        <img src={`${import.meta.env.BASE_URL}in.png`} alt="LinnkedIn" className="w-30 h-30 object-contain" />
        </a>
      </div>
    </section>
  );
}


