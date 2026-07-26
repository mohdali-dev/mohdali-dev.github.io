import { useState } from "react";
import { SERVICE_DATA } from "../data";
import { ServicePillar } from "../types";
import { ArrowUpRight, Check, X, Code, Terminal, BrainCircuit, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [activePillar, setActivePillar] = useState<ServicePillar | null>(null);

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
        staggerChildren: 0.1
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

  const getIcon = (id: string) => {
    switch (id) {
      case "ml-nlp":
        return <BrainCircuit size={32} className="text-amber-500/80 mb-6" />;
      case "fullstack":
        return <Globe size={32} className="text-amber-500/80 mb-6" />;
      case "mlops":
        return <Terminal size={32} className="text-amber-500/80 mb-6" />;
      default:
        return <Code size={32} className="text-amber-500/80 mb-6" />;
    }
  };

  return (
    <section id="services" className="bg-black py-24 md:py-36 relative border-b border-neutral-950 overflow-hidden">
      {/* Background Glow Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.4em] font-medium block mb-4">
            Engineering Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Core Expertise
          </h2>
          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
            Delivering high-value engineering solutions across the modern machine learning lifecycle and web systems spectrum.
          </p>
        </div>

        {/* Pillars Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-neutral-900 border-l border-neutral-900"
        >
          {SERVICE_DATA.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(10, 10, 10, 1)" }}
              className="group p-8 md:p-12 bg-black border-r border-b border-neutral-900 transition-colors duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className="font-serif text-3xl md:text-4xl font-extralight text-neutral-800 group-hover:text-amber-500/30 transition-colors">
                    {pillar.num}
                  </span>
                  {getIcon(pillar.id)}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed mb-12">
                  {pillar.description}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActivePillar(pillar)}
                className="inline-flex items-center gap-1.5 self-start group/btn text-amber-500 hover:text-white transition-colors text-xs font-mono uppercase tracking-[0.2em]"
              >
                <span>Learn More</span>
                <ArrowUpRight
                  size={14}
                  className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Detail Modal/Drawer */}
      <AnimatePresence>
        {activePillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePillar(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Slider Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xl bg-neutral-950 border-l border-neutral-900 p-8 md:p-12 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex justify-between items-center mb-16">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">
                    Service Spec {activePillar.num}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActivePillar(null)}
                    className="p-1 text-neutral-500 hover:text-white transition-colors border border-neutral-900 rounded-sm hover:border-neutral-800"
                  >
                    <X size={18} />
                  </motion.button>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  {activePillar.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-10 text-sm">
                  {activePillar.description}
                </p>

                <div className="space-y-6">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Capabilities &amp; Core Standards
                  </h4>
                  <ul className="space-y-4">
                    {activePillar.details.map((detail, index) => (
                      <li key={index} className="flex gap-4 items-start">
                        <div className="p-1 rounded bg-amber-500/5 border border-amber-500/10 mt-1">
                          <Check size={12} className="text-amber-500" />
                        </div>
                        <span className="text-neutral-300 font-light text-sm leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest text-center sm:text-left">
                  Ready to deploy high-fidelity systems
                </p>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  onClick={() => setActivePillar(null)}
                  className="px-6 py-2.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white font-sans text-xs uppercase tracking-[0.15em] font-medium"
                >
                  Discuss Project
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
