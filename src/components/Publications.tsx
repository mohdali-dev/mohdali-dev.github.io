import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Github,
  ExternalLink,
  Sparkles,
  BookOpen,
  Database,
  Cpu,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  X,
  Share2,
  Copy,
  Check,
  Maximize2
} from "lucide-react";
import { Publication } from "../types";
import PublicationModal from "./PublicationModal";

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: "baltivoice-asr",
    title: "BaltiVoice: A Speech Corpus and Fine-tuned Whisper ASR System for the Balti Language",
    authors: ["Muhammad Ali"],
    status: "Preprint",
    year: "2025",
    researchAreas: [
      "Automatic Speech Recognition (ASR)",
      "Natural Language Processing (NLP)",
      "Deep Learning",
      "Low-Resource Languages",
      "Whisper Fine-Tuning",
      "Speech Corpus"
    ],
    summary:
      "Developed the first public speech corpus and benchmark for the Balti language (ISO 639-3: bft) by creating a 16.8-hour dataset, fine-tuning OpenAI Whisper for speech recognition, significantly improving transcription accuracy from 159.19% down to 26.74% WER, and releasing the dataset, model, code, and live demo for the research community.",
    abstract:
      "We present BaltiVoice, a 16.8-hour read speech corpus for Balti (ISO 639-3: bft), a Tibetic language spoken in Gilgit-Baltistan, Pakistan, with no prior publicly available ASR resources. The corpus contains 10,060 validated utterances in native Nastaliq script, derived from Mozilla Common Voice recordings. Fine-tuning OpenAI Whisper-small yields a Word Error Rate (WER) of 26.74% and a Character Error Rate (CER) of 8.67% on the 538-utterance speaker-disjoint validation set, down from a zero-shot baseline of 159.19% WER and 152.52% CER. A Whisper-base fine-tuned on the same data achieves 44.54% WER and 15.61% CER, confirming that model capacity matters for this low-resource setting. The dataset, fine-tuned model, and a live transcription demo are publicly available on HuggingFace under CC0 license.",
    metrics: [
      {
        label: "Speech Corpus",
        value: "16.8 Hours",
        sublabel: "10,060 Validated Utterances"
      },
      {
        label: "Word Error Rate (WER)",
        value: "26.74%",
        sublabel: "Down from 159.19% Zero-Shot (-83% REL)"
      },
      {
        label: "Character Error Rate",
        value: "8.67%",
        sublabel: "Nastaliq Script Tokenization"
      },
      {
        label: "License & Access",
        value: "CC0 Open Access",
        sublabel: "HuggingFace Public Hub"
      }
    ],
    links: {
      paper: "https://arxiv.org/pdf/2606.03504",
      dataset: "https://huggingface.co/datasets/mohdali1/baltivoice-asr",
      model: "https://huggingface.co/mohdali1/whisper-small-balti",
      github: "https://github.com/mohdali-dev/BaltiVoice-ASR",
      demo: "https://huggingface.co/spaces/mohdali1/baltivoice-demo"
    },
    isFeatured: true
  }
];

export default function Publications() {
  const [selectedPaper, setSelectedPaper] = useState<Publication | null>(null);
  const [copiedCite, setCopiedCite] = useState(false);

  const pub = PUBLICATIONS_DATA[0];

  const citationText = `@article{ali2025baltivoice,
  title={BaltiVoice: A Speech Corpus and Fine-tuned Whisper ASR System for the Balti Language},
  author={Ali, Muhammad},
  journal={arXiv preprint},
  year={2025},
  publisher={HuggingFace Open Research}
}`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCite(true);
    setTimeout(() => setCopiedCite(false), 2000);
  };

  return (
    <section
      id="publications"
      className="py-12 md:py-16 bg-black text-neutral-200 relative border-t border-neutral-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[180px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Compact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-500 font-semibold mb-1 flex items-center gap-1.5">
              <BookOpen size={12} />
              <span>Academic & Open Research</span>
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Research & Publications<span className="text-amber-500">.</span>
            </h2>
          </div>

          <p className="text-neutral-400 text-xs max-w-sm font-light leading-relaxed hidden md:block">
            Peer-reviewed speech datasets and open-source ASR baselines.
          </p>
        </motion.div>

        {/* Compact Featured Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          onClick={() => setSelectedPaper(pub)}
          className="relative bg-neutral-950/90 border border-neutral-800/90 hover:border-amber-500/50 rounded-lg p-4 sm:p-5 shadow-lg hover:shadow-[0_8px_25px_rgba(245,158,11,0.06)] transition-all duration-300 overflow-hidden group cursor-pointer"
          data-cursor="view"
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300" />

          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                <Sparkles size={10} />
                <span>FEATURED</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400 font-mono text-[10px] font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{pub.status}</span>
              </span>
              <span className="font-mono text-[11px] text-neutral-400">
                {pub.year} • {pub.authors.join(", ")}
              </span>
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 rounded font-mono text-[10px] font-bold uppercase tracking-wider transition-colors">
              <Maximize2 size={11} />
              <span>Full Details</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
            {pub.title}
          </h3>

          {/* Compact Summary */}
          <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-3 line-clamp-2">
            {pub.summary}
          </p>

          {/* Inline Metrics & Links Footer */}
          <div className="pt-3 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-3">
            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded font-mono text-[11px] text-amber-400">
                <strong className="text-white font-bold">16.8h</strong> Speech Corpus
              </span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded font-mono text-[11px] text-amber-400">
                <strong className="text-white font-bold">26.74%</strong> WER
              </span>
              <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded font-mono text-[11px] text-amber-400">
                <strong className="text-white font-bold">8.67%</strong> CER
              </span>
            </div>

            {/* Direct Quick Action Links */}
            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {pub.links.paper && (
                <a
                  href={pub.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-black font-mono text-[10px] font-bold uppercase tracking-wider rounded flex items-center gap-1 transition-colors shadow-sm"
                  title="Read Paper PDF on arXiv"
                >
                  <FileText size={12} />
                  <span>Paper PDF</span>
                </a>
              )}
              {pub.links.dataset && (
                <a
                  href={pub.links.dataset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-neutral-900 hover:bg-amber-500 text-neutral-300 hover:text-black border border-neutral-800 rounded transition-colors"
                  title="Dataset on HuggingFace"
                >
                  <Database size={13} />
                </a>
              )}
              {pub.links.model && (
                <a
                  href={pub.links.model}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-neutral-900 hover:bg-amber-500 text-neutral-300 hover:text-black border border-neutral-800 rounded transition-colors"
                  title="Model on HuggingFace"
                >
                  <Cpu size={13} />
                </a>
              )}
              {pub.links.github && (
                <a
                  href={pub.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-neutral-900 hover:bg-amber-500 text-neutral-300 hover:text-black border border-neutral-800 rounded transition-colors"
                  title="GitHub Repository"
                >
                  <Github size={13} />
                </a>
              )}
              {pub.links.demo && (
                <a
                  href={pub.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-neutral-900 hover:bg-amber-500 text-amber-400 hover:text-black border border-neutral-800 rounded transition-colors"
                  title="Live Demo"
                >
                  <Play size={13} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Research Paper Case Study Modal Popup */}
      {selectedPaper && (
        <PublicationModal
          publication={selectedPaper}
          onClose={() => setSelectedPaper(null)}
        />
      )}
    </section>
  );
}
