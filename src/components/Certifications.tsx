import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  ExternalLink,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  BookOpen,
  CheckCircle2
} from "lucide-react";
import { Certification } from "../types";

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "ibm-genai-eng",
    title: "IBM Generative AI Engineering",
    issuer: "IBM Skills Network",
    issuerBrand: "ibm",
    year: "2025",
    coursesCount: 16,
    description: "Mastered end-to-end GenAI architectures, fine-tuning Transformers, RAG pipelines with LangChain & PyTorch, and prompt engineering.",
    credentialUrl: "https://coursera.org/verify/professional-cert/VVZSXRVMFB6Y",
    category: "genai",
    isFeatured: true,
    skills: ["Transformers", "RAG & LangChain", "PyTorch", "Fine-Tuning", "LLMs", "BERT & GPT"]
  },
  {
    id: "dl-specialization",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI • Andrew Ng",
    issuerBrand: "deeplearning",
    year: "2025",
    coursesCount: 5,
    description: "Mastered neural network architectures, Convolutional Networks (CNNs), LSTMs, Transformers, Dropout, BatchNorm, and Xavier initialization.",
    credentialUrl: "https://coursera.org/verify/specialization/Q9PPFTCXTG7H",
    category: "ai",
    isFeatured: true,
    skills: ["Neural Networks", "CNNs & LSTMs", "Transformers", "Hyperparameter Tuning", "TensorFlow"]
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI | Stanford Online",
    issuerBrand: "stanford",
    year: "2025",
    coursesCount: 3,
    description: "Supervised & unsupervised learning, neural networks, decision trees, recommender systems, and reinforcement learning.",
    credentialUrl: "https://coursera.org/verify/specialization/X2BIWD7ZT2SE",
    category: "ai",
    isFeatured: true,
    skills: ["Supervised Learning", "Unsupervised Learning", "Recommender Systems", "Reinforcement Learning"]
  },
  {
    id: "ibm-dl-pytorch",
    title: "IBM Deep Learning with PyTorch, Keras & TensorFlow",
    issuer: "IBM Skills Network",
    issuerBrand: "ibm",
    year: "2025",
    coursesCount: 5,
    description: "Built, trained, and deployed deep neural networks, CNNs, and Transformer models for NLP and computer vision using PyTorch & TensorFlow 2.",
    credentialUrl: "https://coursera.org/verify/professional-cert/7B98CR9UAFLK",
    category: "ai",
    isFeatured: true,
    skills: ["PyTorch", "TensorFlow 2", "Keras", "CNNs & Vision", "TimeSeries Prediction"]
  },
  {
    id: "genai-llm-aws",
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI + Amazon Web Services",
    issuerBrand: "aws",
    year: "2025",
    description: "Advanced LLM lifecycle, RLHF alignment, PEFT/LoRA fine-tuning, transformer attention mechanisms, and cloud model deployment on AWS.",
    credentialUrl: "https://coursera.org/verify/640NYTB6M8JO",
    category: "genai",
    isFeatured: true,
    skills: ["LLM Architecture", "PEFT & LoRA", "RLHF", "AWS SageMaker", "Prompt Optimization"]
  },
  {
    id: "math-for-ml",
    title: "Mathematics for Machine Learning",
    issuer: "Imperial College London",
    issuerBrand: "imperial",
    year: "2025",
    coursesCount: 3,
    description: "Rigorous mathematical foundation covering Linear Algebra, Multivariate Calculus, and Principal Component Analysis (PCA) optimization.",
    credentialUrl: "https://coursera.org/verify/specialization/HAKKUNHTD1GA",
    category: "ai",
    isFeatured: true,
    skills: ["Linear Algebra", "Multivariate Calculus", "PCA Dimensionality Reduction", "Optimization"]
  },
  // Additional Expandable Certifications
  {
    id: "ibm-data-science",
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM Skills Network",
    issuerBrand: "ibm",
    year: "2025",
    coursesCount: 12,
    description: "Data analysis methodologies, SQL databases, Python modeling, data visualization with Seaborn, and machine learning capstones.",
    credentialUrl: "https://coursera.org/verify/professional-cert/4SLKXEU93PSJ",
    category: "data",
    isFeatured: false,
    skills: ["Python Data Science", "SQL & Databases", "Data Visualization", "Predictive Modeling"]
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google Career Certificates",
    issuerBrand: "google",
    year: "2025",
    coursesCount: 9,
    description: "End-to-end data preparation, cleaning, exploratory analysis, SQL queries, Tableau dashboards, R programming, and case studies.",
    credentialUrl: "https://coursera.org/verify/professional-cert/64KBZO9ESH2H",
    category: "data",
    isFeatured: false,
    skills: ["SQL Data Wrangling", "R Programming", "Tableau Dashboards", "Data Cleaning"]
  },
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google Career Certificates",
    issuerBrand: "google",
    year: "2025",
    coursesCount: 5,
    description: "Hands-on AI workflows, prompt design strategies, productivity optimization with AI tools, and responsible AI implementation.",
    credentialUrl: "https://coursera.org/verify/specialization/CVH5V9Q9K16W",
    category: "genai",
    isFeatured: false,
    skills: ["AI Workflows", "Prompt Design", "Productivity Tools", "Responsible AI"]
  },
  {
    id: "prompt-eng-vanderbilt",
    title: "Prompt Engineering Specialization",
    issuer: "Vanderbilt University",
    issuerBrand: "vanderbilt",
    year: "2025",
    coursesCount: 3,
    description: "Advanced prompt patterns, ChatGPT advanced data analysis, generative AI reasoning frameworks, and trustworthy AI integration.",
    credentialUrl: "https://coursera.org/verify/specialization/42YQY53NY57W",
    category: "genai",
    isFeatured: false,
    skills: ["Prompt Patterns", "LLM Reasoning", "ChatGPT Advanced Analysis", "Trustworthy AI"]
  },
  {
    id: "software-eng-hkust",
    title: "Software Engineering Specialization",
    issuer: "Hong Kong University of Science and Technology",
    issuerBrand: "hkust",
    year: "2025",
    coursesCount: 3,
    description: "UML software modeling, implementation & automated testing, software architecture design patterns, and Agile project management.",
    credentialUrl: "https://coursera.org/verify/specialization/KEGX8BW9LYU8",
    category: "engineering",
    isFeatured: false,
    skills: ["UML Systems Modeling", "Automated Testing", "Software Architecture", "OOP Patterns"]
  },
  {
    id: "google-project-mgmt",
    title: "Google Project Management Professional Certificate",
    issuer: "Google Career Certificates",
    issuerBrand: "google",
    year: "2025",
    coursesCount: 7,
    description: "Agile & Scrum frameworks, project initiation, risk management, documentation, and cross-functional team leadership.",
    credentialUrl: "https://coursera.org/verify/professional-cert/F7GKUUADCZ5W",
    category: "engineering",
    isFeatured: false,
    skills: ["Agile & Scrum", "Project Planning", "Risk Mitigation", "Stakeholder Leadership"]
  }
];

function IssuerBadge({ brand }: { brand: Certification["issuerBrand"] }) {
  switch (brand) {
    case "ibm":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-950/60 border border-blue-800/40 rounded text-blue-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M0 4h24v2H0V4zm0 4h24v2H0V8zm0 4h24v2H0v-2zm0 4h24v2H0v-2zm0 4h24v2H0v-2z" />
          </svg>
          <span>IBM</span>
        </div>
      );
    case "deeplearning":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-rose-950/60 border border-rose-800/40 rounded text-rose-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>DeepLearning.AI</span>
        </div>
      );
    case "stanford":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-red-950/60 border border-red-800/40 rounded text-red-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          <span className="font-serif font-black text-red-400 text-xs">S</span>
          <span>Stanford Online</span>
        </div>
      );
    case "google":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-900 border border-neutral-700/60 rounded text-neutral-200 font-mono text-[10px] uppercase font-bold tracking-wider">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Google</span>
        </div>
      );
    case "aws":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-950/60 border border-amber-800/40 rounded text-amber-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          <span className="font-bold text-amber-400">AWS</span>
          <span>+ DeepLearning</span>
        </div>
      );
    case "imperial":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-950/60 border border-sky-800/40 rounded text-sky-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          <span className="font-serif font-black text-sky-400 text-xs">IC</span>
          <span>Imperial London</span>
        </div>
      );
    case "vanderbilt":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-yellow-950/60 border border-yellow-800/40 rounded text-yellow-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          <span className="font-serif font-black text-yellow-400 text-xs">V</span>
          <span>Vanderbilt</span>
        </div>
      );
    case "hkust":
      return (
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-indigo-950/60 border border-indigo-800/40 rounded text-indigo-300 font-mono text-[10px] uppercase font-bold tracking-wider">
          <span className="font-bold text-indigo-400 text-xs">HK</span>
          <span>HKUST</span>
        </div>
      );
    default:
      return null;
  }
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "genai" | "data" | "engineering">("all");

  const filteredCertifications = CERTIFICATIONS_DATA.filter((cert) => {
    if (activeCategory !== "all" && cert.category !== activeCategory) return false;
    if (!showAll && !cert.isFeatured) return false;
    return true;
  });

  const categories = [
    { id: "all", label: "All Credentials" },
    { id: "genai", label: "Generative AI & LLMs" },
    { id: "ai", label: "Machine & Deep Learning" },
    { id: "data", label: "Data Science" },
    { id: "engineering", label: "Software & PM" }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 18 }
    }
  };

  return (
    <section
      id="certifications"
      className="py-24 md:py-32 bg-black text-neutral-200 relative border-t border-neutral-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-2 block flex items-center gap-2">
              <Award size={14} />
              <span>Verified Credentials</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Certifications & Specializations<span className="text-amber-500">.</span>
            </h2>
          </div>

          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            Rigorous academic specializations and industry-recognized engineering certificates verified by top global institutions and AI research labs.
          </p>
        </motion.div>

        {/* Filter Category Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-8 border-b border-neutral-900"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider whitespace-nowrap rounded-md transition-all ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20"
                  : "bg-neutral-900/60 text-neutral-400 hover:text-white border border-neutral-800/60 hover:bg-neutral-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Certifications Bento Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-neutral-950/80 border border-neutral-800/80 hover:border-amber-500/50 p-6 sm:p-7 rounded-lg flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(245,158,11,0.08)] overflow-hidden"
                data-cursor="verify"
              >
                {/* Gold ambient corner highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-500" />

                <div>
                  {/* Card Header Row */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <IssuerBadge brand={cert.issuerBrand} />

                    {/* Verified Certificate Pill */}
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-400 font-mono text-[10px] font-semibold tracking-wider">
                      <ShieldCheck size={12} className="text-amber-400" />
                      <span>VERIFIED</span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 mb-4">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-700" />
                    <span className="text-amber-500/90 font-medium">{cert.year}</span>
                    {cert.coursesCount && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-neutral-700" />
                        <span className="text-neutral-400 flex items-center gap-1">
                          <BookOpen size={11} className="text-neutral-500" />
                          {cert.coursesCount} Courses
                        </span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-neutral-900/90 text-neutral-400 border border-neutral-800 rounded text-[10px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-neutral-900/80 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                    <CheckCircle2 size={11} className="text-emerald-500" />
                    Coursera Verified
                  </span>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-amber-500 text-neutral-200 hover:text-black border border-neutral-800 hover:border-amber-400 rounded text-xs font-mono font-semibold tracking-wider transition-all duration-300 shadow-md"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Section Button */}
        <div className="mt-14 flex flex-col items-center justify-center space-y-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-semibold text-neutral-200 hover:text-amber-400 transition-all duration-300 shadow-xl"
            data-cursor="view"
          >
            <span>
              {showAll
                ? "Show Top Featured Certifications"
                : `View All Certifications (${CERTIFICATIONS_DATA.length})`}
            </span>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </motion.button>

          <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            {showAll
              ? `Displaying all ${CERTIFICATIONS_DATA.length} verified specializations`
              : `Displaying 6 featured of ${CERTIFICATIONS_DATA.length} verified specializations`}
          </p>
        </div>
      </div>
    </section>
  );
}
