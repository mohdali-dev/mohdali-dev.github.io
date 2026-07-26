import { motion } from "motion/react";

interface TechItem {
  name: string;
  slug: string;
  color?: string; // fallback color styling if needed
}

interface BentoCard {
  title: string;
  description: string;
  colSpan: string;
  items: TechItem[];
}

export default function TechStack() {
  const bentoCards: BentoCard[] = [
    {
      title: "AI/ML & Core Intelligence",
      description: "Neural network architectures, transformers, and vector search systems used to build state-of-the-art vision & speech AI.",
      colSpan: "md:col-span-2",
      items: [
        { name: "Python", slug: "python" },
        { name: "PyTorch", slug: "pytorch" },
        { name: "TensorFlow", slug: "tensorflow" },
        { name: "OpenAI", slug: "openai" },
        { name: "LangChain", slug: "langchain" },
        { name: "Whisper", slug: "openai" },
        { name: "Hugging Face", slug: "huggingface" },
        { name: "Pinecone", slug: "pinecone" },
      ],
    },
    {
      title: "Full-Stack Frontend Systems",
      description: "Interactive frontends, responsive layouts, and modern standard reactive frameworks delivering state-of-the-art client performance.",
      colSpan: "md:col-span-2",
      items: [
        { name: "Next.js", slug: "nextdotjs" },
        { name: "React", slug: "react" },
        { name: "TypeScript", slug: "typescript" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "JavaScript", slug: "javascript" },
        { name: "Redux", slug: "redux" },
      ],
    },
    {
      title: "Backend & Cloud Architectures",
      description: "Scalable databases, key-value caches, and robust server frameworks powering modern distributed applications and secure endpoints.",
      colSpan: "md:col-span-2",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "FastAPI", slug: "fastapi" },
        { name: "Express", slug: "express" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "Firebase", slug: "firebase" },
        { name: "Supabase", slug: "supabase" },
        { name: "SQLite", slug: "sqlite" },
      ],
    },
    {
      title: "Infrastructure, MLOps & Platforms",
      description: "Automated container systems, tracking frameworks, remote runtimes, and deployment configurations to package, test, and scale intelligent models.",
      colSpan: "md:col-span-2",
      items: [
        { name: "Docker", slug: "docker" },
        { name: "MLflow", slug: "mlflow" },
        { name: "Git", slug: "git" },
        { name: "GitHub", slug: "github" },
        { name: "Linux", slug: "linux" },
        { name: "Google Colab", slug: "googlecolab" },
        { name: "Vercel", slug: "vercel" },
      ],
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
      },
    },
  };

  const chipContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 110, damping: 15 },
    },
  };

  return (
    <section id="tech-stack" className="bg-black py-20 md:py-32 relative border-b border-neutral-950 overflow-hidden">
      {/* Dynamic Ambient Background Glow Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
        className="absolute top-10 left-10 w-[350px] h-[350px] bg-amber-700/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-2 block">
              Core Stack
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extralight tracking-tight text-white">
              Technical Arsenal
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Engineered with modern, industry-standard toolsets for reliable ML integrations and responsive high-throughput applications.
          </p>
        </motion.div>

        {/* Bento Grid layout */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {bentoCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -5,
                borderColor: "rgba(245, 158, 11, 0.2)",
                boxShadow: "0 10px 30px -15px rgba(245, 158, 11, 0.08)",
              }}
              className={`${card.colSpan} bg-neutral-900/40 border border-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-colors duration-300 hover:bg-neutral-900/65`}
            >
              <div className="mb-6">
                <h3 className="font-serif text-lg md:text-xl font-medium text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-400 font-sans font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Staggered interactive chips inside card container */}
              <motion.div
                variants={chipContainerVariants}
                className="flex flex-wrap gap-2.5 mt-auto"
              >
                {card.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={chipVariants}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="group/chip flex items-center gap-2 px-3.5 py-2 bg-neutral-950/80 hover:bg-neutral-950/100 border border-neutral-800/80 hover:border-neutral-700/60 transition-colors duration-300 rounded-lg cursor-pointer select-none"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}`}
                      alt={`${tech.name} logo`}
                      className="w-4 h-4 grayscale opacity-60 group-hover/chip:grayscale-0 group-hover/chip:opacity-100 transition-all duration-300 object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // fallback if cdn path fails or does not cover a specific slug
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <span className="font-mono text-[11px] text-neutral-400 group-hover/chip:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
