import { motion } from "motion/react";
import { ArrowLeft, Home, Terminal, Compass } from "lucide-react";

interface NotFoundProps {
  onGoHome: () => void;
}

export default function NotFound({ onGoHome }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-black text-neutral-200 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden selection:bg-amber-600 selection:text-black">
      {/* Radial Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full text-center relative z-10 bg-neutral-950/90 border border-neutral-800/90 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md"
      >
        {/* Decorative Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 font-mono text-xs font-semibold tracking-widest uppercase mb-8">
          <Terminal size={14} />
          <span>ERROR 404 // UNMAPPED NODE</span>
        </div>

        {/* Large 404 Display Number */}
        <h1 className="font-serif text-7xl sm:text-9xl font-extrabold tracking-tight metallic-text mb-4 drop-shadow-[0_4px_20px_rgba(245,158,11,0.2)]">
          404
        </h1>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8 max-w-md mx-auto">
          The requested vector points to an unmapped path in this system. The page you are looking for does not exist or has been relocated.
        </p>

        {/* Back to Home Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03, borderColor: "rgba(245, 158, 11, 0.8)" }}
            whileTap={{ scale: 0.97 }}
            onClick={onGoHome}
            className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-lg shadow-lg shadow-amber-500/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact-cta"
            onClick={onGoHome}
            className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
          >
            <Compass size={16} className="text-amber-500" />
            <span>Contact Support</span>
          </motion.a>
        </div>

        {/* Footer info line inside 404 */}
        <div className="mt-10 pt-6 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>PATH: {typeof window !== "undefined" ? window.location.pathname : "/404"}</span>
          <span>SYSTEM STATUS: ONLINE</span>
        </div>
      </motion.div>
    </div>
  );
}
