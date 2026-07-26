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
    <section id="work" className="bg-black py-24 md:py-36 relative border-b border-neutral-950 overflow-hidden">
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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-20">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14"
        >
          {PROJECT_DATA.map((project) => (
            <motion.div
              layout
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -4 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setSelectedProject(project)}
              data-cursor="view"
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Frame with Grayscale filter */}
              <div className="aspect-[16/10] w-full bg-neutral-950 border border-neutral-900 overflow-hidden relative">
                {/* Tech tags floating overlay */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-black/80 backdrop-blur-md rounded-sm border border-neutral-800 text-[9px] font-mono text-amber-500 tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-hover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Description Row */}
              <div className="py-7 flex justify-between items-center border-b border-neutral-900 group-hover:border-amber-500/50 transition-colors duration-500">
                <div className="space-y-1">
                  <h4 className="font-serif text-xl sm:text-2xl text-white group-hover:metallic-text transition-all duration-350">
                    {project.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 font-mono uppercase tracking-[0.25em]">
                    {project.subtitle}
                  </p>
                </div>
                <div className="p-2 sm:p-2.5 rounded-full border border-neutral-900 group-hover:border-amber-500/30 group-hover:bg-amber-500/5 transition-all duration-500 flex items-center justify-center">
                  <ArrowUpRight
                    size={20}
                    className="text-neutral-500 group-hover:text-amber-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                  />
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
