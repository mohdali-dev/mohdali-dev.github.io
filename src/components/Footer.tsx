import { Mail, Github, Linkedin, BookOpen, Database, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 py-16 md:py-20 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 mb-16 md:mb-20">
          
          {/* Brand/Icons Column */}
          <div className="md:col-span-1 space-y-6">
            <h5 className="font-brand text-2xl sm:text-3xl font-normal tracking-tight text-[#dfccb7] lowercase">
              muhammad ali<span className="text-amber-500">.</span>
            </h5>
            <p className="text-neutral-500 font-light text-xs max-w-xs leading-relaxed">
              Precision design systems paired with performance neural network pipelines &amp; low-resource speech ASR.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:aliskdse@gmail.com"
                aria-label="Email"
                title="Email Me"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-amber-500 hover:text-amber-400 text-neutral-400 transition-colors flex items-center justify-center bg-neutral-950"
              >
                <Mail size={14} />
              </a>
              <a
                href="https://github.com/mohdali-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub Profile"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-amber-500 hover:text-amber-400 text-neutral-400 transition-colors flex items-center justify-center bg-neutral-950"
              >
                <Github size={14} />
              </a>
              <a
                href="https://huggingface.co/mohdali1"
                target="_blank"
                rel="noreferrer"
                aria-label="HuggingFace"
                title="HuggingFace Models & Datasets"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-amber-500 hover:text-amber-400 text-neutral-400 transition-colors flex items-center justify-center bg-neutral-950 font-mono text-[10px] font-bold"
              >
                <Database size={13} />
              </a>
              <a
                href="https://linkedin.com/in/mohdali1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
                className="w-8 h-8 rounded-full border border-neutral-800 hover:border-amber-500 hover:text-amber-400 text-neutral-400 transition-colors flex items-center justify-center bg-neutral-950"
              >
                <Linkedin size={14} />
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
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Muhammad_Ali_CV.pdf"
                  download="Muhammad_Ali_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span>Download CV (PDF)</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-amber-400 transition-colors">
                  Work &amp; Case Studies
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Research & Papers</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded font-mono">NEW</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-amber-400 transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-amber-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="/404"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, "", "/404");
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                  className="hover:text-amber-400 transition-colors text-neutral-500 font-mono text-[10px]"
                >
                  404 Page Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Research & ML Highlights */}
          <div>
            <h6 className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-500 font-bold mb-6">
              Research & ML
            </h6>
            <ul className="space-y-3 font-sans text-xs tracking-wide text-neutral-400">
              <li>
                <a
                  href="https://arxiv.org/pdf/2606.03504"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen size={12} className="text-amber-500" />
                  <span>BaltiVoice Paper (arXiv)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/datasets/mohdali1/baltivoice-asr"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <Database size={12} className="text-amber-500" />
                  <span>BaltiVoice Speech Corpus</span>
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/mohdali1/whisper-small-balti"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Whisper Balti ASR Model
                </a>
              </li>
              <li className="text-neutral-500 text-[11px] pt-1">
                PyTorch • Whisper Fine-Tuning • Low-Resource NLP
              </li>
            </ul>
          </div>

          {/* Location & Contact details */}
          <div>
            <h6 className="font-mono text-[9px] uppercase tracking-[0.25em] text-amber-500 font-bold mb-6">
              Contact & Location
            </h6>
            <div className="space-y-2.5 text-xs text-neutral-400 leading-relaxed font-light">
              <a href="mailto:aliskdse@gmail.com" className="font-mono font-medium hover:text-amber-400 transition-colors block text-amber-300">
                aliskdse@gmail.com
              </a>
              <a href="https://github.com/mohdali-dev" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors block font-mono">
                github.com/mohdali-dev
              </a>
              <a href="https://huggingface.co/mohdali1" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors block font-mono">
                huggingface.co/mohdali1
              </a>
              <p className="text-neutral-500 pt-2 block font-mono text-[11px]">
                Lahore, Pakistan • Remote Worldwide
              </p>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-900 pt-8 text-[10px] text-neutral-500 uppercase font-mono tracking-[0.2em]">
          <div className="text-center md:text-left">
            © {currentYear} Muhammad Ali. Open Research &amp; Engineering.
          </div>
          <div className="mt-3 md:mt-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-400">Available for Research &amp; Engineering Collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
