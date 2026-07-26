import { Cpu, Database, Award, Code, Globe, Terminal } from "lucide-react";

export default function TechStackTicker() {
  const technologies = [
    { name: "Next.js", icon: Globe },
    { name: "PyTorch", icon: Cpu },
    { name: "Docker", icon: Terminal },
    { name: "React", icon: Code },
    { name: "Hugging Face", icon: Award },
    { name: "Transformers", icon: Cpu },
    { name: "GoLang", icon: Terminal },
    { name: "Qdrant Vector DB", icon: Database },
    { name: "FastAPI", icon: Code },
    { name: "Firebase", icon: Database },
  ];

  // Repeat twice for infinite marquee loop
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="bg-black py-10 md:py-14 border-y border-neutral-900 overflow-hidden relative select-none">
      {/* Absolute left/right glow gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <div className="animate-marquee flex items-center gap-16 md:gap-24">
          {duplicatedTechs.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-neutral-600 hover:text-amber-500/70 transition-colors pointer-events-none"
              >
                <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-serif text-lg md:text-2xl uppercase italic tracking-widest leading-none font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
