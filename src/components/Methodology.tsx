import { useRef } from "react";
import { METHODOLOGY_DATA } from "../data";
import { motion, useScroll, useSpring } from "motion/react";
import { GitCommit, Layers, Code, HardDrive, Cpu, Terminal } from "lucide-react";

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001,
  });

  const getIconForStep = (num: string) => {
    switch (num) {
      case "01":
        return <HardDrive className="text-amber-500 w-5 h-5" />;
      case "02":
        return <Cpu className="text-amber-500 w-5 h-5" />;
      case "03":
        return <Layers className="text-amber-500 w-5 h-5" />;
      case "04":
        return <Code className="text-amber-500 w-5 h-5" />;
      case "05":
        return <Terminal className="text-amber-500 w-5 h-5" />;
      default:
        return <GitCommit className="text-amber-400 w-5 h-5" />;
    }
  };

  const springTransition = {
    type: "spring",
    stiffness: 60,
    damping: 20
  };

  return (
    <section ref={containerRef} id="methodology" className="bg-neutral-950 py-24 md:py-36 relative overflow-hidden border-b border-neutral-950">
      {/* Visual top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-44 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      {/* Dynamic Ambient Background Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[900px] bg-gradient-to-b from-amber-600/10 via-amber-500/15 to-transparent rounded-full blur-[160px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.7, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 0.7, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-24 md:mb-32">
          <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.4em] font-medium block mb-4">
            The Methodology
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 leading-none">
            Your Product
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl italic font-light text-neutral-400">
            in 5 steps
          </h3>
        </div>

        {/* Centered Timeline vertical alignment */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line Rule on desktop */}
          <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-neutral-900/60 md:-translate-x-1/2" />
          
          {/* Active color scroll indicator */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-amber-600 via-amber-500 to-amber-700 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(245,158,11,0.6)]"
          />

          <div className="space-y-24 md:space-y-32">
            {METHODOLOGY_DATA.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={step.num}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center ${
                    isEven ? "md:text-left" : "md:text-right"
                  }`}
                >
                  {/* Central Node Dot */}
                  <motion.div 
                    initial={{ scale: 0.75, opacity: 0.3 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="absolute left-[20px] md:left-1/2 top-4 md:top-1/2 w-10 h-10 -translate-x-[19px] md:-translate-x-5 md:-translate-y-5 rounded-full bg-black border border-neutral-800 flex items-center justify-center z-20 hover:border-amber-500 transition-colors duration-300"
                  >
                    {getIconForStep(step.num)}
                  </motion.div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      isEven ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={springTransition}
                      className="space-y-4"
                    >
                      <span className="font-serif text-4xl md:text-5xl font-extralight text-neutral-800 tracking-wide block leading-none">
                        {step.num}
                      </span>
                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-amber-500">
                        {step.title}
                      </h4>
                      <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>

                      {/* Display Key Deliverable */}
                      <div className={`pt-2 flex items-center gap-2 text-xs font-mono text-neutral-500 ${isEven ? "justify-start" : "md:justify-end"}`}>
                        <span className="font-semibold text-amber-600 uppercase tracking-widest text-[9px]">Deliverable:</span>
                        <span className="italic">{step.keyDeliverable}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column Spacer (Desktop only) */}
                  <div className={`hidden md:block ${isEven ? "md:order-1" : "md:order-2"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
