import { useState } from "react";
import { PROJECT_DATA } from "../data";
import { Project } from "../types";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CaseStudyModal from "./CaseStudyModal";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const springTransition = {
    type: "spring",
    stiffness: 60,
    damping: 20
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springTransition
    }
  };

  return (
    <section id="work" className="bg-black py-20 sm:py-28 md:py-36 lg:py-44 relative border-t border-b border-neutral-900/80 overflow-hidden">
      {/* Background Glow Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.7, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16 md:mb-24 lg:mb-28">
          <div className="max-w-2xl">
            <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.4em] font-medium block mb-4">
              Selected Showcase
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-[84px] leading-none font-bold tracking-tight text-white">
              Selected Work
            </h2>
          </div>
          <motion.a
            whileHover={{ scale: 1.02, color: "#f59e0b" }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/mohdali-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 border-b border-neutral-800 pb-1.5 transition-colors"
          >
            <span>View All Repository Sources</span>
            <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* 2x2 Grid displays BaltiVoice, Omit PII Sanitizer, Menu Scanner and the Semantic Search Engine */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {PROJECT_DATA.map((project) => (
            <motion.div
              layout
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setSelectedProject(project)}
              data-cursor="view"
              className="group cursor-pointer flex flex-col bg-neutral-950/40 border border-neutral-900/90 hover:border-amber-500/40 rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
            >
              {/* Full-Bleed Image Frame at the top with NO border inside frame */}
              <div className="aspect-[16/10] w-full bg-black overflow-hidden relative border-0">
                {/* Tech tags floating overlay */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-black/85 backdrop-blur-md rounded border border-neutral-800 text-[10px] font-mono text-amber-400 font-semibold tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                  className="w-full h-full object-cover grayscale-hover group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Description Row - Increased Spacing, Removed Small Icon */}
              <div className="p-6 sm:p-8 flex flex-col justify-between border-t border-neutral-900 group-hover:border-amber-500/40 transition-colors duration-500 space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-amber-500 font-mono uppercase tracking-[0.3em] font-semibold">
                      {project.subtitle}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-2 py-0.5 bg-neutral-900 rounded border border-neutral-800">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors duration-300 pt-1">
                    {project.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-neutral-900/80 text-neutral-400 border border-neutral-800/80 rounded font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Architectural Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
