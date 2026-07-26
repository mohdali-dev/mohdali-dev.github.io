import { useState } from "react";
import { motion } from "motion/react";
import {
  Code2,
  Brain,
  Sparkles,
  Server,
  Layout,
  Database,
  Cloud,
  Wrench,
  Bot,
  Layers,
  BookOpen,
  Cpu,
  Terminal,
  ExternalLink,
  Zap
} from "lucide-react";

interface TechItem {
  name: string;
  slug?: string;
  category?: string;
}

interface TechCategory {
  title: string;
  icon: typeof Code2;
  description: string;
  badgeCount: number;
  items: TechItem[];
}

interface HighlightCard {
  title: string;
  subtitle: string;
  icon: typeof Brain;
  gradient: string;
  tags: string[];
}

export default function TechStack() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);

  // 4 Top Highlight Cards
  const highlights: HighlightCard[] = [
    {
      title: "AI & ML",
      subtitle: "Deep Learning, NLP, Computer Vision, Speech AI",
      icon: Cpu,
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
      tags: ["PyTorch", "Whisper ASR", "Transformers", "OpenCV"]
    },
    {
      title: "Full Stack",
      subtitle: "Modern React applications with scalable backend systems",
      icon: Layers,
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      tags: ["React 18", "TypeScript", "FastAPI", "Node.js"]
    },
    {
      title: "LLM Engineering",
      subtitle: "Retrieval-Augmented Generation, Agents, Prompt Engineering",
      icon: Bot,
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
      tags: ["RAG", "LangChain", "Vector DBs", "Gemini API"]
    },
    {
      title: "Research",
      subtitle: "Machine Learning research, datasets, experimentation, and publications",
      icon: BookOpen,
      gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
      tags: ["BaltiVoice", "arXiv Paper", "HuggingFace", "Benchmarks"]
    }
  ];

  // 8 Tech Categories Grid
  const categories: TechCategory[] = [
    {
      title: "Programming Languages",
      icon: Code2,
      description: "Core languages for building robust AI algorithms, web applications, and data pipelines.",
      badgeCount: 6,
      items: [
        { name: "Python", slug: "python" },
        { name: "TypeScript", slug: "typescript" },
        { name: "JavaScript", slug: "javascript" },
        { name: "SQL", slug: "postgresql" },
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css3" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Frameworks for deep learning model training, computer vision, and speech processing.",
      badgeCount: 8,
      items: [
        { name: "PyTorch", slug: "pytorch" },
        { name: "TensorFlow", slug: "tensorflow" },
        { name: "Scikit-learn", slug: "scikitlearn" },
        { name: "OpenCV", slug: "opencv" },
        { name: "NumPy", slug: "numpy" },
        { name: "Pandas", slug: "pandas" },
        { name: "Matplotlib", slug: "python" },
        { name: "Hugging Face Transformers", slug: "huggingface" }
      ]
    },
    {
      title: "Large Language Models",
      icon: Sparkles,
      description: "Generative AI, retrieval pipelines, vector indexers, and intelligent multi-agent orchestration.",
      badgeCount: 8,
      items: [
        { name: "LangChain", slug: "langchain" },
        { name: "LangGraph", slug: "langchain" },
        { name: "RAG", slug: "openai" },
        { name: "Vector Databases", slug: "pinecone" },
        { name: "FAISS", slug: "meta" },
        { name: "ChromaDB", slug: "python" },
        { name: "OpenAI API", slug: "openai" },
        { name: "Google Gemini API", slug: "google" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      description: "High-throughput microservices, RESTful endpoints, and asynchronous server architectures.",
      badgeCount: 5,
      items: [
        { name: "FastAPI", slug: "fastapi" },
        { name: "Flask", slug: "flask" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Express.js", slug: "express" },
        { name: "REST APIs", slug: "postman" }
      ]
    },
    {
      title: "Frontend Development",
      icon: Layout,
      description: "Interactive single-page applications, responsive component design systems, and rich animations.",
      badgeCount: 5,
      items: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "Vite", slug: "vite" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Framer Motion", slug: "framer" }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      description: "Relational, document, and embedded databases optimized for data integrity and low-latency queries.",
      badgeCount: 4,
      items: [
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "MySQL", slug: "mysql" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "SQLite", slug: "sqlite" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      description: "CI/CD pipelines, containerized deployments, cloud hosting, and version control infrastructure.",
      badgeCount: 7,
      items: [
        { name: "Git", slug: "git" },
        { name: "GitHub", slug: "github" },
        { name: "Docker", slug: "docker" },
        { name: "GitHub Actions", slug: "githubactions" },
        { name: "Vercel", slug: "vercel" },
        { name: "Google Cloud", slug: "googlecloud" },
        { name: "Firebase", slug: "firebase" }
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      description: "IDEs, interactive research notebooks, API test beds, and Linux terminal environments.",
      badgeCount: 6,
      items: [
        { name: "VS Code", slug: "visualstudiocode" },
        { name: "Jupyter Notebook", slug: "jupyter" },
        { name: "Google Colab", slug: "googlecolab" },
        { name: "Postman", slug: "postman" },
        { name: "Figma", slug: "figma" },
        { name: "Linux", slug: "linux" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18
      }
    }
  };

  return (
    <section
      id="tech-stack"
      className="bg-black py-20 md:py-28 relative border-t border-neutral-900 overflow-hidden text-neutral-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <Zap size={13} />
            <span>Technical Infrastructure</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack<span className="text-amber-500">.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            The technologies, frameworks, and tools I use to build intelligent AI systems and scalable full-stack applications.
          </p>
        </motion.div>

        {/* Highlight Summary Cards (4 Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 md:mb-16"
        >
          {highlights.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, borderColor: "rgba(245, 158, 11, 0.4)" }}
                className="relative bg-neutral-950/90 border border-neutral-800/80 rounded-xl p-5 shadow-lg overflow-hidden group transition-all duration-300 flex flex-col justify-between"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-amber-500/40 text-amber-400 flex items-center justify-center transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                    {card.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-900/80">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Categorized Tech Stack Grid (8 Categories) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categories.map((cat, idx) => {
            const CategoryIcon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(245, 158, 11, 0.4)",
                  boxShadow: "0 12px 30px -10px rgba(245, 158, 11, 0.08)"
                }}
                className="bg-neutral-950/80 border border-neutral-800/80 hover:bg-neutral-900/60 rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group shadow-md"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-neutral-900 text-amber-400 border border-neutral-800 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-colors">
                        <CategoryIcon size={18} />
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-neutral-900 text-neutral-400 border border-neutral-800 rounded-full">
                      {cat.items.length}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-5">
                    {cat.description}
                  </p>
                </div>

                {/* Technology Badges / Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-900">
                  {cat.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/badge inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-900/90 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-lg text-xs font-mono text-neutral-300 hover:text-white transition-all duration-200 cursor-default select-none"
                    >
                      {item.slug ? (
                        <img
                          src={`https://cdn.simpleicons.org/${item.slug}`}
                          alt={`${item.name} icon`}
                          className="w-3.5 h-3.5 opacity-60 group-hover/badge:opacity-100 group-hover/badge:scale-110 transition-all object-contain filter grayscale group-hover/badge:grayscale-0"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      )}
                      <span>{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
