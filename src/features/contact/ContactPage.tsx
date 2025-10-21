import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="container-max py-24 text-center">
      <h2 className="text-4xl font-bold mb-12">
        Ponte en <span className="text-primary">contacto</span>
      </h2>

      <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
        Puedes contactarme a través de cualquiera de los siguientes medios:
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
        {/* Email */}
        <a
          href="mailto:millanpedrop@gmail.com"
          className="flex items-center gap-3 text-neutral-300 hover:text-primary transition"
        >
          <Mail className="w-5 h-5 text-primary" />
          millanpedrop@gmail.com
        </a>

        {/* Teléfono */}
        <a
          href="tel:+34633535971"
          className="flex items-center gap-3 text-neutral-300 hover:text-primary transition"
        >
          <Phone className="w-5 h-5 text-primary" />
          +34 633 535 971
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/pedro-millan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-neutral-300 hover:text-primary transition"
        >
          <Github className="w-5 h-5 text-primary" />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/pedro-pablo-millán-mompó-499a36377/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-neutral-300 hover:text-primary transition"
        >
          <Linkedin className="w-5 h-5 text-primary" />
          LinkedIn
        </a>
      </div>
    </section>
  )
}

  