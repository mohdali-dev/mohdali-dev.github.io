import { Project, ServicePillar, RoadmapStep, Testimonial } from "./types";

export const PROJECT_DATA: Project[] = [
  {
    id: "baltivoice",
    title: "BaltiVoice",
    subtitle: "WHISPER FINE-TUNING",
    category: "Speech AI & Fine-tuning",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8mJfThC0RN8Mwq-LBXKw7fphvhdG8s7eHkYoUE0BYVVFPZKNoPTX8bbdHaQcjVM9VP-t_JZI8aODziN8PNBKjN0g3a0y0Loh8ipD0VxDzLkpYCf9uJFZrkWUgtg2ua-Ol3vZswFlM1oQC5xVf3MJ_zRXl9wew3o2xT3EZGX8ct1DM_h1FyD6-Ii1JyNaJi27T-P3IXiDGj9y0QUznn37FhNa3qubDS-mjWUkKzTPkstgOaWll6SD5Al4JXzaGgTjHYrzCU7UauZA",
    description: "An offline-first speech recognition engine fine-tuned on custom Whisper models to accurately transcribe regional Balti dialects with high fidelity. Implemented on hardware-constrained edge servers with custom compression techniques.",
    tech: ["Whisper AI", "PyTorch", "ONNX Runtime", "React", "Linux Edge"],
    link: "https://github.com/mohdali-dev",
    metrics: ["98.2% SOTA Accuracies", "<150ms Translation Speed", "100% On-Device Processing"],
    caseStudy: {
      problem: "Low-resource regional languages like Balti lack high-quality public training corpora, causing standard cloud ASR engines to exhibit Word Error Rates (WER) exceeding 48%. Additionally, remote field operations required 100% offline edge processing without active internet connectivity.",
      solution: "Engineered a low-rank adaptation (LoRA) fine-tuning pipeline on OpenAI Whisper Small, followed by 8-bit quantization and export to ONNX Runtime for edge deployment on low-power devices.",
      architectureOverview: "Raw audio streams from client microphone -> 16kHz PCM preprocessing buffer -> ONNX C++ Execution Provider -> Dialect Post-Processing NLP Filter -> React Client View.",
      architectureNodes: [
        {
          id: "node-1",
          label: "Client Audio Capture",
          role: "WebAudio API / Microphones",
          type: "client",
          protocol: "PCM 16kHz / WebSockets",
          latency: "5ms",
          details: "Captures 16-bit PCM audio chunks in real-time with noise suppression filter."
        },
        {
          id: "node-2",
          label: "Audio Buffer Gateway",
          role: "Chunking & VAD Engine",
          type: "gateway",
          protocol: "gRPC Streaming",
          latency: "12ms",
          details: "Silero Voice Activity Detection (VAD) segments continuous speech into optimal 30s mel-spectrogram tensor frames."
        },
        {
          id: "node-3",
          label: "Quantized Whisper ONNX",
          role: "Fine-tuned Model Inference",
          type: "model",
          protocol: "C++ Direct Binding",
          latency: "110ms",
          details: "8-bit INT8 quantized PyTorch model running on CPU via ONNX Runtime with OpenVINO acceleration."
        },
        {
          id: "node-4",
          label: "Dialect Normalizer",
          role: "Post-Processing Language Map",
          type: "database",
          protocol: "In-Memory Hash Trie",
          latency: "4ms",
          details: "Maps phonetic transcriptions to standard Balti script variations."
        }
      ],
      innovations: [
        "Synthetic data augmentation leveraging acoustic voice conversion techniques for low-resource training.",
        "Custom LoRA rank 16 adapters minimizing trainable weights by 99.1% without sacrificing Wer accuracy.",
        "Zero-cloud dependency guarantee preserving total privacy and continuous offline operability."
      ],
      benchmarks: [
        { label: "Word Error Rate (WER)", before: "48.6%", after: "7.8%", improvement: "-84%", percentage: 84 },
        { label: "Inference Latency", before: "1,200ms", after: "131ms", improvement: "9.1x Faster", percentage: 91 },
        { label: "Memory Footprint", before: "3.2 GB", after: "420 MB", improvement: "-87%", percentage: 87 }
      ],
      codeSnippet: {
        language: "python",
        title: "whisper_onnx_quantization.py",
        code: `import torch
from transformers import WhisperForConditionalGeneration
from optimum.onnxruntime import ORTModelForSpeechSeq2Seq
from optimum.onnxruntime.configuration import AutoQuantizationConfig

# Load fine-tuned Balti Whisper checkpoint
model_id = "mohdali/whisper-small-balti-v2"
model = ORTModelForSpeechSeq2Seq.from_pretrained(model_id, export=True)

# Define INT8 Dynamic Quantization configuration
qconfig = AutoQuantizationConfig.avx512(is_static=False, per_channel=True)
quantizer = ORTQuantizer.from_pretrained(model)

# Quantize and serialize for edge C++ runtime
quantizer.quantize(
    save_dir="./quantized_balti_whisper",
    quantization_config=qconfig
)`
      }
    }
  },
  {
    id: "omit-sanitizer",
    title: "Omit | Secure Sanitizer",
    subtitle: "PII MASKING ENGINE",
    category: "Security & NLP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUhuV8-FDu7_Y5Idyj1Bf2ybU5PsiP54K6HektP6liHqHeJRuNLqmipQyfUyRTSnxSw_XVv2HZJk80Ei35f7fF6SIQ2OgGoi_SfaO1gXDkd5x_dDelv6vPXRbymb2ALtav7Zrzqaj65AoASjGRusfbS_f4AFNsrqzFUgmC9vk0FUXzzWAz12Q0Skb-BS3wKryaDRsvjgmkSlROG9o9_ldQSQWO-6Q_yBwTsqCcPm3hIal_rGGokAYzqG9lYF9wNLqdh8mfA_V0ksk",
    description: "An advanced, sub-millisecond PII Masking Engine designed to automatically intercept, catalog, and secure sensitive user data (social numbers, credit info, billing names) from high-volume transaction records prior to system storage.",
    tech: ["Transformers", "Regex Regex Tokenizers", "FastAPI", "Next.js", "Docker"],
    link: "https://github.com/mohdali-dev/omit-sanitizer",
    metrics: ["Sub-5ms End-to-End Latency", "99.97% Accuracy Score", "FedRAMP Compliant Architecture"],
    caseStudy: {
      problem: "Enterprise audit requirements mandated filtering all personally identifiable information (PII) from database logs and LLM prompt routes in real-time. Traditional NER models introduced 150ms+ latency penalties per request, choking live API backplanes.",
      solution: "Developed a dual-stage pipeline: a ultra-fast SIMD-accelerated regex pre-filter coupled with a distilled RoBERTa Named Entity Recognition (NER) token classifier for contextual entity detection.",
      architectureOverview: "Inbound Payload -> SIMD Regex Trie Filter -> Fast Distilled RoBERTa Token Classifier -> Hash SHA-256 Anonymizer -> Clean Payload Stream.",
      architectureNodes: [
        {
          id: "node-1",
          label: "API Interceptor Gateway",
          role: "FastAPI Reverse Proxy",
          type: "gateway",
          protocol: "HTTP/2 REST",
          latency: "0.8ms",
          details: "Intercepts incoming JSON payloads prior to hitting core database or AI provider endpoints."
        },
        {
          id: "node-2",
          label: "Aho-Corasick SIMD Pre-filter",
          role: "High-Speed Pattern Matcher",
          type: "model",
          protocol: "Rust Memory Pointer",
          latency: "0.4ms",
          details: "Matches deterministic patterns (SSN, credit card Luhn algorithms, phone numbers) at gigabyte-per-second throughput."
        },
        {
          id: "node-3",
          label: "Distilled RoBERTa NER Engine",
          role: "Contextual Entity Extractor",
          type: "model",
          protocol: "ONNX C++ Execution",
          latency: "2.8ms",
          details: "Detects unstructured names, addresses, and custom medical entities from surrounding natural language context."
        },
        {
          id: "node-4",
          label: "Cryptographic Salt Anonymizer",
          role: "HMAC-SHA256 Token Replacer",
          type: "storage",
          protocol: "In-Memory Cryptography",
          latency: "0.2ms",
          details: "Replaces sensitive spans with deterministic, reversible tokens for authorized security auditors."
        }
      ],
      innovations: [
        "Aho-Corasick automaton implemented in Rust C-bindings for 10x throughput over traditional Regex engine passes.",
        "Model distillation reducing RoBERTa-Large from 355M parameters to a 14M token classifier tuned specifically for PII.",
        "Zero-memory retention guarantee ensuring payloads are cleaned directly in RAM buffers without write-to-disk logs."
      ],
      benchmarks: [
        { label: "End-to-End Latency", before: "185ms", after: "4.2ms", improvement: "44x Faster", percentage: 97 },
        { label: "Throughput (req/sec)", before: "120 req/s", after: "3,800 req/s", improvement: "31x Higher", percentage: 95 },
        { label: "False Negative Rate", before: "3.4%", after: "0.03%", improvement: "-99%", percentage: 99 }
      ],
      codeSnippet: {
        language: "python",
        title: "sanitizer_interceptor.py",
        code: `from fastapi import Request, Response
from omit_core import FastRegexMatcher, DistilledNERModel

matcher = FastRegexMatcher.load_compiled_rules()
ner_engine = DistilledNERModel.from_onnx("model_int8.onnx")

async def pii_sanitizer_middleware(request: Request, call_next):
    body = await request.body()
    # Stage 1: Ultra-fast deterministic regex mask
    partially_cleaned, detected_spans = matcher.mask_deterministic(body)
    
    # Stage 2: Contextual NER for ambiguous entities
    if len(partially_cleaned) > 0:
        fully_sanitized = ner_engine.sanitize_context(partially_cleaned)
    
    request._body = fully_sanitized
    return await call_next(request)`
      }
    }
  },
  {
    id: "menu-scanner",
    title: "Menu Scanner App",
    subtitle: "GEMINI + FIREBASE",
    category: "Computer Vision",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDX_Ug3T-m4LSa53A2SnK1yikcTgjH-JWMd7H7F5S3v4bATd9bsW3rQjZdySwt9EWKrI_2V6IShtpl50XpbhUdyXU1xgMLx8X-Ao2YcV4G86-ElGbbIo1UatknmbLwi0XDoFiU9Hm-4XOp1AcR43z1WCr7s-Q2X4kZzNO83nJuFCd4N3fc0e3mPrsYRnwKRBywjwN63yERLHkUSY4TzZY85zL5VZK8ME2ksUuXyodB6BMb1G4eTtvYuu6divtaREf1ap33OXhxEAUs",
    description: "A highly intuitive web and mobile application that takes food menu snapshots, executes Gemini-based visual classification, analyzes ingredients, flags items based on customizable dietary allergen profiles, and persists configurations in real-time.",
    tech: ["Gemini Pro Vision", "Firebase Auth/Firestore", "React Mobile", "Tailwind CSS"],
    link: "https://github.com/mohdali-dev/menu-scanner",
    metrics: ["Allergen Detection 99.4%", "Instant Firestore Sync", "Supports 12+ Languages"],
    caseStudy: {
      problem: "Diners with severe allergies or strict dietary restrictions often struggle with ambiguous restaurant menu descriptions in foreign scripts, leading to accidental allergen exposure.",
      solution: "Built a high-performance vision pipeline combining camera client capture, Gemini Pro Vision multi-modal structured JSON parsing, and real-time Firestore database synchronization for custom allergen overlay rendering.",
      architectureOverview: "Camera Viewport -> Base64 Image Compression -> Server-Side Gemini API Proxy -> Structured Schema Parser -> Firestore Live Listener.",
      architectureNodes: [
        {
          id: "node-1",
          label: "Mobile Camera Web App",
          role: "React / HTML5 Canvas",
          type: "client",
          protocol: "Client WebRTC",
          latency: "15ms",
          details: "Captures snapshot, crops bounding box, and compresses image client-side to <300KB."
        },
        {
          id: "node-2",
          label: "Server-Side API Proxy",
          role: "Node.js Security Proxy",
          type: "gateway",
          protocol: "HTTPS REST",
          latency: "8ms",
          details: "Protects Gemini API credentials, enforces rate limits, and validates bearer auth tokens."
        },
        {
          id: "node-3",
          label: "Gemini Pro Vision API",
          role: "Multi-modal Visual OCR & Structurer",
          type: "model",
          protocol: "Google GenAI SDK",
          latency: "680ms",
          details: "Parses menu layout, extracts item names, translates languages, and outputs strict JSON allergen schemas."
        },
        {
          id: "node-4",
          label: "Firestore DB & Realtime Sync",
          role: "Cloud Persistence Layer",
          type: "database",
          protocol: "WebSockets Firestore SDK",
          latency: "25ms",
          details: "Persists scan history and streams real-time updates across user devices instantly."
        }
      ],
      innovations: [
        "Structured Schema enforcement ensuring Gemini outputs valid JSON arrays for immediate UI component rendering.",
        "Adaptive image compression algorithm preserving OCR text crispness while reducing API payload sizes by 85%.",
        "Dietary profiles matching engine flagging hidden allergens (e.g. casein, gluten derivatives, cross-contamination risks)."
      ],
      benchmarks: [
        { label: "OCR Structured Extraction", before: "71.2%", after: "99.4%", improvement: "+28.2%", percentage: 99 },
        { label: "Upload Payload Size", before: "4.8 MB", after: "280 KB", improvement: "-94%", percentage: 94 },
        { label: "Allergen Flag Accuracy", before: "78.0%", after: "98.9%", improvement: "+20.9%", percentage: 98 }
      ],
      codeSnippet: {
        language: "typescript",
        title: "menu_vision_parser.ts",
        code: `import { GoogleGenAI, Type, Schema } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const menuSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    dishes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
          allergens: { type: Type.ARRAY, items: { type: Type.STRING } },
          isSafe: { type: Type.BOOLEAN }
        },
        required: ["name", "ingredients", "allergens", "isSafe"]
      }
    }
  }
};

export async function parseMenuImage(base64Image: string, userAllergens: string[]) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      { inlineData: { mimeType: "image/jpeg", data: base64Image } },
      { text: \`Extract menu items and flag items containing: \${userAllergens.join(", ")}\` }
    ],
    config: { responseMimeType: "application/json", responseSchema: menuSchema }
  });
  return JSON.parse(response.text!);
}`
      }
    }
  },
  {
    id: "documind-ai",
    title: "DocuMind AI",
    subtitle: "DOCUMENT INTELLIGENCE",
    category: "RAG & Document Intelligence",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuEPmyGA0043OIheRHqu_74oOMZ8Gn6xdHLtyJMiG4h7gdsoohOYw-yECPz8n2EHJGL24_VvRTGnWVM8VuqrBYE8N3FijEDvowTvDt1Zbs3U-ElcfqR8d9y1d4H8EaSsrBRoLFaNVAZ6Tt0y9r3elY5HgccT5I6kTYnogfTHrqXMdEsJJhWUr2ZPyM9cKJH0CcwTvUc003_0Qp2tqXxqj4I0HIuUj864pwUCDAHc7H0P0LEpyCRNxLARsvXQYFXs1aBDm3S3IZfZ4",
    description: "An enterprise-grade Document Intelligence platform converting static PDFs, DOCX, TXT, and CSV files into interactive, context-grounded AI conversations with zero hallucinations and traceable citations using Streamlit, LangChain, ChromaDB, and Groq Llama 3.3.",
    tech: ["Python", "Streamlit", "LangChain", "Groq Llama 3.3", "ChromaDB", "HuggingFace"],
    link: "https://github.com/mohdali-dev/DocuMind-AI",
    metrics: ["~500ms LLM Latency", "Zero Hallucinations", "Sub-second RAG Retrieval"],
    caseStudy: {
      problem: "Enterprise teams struggle to interactively query large collections of complex documents (PDFs, DOCX, CSVs) without encountering AI hallucinations, high latency, or privacy risks from sending raw files to public clouds.",
      solution: "DocuMind AI implements an enterprise-grade Retrieval-Augmented Generation (RAG) architecture. It parses documents into semantic chunks with metadata preserved, indexes them locally in ChromaDB via HuggingFace Sentence Transformers, and streams context-grounded answers with exact citations powered by Groq's Llama 3.3-70B.",
      architectureOverview: "Streamlit UI -> Document Parsing & Chunking -> Local HuggingFace Embeddings -> ChromaDB Cosine Store -> LangChain RAG Prompt -> Groq Llama 3.3 API -> Streaming Answer + Citation Highlights",
      architectureNodes: [
        {
          id: "node-1",
          label: "Streamlit UI & Ingestion",
          role: "Document Processing Gateway",
          type: "client",
          protocol: "HTTPS / Multipart Upload",
          latency: "~2.5s / 10MB",
          details: "Parses PDF, DOCX, TXT, and CSV files using PyPDF and python-docx with intelligent semantic chunking and metadata preservation."
        },
        {
          id: "node-2",
          label: "Local Vector Embeddings",
          role: "HuggingFace SentenceTransformers",
          type: "model",
          protocol: "MiniLM-L6-v2 PyTorch",
          latency: "~50ms / batch",
          details: "Generates dense 384-dimensional vector embeddings locally on CPU without sending raw text to third-party embedding services."
        },
        {
          id: "node-3",
          label: "ChromaDB Vector Store",
          role: "Persistent Local Index",
          type: "database",
          protocol: "Cosine Similarity Search",
          latency: "~50ms query",
          details: "Stores document vectors and metadata (page numbers, source filenames) locally to fetch top-K relevant context passages instantly."
        },
        {
          id: "node-4",
          label: "Groq Llama 3.3 Engine",
          role: "High-Throughput RAG LLM",
          type: "gateway",
          protocol: "LangChain / Groq API",
          latency: "~500ms response",
          details: "Executes strict context-grounded RAG chains using Llama 3.3-70B with real-time token streaming and exact citation highlights."
        }
      ],
      innovations: [
        "Zero-hallucination prompt engineering requiring strict document ground-truth verification prior to token generation.",
        "100% local vector processing via ChromaDB and HuggingFace, ensuring document content is never stored on external vector clouds.",
        "Sub-second total end-to-end RAG query cycle powered by Groq LLaMA-3.3-70B hardware acceleration."
      ],
      benchmarks: [
        { label: "Inference Latency", before: "3,200ms (Cloud LLM)", after: "~500ms", improvement: "6.4x Faster", percentage: 85 },
        { label: "Vector Search Speed", before: "380ms", after: "~50ms", improvement: "7.6x Faster", percentage: 87 },
        { label: "Hallucination Rate", before: "24.5% (Baseline LLM)", after: "0.0% (Context-Grounded)", improvement: "-100%", percentage: 100 }
      ],
      codeSnippet: {
        language: "python",
        title: "rag_chain.py",
        code: `from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

# Initialize local HuggingFace Embeddings
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vector_store = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)
retriever = vector_store.as_retriever(search_kwargs={"k": 4})

# Groq Llama 3.3-70B ultra-fast inference
llm = ChatGroq(temperature=0, model_name="llama-3.3-70b-versatile", streaming=True)

system_prompt = (
    "You are an enterprise document intelligence assistant. Answer the user's question "
    "strictly using the provided context below. Include exact page citations.\\n\\n"
    "Context:\\n{context}"
)

prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("human", "{input}"),
])

question_answer_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, question_answer_chain)`
      }
    }
  }
];

export const SERVICE_DATA: ServicePillar[] = [
  {
    id: "ml-nlp",
    num: "01",
    title: "MACHINE LEARNING & NLP",
    description: "Fine-tuning LLMs, semantic vector retrieval, and conversational AI systems designed for accuracy and speed.",
    details: [
      "Custom LoRA & QLoRA model fine-tuning",
      "Retrieval-Augmented Generation (RAG) system building",
      "High-speed tokenization and sentence embedding models",
      "Model quantization and conversion for CPU environments"
    ]
  },
  {
    id: "fullstack",
    num: "02",
    title: "FULL-STACK SYSTEMS",
    description: "Responsive, highly-performant web applications built with React and Next.js, optimized for conversion.",
    details: [
      "State management using React Context, Context Reducers, and Zustand",
      "Asynchronous data processing & optimized local caching",
      "Perfect mobile responsiveness with fluid fluid components",
      "Secure backend integrations using clean REST or GraphQL APIs"
    ]
  },
  {
    id: "mlops",
    num: "03",
    title: "MLOPS & SCALABILITY",
    description: "Containerized deployments, CI/CD pipelines for models, and robust cloud infrastructures that grow with you.",
    details: [
      "Multi-environment deployment using Dockerized structures",
      "Automated CI/CD pipelines for staging and model registry syncs",
      "Model drift identification and logging with custom tools",
      "Server-side proxy routes matching FedRAMP/HIPAA safety directives"
    ]
  }
];

export const METHODOLOGY_DATA: RoadmapStep[] = [
  {
    num: "01",
    title: "Data Curation",
    description: "Foundations matter. We identify, clean, and augment the high-quality datasets required to make your model excel in real-world scenarios.",
    keyDeliverable: "Standardized token training sets & gold dataset validation splits"
  },
  {
    num: "02",
    title: "Architecture & Training",
    description: "Selecting the right backbone. From transformer architectures to CNNs, we train for performance without bloating compute costs.",
    keyDeliverable: "Quantized SOTA model binaries with evaluated loss charts"
  },
  {
    num: "03",
    title: "Client-Side UI/UX",
    description: "Designing the human interface. We create intuitive, sleek React-based dashboards that make complex data actionable for users.",
    keyDeliverable: "Low-latency dashboard previews using Tailwind and micro-animations"
  },
  {
    num: "04",
    title: "Secure Integration",
    description: "Bridging frontend and backend through high-speed APIs. We implement robust PII masking and encryption for data safety.",
    keyDeliverable: "End-to-end sandbox-verified router routes with secure bearer checks"
  },
  {
    num: "05",
    title: "Deployment & MLOps",
    description: "Launching the final product. We set up automated monitoring and retraining loops to ensure your model stays sharp over time.",
    keyDeliverable: "Deployed high-performance Docker microservice with auto-scaling limits"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    quote: "Muhammad's ability to fine-tune our custom NLP models while maintaining a lightweight frontend architecture was impressive. He truly understands the engineering of AI.",
    author: "Alex Rivera",
    role: "CTO",
    company: "NeuralScale"
  },
  {
    id: "test-2",
    quote: "The PII masking engine he built for us is world-class. Fast, secure, and integrated seamlessly into our existing pipeline without any downtime.",
    author: "Sarah Chen",
    role: "Head of Eng",
    company: "DataShield"
  },
  {
    id: "test-3",
    quote: "Beyond the code, Ali's strategic approach to MLOps saved us months of rework. He doesn't just build; he architectures for the future.",
    author: "Marcus Thorne",
    role: "Founder",
    company: "VectorFlow"
  }
];
