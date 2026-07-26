import { motion } from "motion/react";
import { ArrowDown, FileDown } from "lucide-react";

interface HeroProps {
  onContactOpen: () => void;
}

export default function Hero({ onContactOpen }: HeroProps) {
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
        staggerChildren: 0.15,
        delayChildren: 0.1
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
    <section
      id="hero"
      className="relative min-h-screen bg-black flex flex-col justify-between pt-24 md:pt-32 overflow-hidden"
    >
      {/* Visual background element - low-key image mask slot with the majestic portrait */}
      <div className="absolute inset-0 z-0 flex items-center justify-center h-full pt-16 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] aspect-[4/5] md:aspect-[5/6] pointer-events-none mt-2"
        >
          {/* Smooth edge gradient masks to seamlessly blend the portrait into the dark backdrop without obscuring the lower face */}
          <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-black to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[12%] bg-gradient-to-t from-black to-transparent z-10" />
          <div className="absolute top-0 bottom-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHYADWQvyfIbmv9nVuIb9Aymm2kwkyYb96NRD0C_wcykujLyXcZDO3MQrFPP1CSZKxgYM6JxNyQxcpDnurAqWdFTdJxf5KvYEp_OzyQzTUKO3dQWft1igqbqBxXap7jK5ZcEOxh775lx5vwGYW3Pl04AYDLAKvp0BWU4jMbnn9ARgNadGJ6EIMy3otZiRm5o7swfC1voi55ccpKYITmwNwNAlqwY-WdU9TlW4r93oa3-9Gv5G94Kfv0k63Xt6EQw4FuLOlsqSzgO0"
            alt="Muhammad Ali Portrait"
            className="w-full h-full object-cover object-center filter grayscale opacity-45 mix-blend-screen md:opacity-55"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Hero Content Overlay */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center justify-center flex-grow pt-24 md:pt-36"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-[88px] font-bold leading-[1.02] tracking-normal">
            <span className="metallic-text drop-shadow-[0_2px_15px_rgba(217,119,6,0.15)]">AI/ML Engineer</span>
          </h1>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[45px] italic text-neutral-300 font-light tracking-wide">
            &amp; Full Stack Developer
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed tracking-wide"
        >
          Building production-ready AI systems with Machine Learning, Large Language Models, Computer Vision, and modern full-stack technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.03, borderColor: "rgba(217, 119, 6, 0.7)" }}
            whileTap={{ scale: 0.97 }}
            href="/Muhammad_Ali_CV.pdf"
            download="Muhammad_Ali_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-neutral-900/90 border border-amber-500/40 text-amber-400 hover:text-amber-300 hover:border-amber-500 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-amber-500/5 cursor-pointer"
          >
            <FileDown size={15} />
            <span>Download CV</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, borderColor: "rgba(217, 119, 6, 0.7)" }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="px-6 py-3 bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white font-sans text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Explore Selected Work
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onContactOpen}
            className="px-6 py-3 bg-amber-500 font-sans text-xs uppercase tracking-[0.2em] font-bold text-black hover:opacity-95 transition-opacity"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Anchor scroll details */}
      <div className="relative z-10 w-full pb-10 flex flex-col items-center">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 group cursor-pointer transition-colors text-neutral-600 hover:text-amber-500"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-medium">My Expertise</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-amber-500" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
