import { TESTIMONIALS_DATA } from "../data";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
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
        staggerChildren: 0.15
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
    <section id="testimonials" className="bg-black py-24 md:py-36 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.4em] font-medium block mb-4">
            Industry Feedback
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 leading-tight">
            Technical
          </h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl italic font-light text-neutral-400">
            Testimonials
          </h3>
        </div>

        {/* Quotes Grid Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: "rgba(217, 119, 6, 0.25)" }}
              className="p-8 md:p-10 bg-neutral-950/40 border border-neutral-900/80 hover:bg-neutral-950 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-amber-500/70 mb-8" />
                
                <p className="text-neutral-300 font-light text-sm sm:text-base leading-relaxed italic mb-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-900">
                <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono text-xs uppercase text-amber-500 font-bold">
                  {item.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h5 className="font-sans text-xs uppercase tracking-wider text-white font-semibold">
                    {item.author}
                  </h5>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
