import { useState, useEffect } from "react";
import { Project, ArchitectureNode } from "../types";
import {
  X,
  Github,
  Check,
  Cpu,
  Database,
  Server,
  Terminal,
  Activity,
  Play,
  Copy,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Code2,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "code" | "benchmarks">("overview");
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(
    project.caseStudy?.architectureNodes[0] || null
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const cs = project.caseStudy;

  // Handle ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Handle data packet flow simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating && cs?.architectureNodes) {
      if (simulationStep < cs.architectureNodes.length) {
        setSelectedNode(cs.architectureNodes[simulationStep]);
        timer = setTimeout(() => {
          setSimulationStep((prev) => prev + 1);
        }, 800);
      } else {
        setIsSimulating(false);
        setSimulationStep(0);
      }
    }
    return () => clearTimeout(timer);
  }, [isSimulating, simulationStep, cs?.architectureNodes]);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(0);
  };

  const handleCopyCode = () => {
    if (cs?.codeSnippet) {
      navigator.clipboard.writeText(cs.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getNodeIcon = (type: ArchitectureNode["type"]) => {
    switch (type) {
      case "client":
        return <Terminal size={16} className="text-amber-400" />;
      case "gateway":
        return <Server size={16} className="text-amber-400" />;
      case "model":
        return <Cpu size={16} className="text-amber-400" />;
      case "database":
      case "storage":
        return <Database size={16} className="text-amber-400" />;
      default:
        return <Activity size={16} className="text-amber-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Main Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[92vh] z-10"
      >
        {/* Modal Top Branding Bar */}
        <div className="px-6 py-4 border-b border-neutral-900 bg-neutral-900/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
              Architectural Case Study • {project.id}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-[10px] font-mono uppercase tracking-wider text-amber-400 transition-colors"
            >
              <Github size={12} />
              <span>Source Repo</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/60 transition-colors"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Title & Tab Header */}
        <div className="p-6 pb-0 border-b border-neutral-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold block mb-1">
                {project.category}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                {project.title}
              </h2>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap gap-2">
              {project.metrics?.map((m, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-mono rounded"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pt-2">
            {[
              { id: "overview", label: "Overview & Specs", icon: FileText },
              { id: "architecture", label: "System Architecture", icon: Layers },
              { id: "code", label: "Code & Innovations", icon: Code2 },
              { id: "benchmarks", label: "Impact & Benchmarks", icon: BarChart3 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors rounded-t-md ${
                    isActive
                      ? "text-amber-400 font-semibold bg-neutral-900 border-t-2 border-amber-500"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/40"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-neutral-950">
          <AnimatePresence mode="wait">
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Hero Preview Image & Summary */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 aspect-[16/9] w-full bg-neutral-900 border border-neutral-800 rounded-md overflow-hidden relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="675"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-neutral-300">
                      <span>{project.subtitle}</span>
                      <span className="text-amber-400">Deployed Production Specs</span>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-5">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                        Executive Summary
                      </h4>
                      <p className="text-neutral-200 text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
                        Technologies Deployed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 bg-neutral-900 text-neutral-300 border border-neutral-800 rounded text-xs font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem vs Solution Grid */}
                {cs && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="p-6 bg-neutral-900/40 border border-neutral-800/80 rounded-lg space-y-3">
                      <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-widest">
                        <Zap size={14} />
                        <span>The Challenge & Bottleneck</span>
                      </div>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                        {cs.problem}
                      </p>
                    </div>

                    <div className="p-6 bg-neutral-900/40 border border-neutral-800/80 rounded-lg space-y-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
                        <ShieldCheck size={14} />
                        <span>Architectural Strategy</span>
                      </div>
                      <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                        {cs.solution}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* TAB 2: SYSTEM ARCHITECTURE */}
            {activeTab === "architecture" && cs && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Pipeline Flow Overview */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 p-4 bg-neutral-900/60 border border-neutral-800 rounded-md">
                  <div>
                    <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest block font-semibold">
                      End-To-End Data Flow Pipeline
                    </span>
                    <p className="text-neutral-300 text-xs font-mono mt-0.5">
                      {cs.architectureOverview}
                    </p>
                  </div>

                  <button
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:bg-neutral-800 text-black disabled:text-neutral-500 font-mono text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-lg shadow-amber-500/10"
                  >
                    <Play size={14} className={isSimulating ? "animate-spin" : ""} />
                    <span>{isSimulating ? "Simulating..." : "Simulate Data Packet"}</span>
                  </button>
                </div>

                {/* Interactive Node Flowchart Visualizer */}
                <div className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Interactive Subsystem Nodes (Click or Simulate to Inspect)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {cs.architectureNodes.map((node, index) => {
                      const isSelected = selectedNode?.id === node.id;
                      const isStepSimulating = isSimulating && simulationStep === index;

                      return (
                        <motion.div
                          key={node.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedNode(node)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all relative overflow-hidden ${
                            isSelected || isStepSimulating
                              ? "bg-neutral-900 border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                              : "bg-neutral-900/30 border-neutral-800 hover:border-neutral-700"
                          }`}
                        >
                          {/* Animated active packet pulse */}
                          {isStepSimulating && (
                            <motion.div
                              layoutId="packet-pulse"
                              className="absolute inset-0 bg-amber-500/10 pointer-events-none"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}

                          <div className="flex justify-between items-start mb-3">
                            <div className="p-2 rounded bg-neutral-950 border border-neutral-800">
                              {getNodeIcon(node.type)}
                            </div>
                            {node.latency && (
                              <span className="font-mono text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                {node.latency}
                              </span>
                            )}
                          </div>

                          <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block mb-1">
                            Node 0{index + 1} • {node.protocol}
                          </span>
                          <h5 className="font-serif font-bold text-white text-base mb-1">
                            {node.label}
                          </h5>
                          <p className="text-neutral-400 text-xs font-mono truncate">
                            {node.role}
                          </p>

                          {/* Connecting arrow for desktop */}
                          {index < cs.architectureNodes.length - 1 && (
                            <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                              <ArrowRight size={14} className="text-amber-500/60" />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Node Details Drawer */}
                {selectedNode && (
                  <motion.div
                    key={selectedNode.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-lg space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded">
                          {getNodeIcon(selectedNode.type)}
                        </div>
                        <div>
                          <h5 className="font-serif text-lg font-bold text-white">
                            {selectedNode.label}
                          </h5>
                          <span className="font-mono text-xs text-amber-400">
                            {selectedNode.role} • {selectedNode.protocol}
                          </span>
                        </div>
                      </div>

                      {selectedNode.latency && (
                        <div className="text-right">
                          <span className="font-mono text-[10px] text-neutral-500 uppercase block">
                            Subsystem SLA
                          </span>
                          <span className="font-mono text-sm font-bold text-amber-400">
                            {selectedNode.latency}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                      {selectedNode.details}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* TAB 3: CODE & INNOVATIONS */}
            {activeTab === "code" && cs && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Key Innovations Bullets */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Core Technical Innovations
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cs.innovations.map((inv, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-2"
                      >
                        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                          <Check size={14} />
                          <span>Innovation 0{idx + 1}</span>
                        </div>
                        <p className="text-neutral-300 text-xs font-light leading-relaxed">
                          {inv}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet Viewer */}
                {cs.codeSnippet && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-xs text-neutral-300">
                        <Terminal size={14} className="text-amber-500" />
                        <span>{cs.codeSnippet.title}</span>
                      </div>

                      <button
                        onClick={handleCopyCode}
                        className="flex items-center gap-1.5 px-3 py-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded font-mono text-[11px] text-neutral-300 hover:text-white transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Copy Snippet</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="bg-neutral-900/90 border border-neutral-800 rounded-lg p-4 font-mono text-xs text-neutral-200 overflow-x-auto leading-relaxed shadow-inner">
                      <pre>
                        <code>{cs.codeSnippet.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* TAB 4: BENCHMARKS & IMPACT */}
            {activeTab === "benchmarks" && cs && (
              <motion.div
                key="benchmarks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Verified Performance Benchmarks & Optimization Differential
                  </h4>
                  <p className="text-neutral-400 text-xs font-light">
                    Direct comparison measuring baseline legacy execution against Ali's custom fine-tuned architecture.
                  </p>
                </div>

                <div className="space-y-6">
                  {cs.benchmarks.map((bm, index) => (
                    <div
                      key={index}
                      className="p-5 bg-neutral-900/40 border border-neutral-800 rounded-lg space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs uppercase tracking-wider text-neutral-200 font-semibold">
                          {bm.label}
                        </span>
                        <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                          {bm.improvement}
                        </span>
                      </div>

                      {/* Visual metric progress bar */}
                      <div className="space-y-1.5">
                        <div className="h-2.5 w-full bg-neutral-900 rounded-full overflow-hidden p-0.5 border border-neutral-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${bm.percentage}%` }}
                            transition={{ duration: 1, delay: index * 0.15 }}
                            className="h-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                          />
                        </div>

                        <div className="flex justify-between font-mono text-[10px] text-neutral-500">
                          <span>Legacy Baseline: {bm.before}</span>
                          <span className="text-amber-400 font-semibold">
                            Optimized Architecture: {bm.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 px-6 border-t border-neutral-900 bg-neutral-900/40 flex justify-between items-center">
          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:block">
            Muhammad Ali • Production Codebase Verification
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors"
          >
            <Github size={14} />
            <span>Open Repository</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
