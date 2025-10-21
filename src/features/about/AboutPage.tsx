export default function AboutPage() {
    return (<section className="container-max py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Sobre <span className="text-primary">mí</span>
      </h2>

      <p className="text-neutral-300 max-w-3xl mx-auto text-lg leading-relaxed text-center mb-12">
        <strong>La formación continua es el camino que un buen developer jamás puede abandonar.</strong> Yo lo transito a diario
        con mucha motivación e ilusión, trabajando duro para poder dedicarme de lleno a ello en un futuro que, espero,
        sea cercano. Mi pasión por las tecnologías y herramientas emergentes <strong>es parte de mi ser. </strong> 
          
      </p>

            {/* CERTIFICACIONES */}
            <div className="mb-16">
        <h3 className="text-2xl font-semibold text-center mb-6">Certificaciones</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 text-center">
          {/* PCAP */}
        <a href="https://www.credly.com/badges/1b6db9e0-328a-4a81-afae-af9bae5d844f/public_url" target="_blank" rel="noopener noreferrer" className="w-94 bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
          <img src="/PCAPbadge.png" alt="PCAP Badge" className="w-20 h-20 object-contain mb-3"/>
          <p className="text-neutral-200 font-medium">Python PCAP</p>
          <img src="/certi.png" alt="Certificado PCAP" className="w-full object-cover mt-3 rounded"/>
        </a>
          {/* PCEP */}
        <a href="https://www.credly.com/badges/90f0ea0f-00b1-4754-8ea1-1a6568c86694/public_url" target="_blank" rel="noopener noreferrer" className="w-94 bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
          <img src="/pcep.png" alt="PCEP Badge" className="w-20 h-20 object-contain mb-3"/>
          <p className="text-neutral-200 font-medium">Python PCEP</p>
          <img src="/pcepcertif.png" alt="Certificado PCEP" className="w-full object-cover mt-3 rounded"/>
        </a>
        {/* LINUX */}
        <a className="w-94 bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
          <p className="text-neutral-200 font-medium mb-2">Linux Unhatched</p>
          <p className="text-2xl">🐧</p>
          <img src="/linux.png" alt="Linux Unhatched Certificate" className="w-full object-cover mt-3 rounded"/>
        </a>

        {/* CIBERSEGURIDAD */}
        <a className="w-94 bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:shadow-primary/10">
          <p className="text-neutral-200 font-medium mb-2">Introduction to Cybersecurity</p>
          <p className="text-2xl">🔒</p>
          <img src="/ciber.png" alt="Introducción a la Ciberseguridad" className="w-full object-cover mt-3 rounded"/>
        </a>
        </div>
      </div>

      {/* TECH STACK */}
    <div className="mt-20">
  <h3 className="text-2xl font-semibold text-center mb-8">Tech Stack</h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
    {[
            { name: "Python", icon: "🐍" },
            { name: "Java", icon: "☕" },
            { name: "PHP", icon: "🐘" },
            { name: "React", icon: "⚛️" },
            { name: "TypeScript", icon: "🌀" },
            { name: "Node.js", icon: "🟢" },
            { name: "MySQL", icon: "🗄️" },
            { name: "Git & GitHub", icon: "🐙" },
            { name: "Linux", icon: "🐧" },
            { name: "HTML / CSS / JS", icon: "🧩" },
        ].map(function (tech) { return (<div key={tech.name} className="flex flex-col items-center justify-center bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-primary transition hover:shadow-lg hover:shadow-primary/10">
        <span className="text-3xl mb-2">{tech.icon}</span>
        <p className="text-neutral-200 text-sm font-medium">{tech.name}</p>
      </div>); })}
  </div>
    </div>

    </section>);
}
