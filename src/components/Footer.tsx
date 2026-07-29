import { Mail, Github, Linkedin, BookOpen, Database, ExternalLink } from "lucide-react";

// Custom Hugging Face Logo Mark matching Lucide stroke style
function HuggingFaceIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 9.5h.01" strokeWidth="2.5" />
      <path d="M16 9.5h.01" strokeWidth="2.5" />
      <path d="M7.5 14.5c1 1.8 2.5 2.5 4.5 2.5s3.5-.7 4.5-2.5" />
      <path d="M4 11c1-1 2.5-1 3.5 0" />
      <path d="M20 11c-1-1-2.5-1-3.5 0" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900/80 py-16 md:py-20 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 mb-16">
          
          {/* Brand/Icons Column */}
          <div className="md:col-span-1 space-y-6">
            <h5 className="font-brand text-2xl sm:text-3xl font-normal tracking-tight text-[#dfccb7] lowercase">
              muhammad ali<span className="text-amber-500">.</span>
            </h5>
            <p className="text-neutral-500 font-light text-xs max-w-xs leading-relaxed">
              Precision design systems paired with performance neural network pipelines &amp; low-resource speech ASR.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="mailto:aliskdse@gmail.com"
                aria-label="Send email to Muhammad Ali"
                title="Send Email (aliskdse@gmail.com)"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-amber-500/80 hover:text-amber-400 hover:bg-amber-500/10 text-neutral-400 transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:scale-105"
              >
                <Mail size={15} />
              </a>
              <a
                href="https://github.com/mohdali-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Muhammad Ali on GitHub"
                title="GitHub Profile (mohdali-dev)"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-amber-500/80 hover:text-amber-400 hover:bg-amber-500/10 text-neutral-400 transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:scale-105"
              >
                <Github size={15} />
              </a>
              <a
                href="https://huggingface.co/mohdali1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Muhammad Ali on Hugging Face"
                title="Hugging Face Models & Datasets (mohdali1)"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-amber-500/80 hover:text-amber-400 hover:bg-amber-500/10 text-neutral-400 transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:scale-105"
              >
                <HuggingFaceIcon size={15} />
              </a>
              <a
                href="https://linkedin.com/in/mohdali1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Muhammad Ali on LinkedIn"
                title="LinkedIn Profile (mohdali1)"
                className="w-9 h-9 rounded-full border border-neutral-800 hover:border-amber-500/80 hover:text-amber-400 hover:bg-amber-500/10 text-neutral-400 transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:scale-105"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h6 className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-500 font-bold mb-6">
              Navigation
            </h6>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-wide text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors duration-200 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Muhammad_Ali_CV.pdf"
                  download="Muhammad_Ali_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200 flex items-center gap-1.5 font-medium"
                >
                  <span>Download CV (PDF)</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-amber-400 transition-colors duration-200 inline-block">
                  Work &amp; Case Studies
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5">
                  <span>Research &amp; Papers</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded font-mono">NEW</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors duration-200 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-amber-400 transition-colors duration-200 inline-block">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-amber-400 transition-colors duration-200 inline-block">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Research & ML Highlights */}
          <div>
            <h6 className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-500 font-bold mb-6">
              Research &amp; ML
            </h6>
            <ul className="space-y-3 font-sans text-xs tracking-wide text-neutral-400">
              <li>
                <a
                  href="https://arxiv.org/pdf/2606.03504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5"
                >
                  <BookOpen size={13} className="text-amber-500 shrink-0" />
                  <span>BaltiVoice Paper (arXiv)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/datasets/mohdali1/baltivoice-asr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Database size={13} className="text-amber-500 shrink-0" />
                  <span>BaltiVoice Speech Corpus</span>
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/mohdali1/whisper-small-balti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5"
                >
                  <HuggingFaceIcon size={13} className="text-amber-500 shrink-0" />
                  <span>Whisper Balti ASR Model</span>
                </a>
              </li>
              <li className="text-neutral-500 text-[11px] pt-1 font-mono">
                PyTorch • Whisper Fine-Tuning • Low-Resource NLP
              </li>
            </ul>
          </div>

          {/* Location & Contact details */}
          <div>
            <h6 className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-500 font-bold mb-6">
              Contact &amp; Location
            </h6>
            <div className="space-y-3 text-xs text-neutral-300 font-light">
              <a
                href="mailto:aliskdse@gmail.com"
                className="font-mono font-semibold text-amber-300 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group"
                aria-label="Email aliskdse@gmail.com"
              >
                <Mail size={13} className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>aliskdse@gmail.com</span>
              </a>
              <a
                href="https://github.com/mohdali-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group"
                aria-label="GitHub Profile mohdali-dev"
              >
                <Github size={13} className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>github.com/mohdali-dev</span>
                <ExternalLink size={10} className="text-neutral-600 group-hover:text-amber-400 transition-colors" />
              </a>
              <a
                href="https://huggingface.co/mohdali1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200 flex items-center gap-2 group"
                aria-label="Hugging Face Profile mohdali1"
              >
                <HuggingFaceIcon size={13} className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span>huggingface.co/mohdali1</span>
                <ExternalLink size={10} className="text-neutral-600 group-hover:text-amber-400 transition-colors" />
              </a>
              <p className="text-neutral-500 pt-2 font-mono text-[11px]">
                Lahore, Pakistan • Remote Worldwide
              </p>
            </div>
          </div>

        </div>

        {/* Bottom credits with full-width top border divider line */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900/90 pt-8 mt-12 md:mt-16 text-[10px] text-neutral-500 uppercase font-mono tracking-[0.2em] gap-4">
          <div className="text-center md:text-left">
            © {currentYear} Muhammad Ali. Open Research &amp; Engineering.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-400">Available for Research &amp; Engineering Collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
