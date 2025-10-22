import ProjectCard from "@/components/common/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container-max py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Mis <span className="text-primary">Proyectos</span>
      </h2>

      <p className="text-neutral-400 max-w-2xl mx-auto text-center mb-16">
        Estos son algunos de los proyectos que he desarrollado durante el último año, 
        usando lenguajes como Java o Python. 
        <br /> <br />
        <strong>Tratando siempre de mantener un enfoque limpio, mantenible y orientado a resultados.</strong>
      </p>

      {/* ✅ Un solo GRID para todas las cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">

        <ProjectCard
          title="Autenticador de usuarios"
          description="API de control de acceso."
          tech={["Python", "VSCode", "FastAPI"]}
          github="https://github.com/pedro-millan/UserAuthAPI"
          image={`${import.meta.env.BASE_URL}userauth.png`}
        />

        <ProjectCard
          title="Gestor"
          description="Controla altas y modificaciones."
          tech={["Java", "NetBeans"]}
          github="https://github.com/pedro-millan/control-acceso-java"
          image={`${import.meta.env.BASE_URL}acceso.png`}
        />

        <ProjectCard
          title="Temporizador"
          description="Programa temporizador."
          tech={["Python", "VSCode"]}
          github="https://github.com/pedro-millan/Temporizador-python"
          image={`${import.meta.env.BASE_URL}temporizador.png`}
        />

        <ProjectCard
          title="Contador de caracteres"
          description="Contea caracteres concretos en un archivo de texto."
          tech={["Python", "VSCode"]}
          github="https://github.com/pedro-millan/contador_caracteres_latinos"
          image={`${import.meta.env.BASE_URL}latinos.png`}
        />

      </div>
    </section>
  );
}


  
  