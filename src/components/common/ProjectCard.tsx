type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    image: string; // ✅ Nueva propiedad
  };
  
  export default function ProjectCard({ title, description, tech, github, image }: ProjectCardProps) {
    return (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-neutral-800 rounded-lg overflow-hidden hover:border-primary transition group hover:-translate-y-1 bg-neutral-950"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover border-b border-neutral-800 group-hover:opacity-90 transition"
        />
  
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition">
            {title}
          </h3>
          <p className="text-neutral-400 mb-4">{description}</p>
  
          <div className="flex flex-wrap gap-2 justify-center">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    );
  }
  
  