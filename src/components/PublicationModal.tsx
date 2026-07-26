import { useState, useEffect } from "react";
import { Publication } from "../types";
import {
  X,
  Github,
  Check,
  Cpu,
  Database,
  BookOpen,
  FileText,
  Play,
  Copy,
  BarChart3,
  ExternalLink,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  Share2,
  Mic,
  Activity,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PublicationModalProps {
  publication: Publication;
  onClose: () => void;
}

export default function PublicationModal({ publication: pub, onClose }: PublicationModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "corpus" | "results" | "citation">("overview");
  const [copiedCite, setCopiedCite] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const citationText = `@article{ali2025baltivoice,
  title={BaltiVoice: A Speech Corpus and Fine-tuned Whisper ASR System for the Balti Language},
  author={Ali, Muhammad},
  journal={arXiv preprint arXiv:2606.03504},
  year={2025},
  url={https://arxiv.org/pdf/2606.03504}
}`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCite(true);
    setTimeout(() => setCopiedCite(false), 2000);
  };

  const tabs = [
    { id: "overview", label: "Overview & Abstract", icon: FileText },
    { id: "corpus", label: "Corpus & Pipeline", icon: Database },
    { id: "results", label: "Results & Benchmarks", icon: BarChart3 },
    { id: "citation", label: "BibTeX & Artifacts", icon: Copy }
  ] as const;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 text-neutral-200"
        >
          {/* Top Decorative Amber Line */}
          <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200" />

          {/* Modal Header */}
          <div className="p-6 sm:p-8 border-b border-neutral-900 bg-neutral-950/90 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 font-mono text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={12} />
                <span>Featured Research</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-mono text-[10px] font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{pub.status}</span>
              </span>
              <span className="font-mono text-xs text-neutral-500">Released {pub.year}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3 leading-snug pr-8">
              {pub.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400">
              <span className="text-amber-400 font-semibold">First Author:</span>
              <span className="text-white font-medium bg-neutral-900 px-2.5 py-0.5 rounded border border-neutral-800">
                {pub.authors.join(", ")}
              </span>
              <span className="text-neutral-600">•</span>
              <span>Independent ASR & NLP Researcher</span>
            </div>
          </div>

          {/* Tabs Navigation Bar */}
          <div className="flex items-center gap-1 p-2 bg-neutral-900/60 border-b border-neutral-800/80 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-amber-500 text-black font-bold shadow-md shadow-amber-500/20"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 bg-neutral-950">
            {/* TAB 1: OVERVIEW & ABSTRACT */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Executive Summary Box */}
                <div className="p-5 bg-neutral-900/70 border border-neutral-800 rounded-xl space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold flex items-center gap-2">
                    <Sparkles size={14} />
                    <span>Executive Summary & Impact</span>
                  </h4>
                  <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed">
                    {pub.summary}
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {pub.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-neutral-900/50 border border-neutral-800/80 rounded-lg space-y-1"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block">
                        {m.label}
                      </span>
                      <span className="font-serif text-2xl font-extrabold text-amber-400 block">
                        {m.value}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400 block truncate">
                        {m.sublabel}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Full Abstract Section */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
                    <FileText size={14} className="text-amber-400" />
                    <span>Paper Abstract</span>
                  </h4>
                  <div className="p-5 bg-neutral-900/40 border border-neutral-800/80 rounded-xl text-neutral-300 text-sm leading-relaxed font-light space-y-3">
                    <p>{pub.abstract}</p>
                  </div>
                </div>

                {/* Research Domains / Tags */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
                    Research Specialization & Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.researchAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-neutral-900 text-amber-300/90 border border-neutral-800 rounded-md font-mono text-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: CORPUS & PIPELINE */}
            {activeTab === "corpus" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Corpus Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
                      <Mic size={16} />
                      <span>BaltiVoice Speech Corpus</span>
                    </div>
                    <ul className="space-y-2 font-mono text-xs text-neutral-300">
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Language:</span>
                        <span className="text-white font-bold">Balti (ISO 639-3: bft)</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Script:</span>
                        <span className="text-amber-300">Nastaliq (Arabic-based)</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Total Duration:</span>
                        <span className="text-white">16.8 Hours</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Utterances:</span>
                        <span className="text-white">10,060 Validated Clips</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Speakers:</span>
                        <span className="text-white">136 Unique Voices</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Split Ratio:</span>
                        <span className="text-emerald-400">90% Train / 10% Speaker-Disjoint Dev</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
                      <Cpu size={16} />
                      <span>Training Setup & Hyperparameters</span>
                    </div>
                    <ul className="space-y-2 font-mono text-xs text-neutral-300">
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Base Architecture:</span>
                        <span className="text-white font-bold">OpenAI Whisper-small (244M params)</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Tokenizer Init:</span>
                        <span className="text-amber-300">Urdu Script Mapping (bft ↔ ur)</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Hardware Compute:</span>
                        <span className="text-white">NVIDIA Tesla T4 GPU (fp16)</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Optimizer & LR:</span>
                        <span className="text-white">AdamW (1e-5 learning rate)</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Effective Batch Size:</span>
                        <span className="text-white">16 (8 x 2 accumulation)</span>
                      </li>
                      <li className="flex justify-between border-b border-neutral-800/60 pb-1.5">
                        <span className="text-neutral-400">Training Time:</span>
                        <span className="text-emerald-400">1h 54m (1,000 steps)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Preprocessing Flow */}
                <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-xl space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-bold flex items-center gap-2">
                    <Layers size={14} className="text-amber-400" />
                    <span>Data Preprocessing & Tokenization Pipeline</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg space-y-1">
                      <span className="font-mono text-[10px] text-amber-500 font-bold block">STEP 01</span>
                      <h5 className="font-bold text-xs text-white">Audio Conversion</h5>
                      <p className="text-[11px] text-neutral-400 leading-snug font-light">
                        Converted Mozilla Common Voice MP3 audio to 16 kHz mono WAV spectrogram filterbanks using pydub.
                      </p>
                    </div>
                    <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg space-y-1">
                      <span className="font-mono text-[10px] text-amber-500 font-bold block">STEP 02</span>
                      <h5 className="font-bold text-xs text-white">Filtering & Splitting</h5>
                      <p className="text-[11px] text-neutral-400 leading-snug font-light">
                        Length filtering (&gt;2 words) and speaker-disjoint GroupShuffleSplit preventing acoustic data leakage.
                      </p>
                    </div>
                    <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg space-y-1">
                      <span className="font-mono text-[10px] text-amber-500 font-bold block">STEP 03</span>
                      <h5 className="font-bold text-xs text-white">Transfer Tokenization</h5>
                      <p className="text-[11px] text-neutral-400 leading-snug font-light">
                        Initialized Whisper Tokenizer with Urdu script tokens to handle Balti Nastaliq character sets.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: RESULTS & BENCHMARKS */}
            {activeTab === "results" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Benchmark Comparison Table */}
                <div className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                    <BarChart3 size={15} />
                    <span>ASR Model Error Rate Comparison</span>
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                      <thead>
                        <tr className="border-b border-neutral-800 text-neutral-400 uppercase text-[10px] tracking-wider">
                          <th className="py-2 px-3">Model Architecture</th>
                          <th className="py-2 px-3">Parameters</th>
                          <th className="py-2 px-3">WER (%)</th>
                          <th className="py-2 px-3">CER (%)</th>
                          <th className="py-2 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/60">
                        <tr className="hover:bg-neutral-900/40 text-neutral-400">
                          <td className="py-3 px-3 font-medium">Whisper-small (Zero-shot)</td>
                          <td className="py-3 px-3">244M</td>
                          <td className="py-3 px-3 text-red-400 font-bold">159.19%</td>
                          <td className="py-3 px-3 text-red-400">152.52%</td>
                          <td className="py-3 px-3 text-neutral-500">Hallucinates</td>
                        </tr>
                        <tr className="hover:bg-neutral-900/40 text-neutral-300">
                          <td className="py-3 px-3 font-medium">Whisper-base (Fine-tuned)</td>
                          <td className="py-3 px-3">74M</td>
                          <td className="py-3 px-3 text-amber-400 font-bold">44.54%</td>
                          <td className="py-3 px-3 text-amber-400">15.61%</td>
                          <td className="py-3 px-3 text-amber-300">Baseline</td>
                        </tr>
                        <tr className="bg-amber-500/10 border-l-2 border-amber-500 text-white font-bold">
                          <td className="py-3 px-3 text-amber-300">Whisper-small (Fine-tuned) ★</td>
                          <td className="py-3 px-3">244M</td>
                          <td className="py-3 px-3 text-emerald-400 text-sm">26.74%</td>
                          <td className="py-3 px-3 text-emerald-400 text-sm">8.67%</td>
                          <td className="py-3 px-3 text-emerald-400">SOTA Benchmark</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Accuracy Improvement Visual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-xl space-y-2">
                    <span className="font-mono text-[10px] uppercase text-neutral-400 block">Word Error Rate (WER) Reduction</span>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-3xl font-extrabold text-emerald-400">26.74%</span>
                      <span className="font-mono text-xs text-neutral-400 line-through">159.19%</span>
                      <span className="font-mono text-xs text-emerald-400 font-bold">(-83% relative reduction)</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-emerald-500 h-full w-[83%]" />
                    </div>
                  </div>

                  <div className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-xl space-y-2">
                    <span className="font-mono text-[10px] uppercase text-neutral-400 block">Character Error Rate (CER) Reduction</span>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-3xl font-extrabold text-emerald-400">8.67%</span>
                      <span className="font-mono text-xs text-neutral-400 line-through">152.52%</span>
                      <span className="font-mono text-xs text-emerald-400 font-bold">(-94% relative reduction)</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-amber-400 h-full w-[94%]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: CITATION & ARTIFACTS */}
            {activeTab === "citation" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* BibTeX Box */}
                <div className="p-5 bg-neutral-900/80 border border-neutral-800 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                      <Copy size={14} />
                      <span>BibTeX Citation</span>
                    </h4>

                    <button
                      onClick={handleCopyCitation}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold rounded transition-colors shadow"
                    >
                      {copiedCite ? (
                        <>
                          <Check size={13} />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Citation</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 bg-black border border-neutral-800 rounded-lg font-mono text-xs text-amber-200/90 overflow-x-auto whitespace-pre-wrap">
                    {citationText}
                  </pre>
                </div>

                {/* Direct Links to Artifacts */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
                    Open Research Resources & Repositories
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pub.links.paper && (
                      <a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 rounded-lg flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <FileText size={18} className="text-amber-400" />
                          <div>
                            <span className="font-bold text-xs text-white block">Read arXiv Paper (PDF)</span>
                            <span className="font-mono text-[10px] text-amber-300">arXiv:2606.03504</span>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    )}

                    {pub.links.dataset && (
                      <a
                        href={pub.links.dataset}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 rounded-lg flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <Database size={18} className="text-amber-400" />
                          <div>
                            <span className="font-bold text-xs text-white block">BaltiVoice Speech Corpus</span>
                            <span className="font-mono text-[10px] text-neutral-400">HuggingFace Datasets</span>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-neutral-500 group-hover:text-amber-400 transition-colors" />
                      </a>
                    )}

                    {pub.links.model && (
                      <a
                        href={pub.links.model}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 rounded-lg flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <Cpu size={18} className="text-amber-400" />
                          <div>
                            <span className="font-bold text-xs text-white block">Whisper-small-balti Model</span>
                            <span className="font-mono text-[10px] text-neutral-400">HuggingFace Models Hub</span>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-neutral-500 group-hover:text-amber-400 transition-colors" />
                      </a>
                    )}

                    {pub.links.github && (
                      <a
                        href={pub.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 rounded-lg flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <Github size={18} className="text-white" />
                          <div>
                            <span className="font-bold text-xs text-white block">BaltiVoice-ASR Training Code</span>
                            <span className="font-mono text-[10px] text-neutral-400">GitHub Repository</span>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-neutral-500 group-hover:text-amber-400 transition-colors" />
                      </a>
                    )}

                    {pub.links.demo && (
                      <a
                        href={pub.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 rounded-lg flex items-center justify-between group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <Play size={18} className="text-amber-400" />
                          <div>
                            <span className="font-bold text-xs text-white block">Live Gradio Speech Demo</span>
                            <span className="font-mono text-[10px] text-neutral-400">HuggingFace Spaces</span>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-neutral-500 group-hover:text-amber-400 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {pub.links.paper && (
                <a
                  href={pub.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-md"
                >
                  <FileText size={13} />
                  <span>Paper PDF</span>
                </a>
              )}
              {pub.links.dataset && (
                <a
                  href={pub.links.dataset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-mono text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  <Database size={13} className="text-amber-400" />
                  <span>Dataset</span>
                </a>
              )}
              {pub.links.model && (
                <a
                  href={pub.links.model}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-mono text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  <Cpu size={13} className="text-amber-400" />
                  <span>Model</span>
                </a>
              )}
              {pub.links.demo && (
                <a
                  href={pub.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  <Play size={13} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 font-mono text-xs uppercase tracking-wider font-semibold text-neutral-300 rounded transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
