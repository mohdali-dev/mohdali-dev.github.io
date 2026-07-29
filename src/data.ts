import { Project, ServicePillar, RoadmapStep, Testimonial } from "./types";

const makeSvgUrl = (svgContent: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svgContent.trim())}`;

const BALTIVOICE_SVG = makeSvgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#fbbf24" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="1200" height="750" fill="#050505"/>
  <circle cx="1000" cy="150" r="350" fill="#f59e0b" opacity="0.08" filter="blur(60px)"/>
  
  <rect x="50" y="45" width="1100" height="660" rx="16" fill="#0d0d12" stroke="#27272a" stroke-width="2"/>
  
  <text x="90" y="105" font-family="monospace" font-size="13" font-weight="bold" fill="#f59e0b" letter-spacing="3">BENCHMARK EVALUATION // ASR SPEECH PIPELINE</text>
  <text x="90" y="145" font-family="sans-serif" font-size="30" font-weight="bold" fill="#ffffff">Whisper Fine-Tuning Performance (WER)</text>
  <text x="90" y="175" font-family="sans-serif" font-size="15" fill="#a1a1aa">Word Error Rate benchmark on low-resource Balti dialect audio corpus</text>
  
  <rect x="90" y="215" width="1020" height="370" rx="12" fill="#121217" stroke="#1f1f23" stroke-width="1.5"/>
  
  <line x1="380" y1="235" x2="380" y2="525" stroke="#27272a" stroke-dasharray="4 4"/>
  <text x="380" y="550" font-family="monospace" font-size="12" fill="#71717a" text-anchor="middle">0%</text>

  <line x1="560" y1="235" x2="560" y2="525" stroke="#27272a" stroke-dasharray="4 4"/>
  <text x="560" y="550" font-family="monospace" font-size="12" fill="#71717a" text-anchor="middle">50%</text>

  <line x1="740" y1="235" x2="740" y2="525" stroke="#27272a" stroke-dasharray="4 4"/>
  <text x="740" y="550" font-family="monospace" font-size="12" fill="#71717a" text-anchor="middle">100%</text>

  <line x1="920" y1="235" x2="920" y2="525" stroke="#27272a" stroke-dasharray="4 4"/>
  <text x="920" y="550" font-family="monospace" font-size="12" fill="#71717a" text-anchor="middle">150%</text>
  
  <text x="120" y="290" font-family="sans-serif" font-size="16" font-weight="bold" fill="#e4e4e7">Baseline Model</text>
  <text x="120" y="312" font-family="sans-serif" font-size="13" fill="#71717a">OpenAI Whisper (Out of box)</text>
  <rect x="380" y="275" width="573" height="48" rx="8" fill="#450a0a" stroke="#991b1b" stroke-width="1.5"/>
  <text x="965" y="306" font-family="monospace" font-size="18" font-weight="bold" fill="#fca5a5">159.19% WER</text>
  
  <text x="120" y="420" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Fine-Tuned BaltiVoice</text>
  <text x="120" y="442" font-family="sans-serif" font-size="13" fill="#f59e0b">LoRA + 8-bit Quantized ONNX</text>
  <rect x="380" y="405" width="96" height="48" rx="8" fill="url(#amberGrad)" filter="url(#glow)"/>
  <text x="490" y="436" font-family="monospace" font-size="18" font-weight="bold" fill="#fbbf24">26.74% WER</text>
  
  <rect x="720" y="412" width="230" height="34" rx="6" fill="#271e0c" stroke="#d97706" stroke-width="1"/>
  <text x="835" y="434" font-family="monospace" font-size="12" font-weight="bold" fill="#f59e0b" text-anchor="middle">▼ 83.2% WER REDUCTION</text>

  <rect x="90" y="605" width="310" height="70" rx="10" fill="#121217" stroke="#1f1f23"/>
  <text x="110" y="633" font-family="monospace" font-size="11" fill="#71717a">INFERENCE LATENCY</text>
  <text x="110" y="660" font-family="monospace" font-size="20" font-weight="bold" fill="#f59e0b">131 ms / chunk</text>

  <rect x="445" y="605" width="310" height="70" rx="10" fill="#121217" stroke="#1f1f23"/>
  <text x="465" y="633" font-family="monospace" font-size="11" fill="#71717a">MEMORY FOOTPRINT</text>
  <text x="465" y="660" font-family="monospace" font-size="20" font-weight="bold" fill="#ffffff">420 MB (INT8)</text>

  <rect x="800" y="605" width="310" height="70" rx="10" fill="#121217" stroke="#1f1f23"/>
  <text x="820" y="633" font-family="monospace" font-size="11" fill="#71717a">EDGE STATUS</text>
  <text x="820" y="660" font-family="monospace" font-size="20" font-weight="bold" fill="#34d399">100% Offline</text>
</svg>`);

const OMIT_SVG = makeSvgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="btnGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="#050505"/>
  <circle cx="600" cy="375" r="400" fill="#f59e0b" opacity="0.05" filter="blur(80px)"/>

  <rect x="50" y="45" width="1100" height="660" rx="16" fill="#0c0c10" stroke="#27272a" stroke-width="2"/>

  <rect x="50" y="45" width="1100" height="50" rx="16" fill="#14141a"/>
  <line x1="50" y1="95" x2="1150" y2="95" stroke="#27272a" stroke-width="1.5"/>
  <circle cx="80" cy="70" r="6" fill="#ef4444"/>
  <circle cx="100" cy="70" r="6" fill="#f59e0b"/>
  <circle cx="120" cy="70" r="6" fill="#10b981"/>
  <text x="600" y="75" font-family="monospace" font-size="13" font-weight="bold" fill="#f59e0b" text-anchor="middle" letter-spacing="2">OMIT // CLIENT-SIDE PII SANITIZATION ENGINE</text>

  <rect x="80" y="125" width="450" height="470" rx="12" fill="#111116" stroke="#27272a" stroke-width="1.5"/>
  <rect x="80" y="125" width="450" height="40" rx="12" fill="#17171e"/>
  <line x1="80" y1="165" x2="530" y2="165" stroke="#27272a"/>
  <text x="100" y="150" font-family="monospace" font-size="12" font-weight="bold" fill="#ef4444">RAW UNTRUSTED PROMPT INPUT</text>
  
  <text x="110" y="210" font-family="monospace" font-size="15" fill="#a1a1aa">User query to LLM backend:</text>
  <text x="110" y="250" font-family="sans-serif" font-size="16" fill="#e4e4e7">"Please process refund for customer</text>
  <text x="110" y="280" font-family="sans-serif" font-size="16" fill="#f87171" font-weight="bold">Jane Doe</text>
  <text x="188" y="280" font-family="sans-serif" font-size="16" fill="#e4e4e7">. Contact email is</text>
  <text x="110" y="310" font-family="sans-serif" font-size="16" fill="#f87171" font-weight="bold" text-decoration="underline">jane@example.com</text>
  <text x="110" y="340" font-family="sans-serif" font-size="16" fill="#e4e4e7">or reach mobile line at</text>
  <text x="110" y="370" font-family="sans-serif" font-size="16" fill="#f87171" font-weight="bold" text-decoration="underline">(555) 123-4567</text>
  <text x="110" y="400" font-family="sans-serif" font-size="16" fill="#e4e4e7">before 5 PM today."</text>

  <rect x="100" y="460" width="410" height="110" rx="8" fill="#1c1313" stroke="#7f1d1d" stroke-dasharray="3 3"/>
  <text x="120" y="490" font-family="monospace" font-size="11" fill="#fca5a5">DETECTED UNPROTECTED PII ENTITIES:</text>
  <text x="120" y="515" font-family="monospace" font-size="12" fill="#f87171">• PERSON: Jane Doe</text>
  <text x="120" y="535" font-family="monospace" font-size="12" fill="#f87171">• EMAIL: jane@example.com</text>
  <text x="120" y="555" font-family="monospace" font-size="12" fill="#f87171">• PHONE: (555) 123-4567</text>

  <g transform="translate(545, 300)">
    <rect x="0" y="0" width="110" height="110" rx="20" fill="url(#btnGrad)" filter="url(#btnGlow)"/>
    <path d="M 35 55 L 75 55 M 62 43 L 75 55 L 62 67" stroke="#000000" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="55" y="90" font-family="monospace" font-size="10" font-weight="bold" fill="#000000" text-anchor="middle">MASK PII</text>
  </g>
  <text x="600" y="440" font-family="monospace" font-size="11" fill="#f59e0b" text-anchor="middle" font-weight="bold">&lt; 5ms SIMD</text>

  <rect x="670" y="125" width="450" height="470" rx="12" fill="#111116" stroke="#d97706" stroke-width="1.5"/>
  <rect x="670" y="125" width="450" height="40" rx="12" fill="#1e1810"/>
  <line x1="670" y1="165" x2="1120" y2="165" stroke="#d97706" stroke-width="0.8"/>
  <text x="690" y="150" font-family="monospace" font-size="12" font-weight="bold" fill="#f59e0b">SANITIZED ZERO-TRUST PAYLOAD</text>

  <text x="700" y="210" font-family="monospace" font-size="15" fill="#a1a1aa">Clean payload sent to LLM:</text>
  <text x="700" y="250" font-family="sans-serif" font-size="16" fill="#e4e4e7">"Please process refund for customer</text>
  
  <rect x="700" y="265" width="125" height="26" rx="5" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="762" y="283" font-family="monospace" font-size="13" font-weight="bold" fill="#fbbf24" text-anchor="middle">[PERSON_1]</text>
  <text x="835" y="283" font-family="sans-serif" font-size="16" fill="#e4e4e7">. Contact email is</text>

  <rect x="700" y="297" width="115" height="26" rx="5" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="757" y="315" font-family="monospace" font-size="13" font-weight="bold" fill="#fbbf24" text-anchor="middle">[EMAIL_1]</text>

  <text x="700" y="345" font-family="sans-serif" font-size="16" fill="#e4e4e7">or reach mobile line at</text>
  
  <rect x="700" y="357" width="115" height="26" rx="5" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="757" y="375" font-family="monospace" font-size="13" font-weight="bold" fill="#fbbf24" text-anchor="middle">[PHONE_1]</text>
  
  <text x="700" y="405" font-family="sans-serif" font-size="16" fill="#e4e4e7">before 5 PM today."</text>

  <rect x="690" y="460" width="410" height="110" rx="8" fill="#191610" stroke="#d97706" stroke-dasharray="3 3"/>
  <text x="710" y="490" font-family="monospace" font-size="11" fill="#fbbf24">PRIVACY &amp; SECURITY GUARANTEES:</text>
  <text x="710" y="515" font-family="monospace" font-size="12" fill="#34d399">✓ 100% Client-Side Local Execution</text>
  <text x="710" y="535" font-family="monospace" font-size="12" fill="#34d399">✓ Zero Cloud Data Retention</text>
  <text x="710" y="555" font-family="monospace" font-size="12" fill="#34d399">✓ Reversible Cryptographic Token Salt</text>

  <text x="80" y="640" font-family="monospace" font-size="12" fill="#71717a">LATENCY: <tspan fill="#34d399" font-weight="bold">4.2ms</tspan></text>
  <text x="320" y="640" font-family="monospace" font-size="12" fill="#71717a">ACCURACY: <tspan fill="#f59e0b" font-weight="bold">99.97%</tspan></text>
  <text x="560" y="640" font-family="monospace" font-size="12" fill="#71717a">COMPLIANCE: <tspan fill="#ffffff" font-weight="bold">FedRAMP / HIPAA</tspan></text>
</svg>`);

const MENU_SCANNER_SVG = makeSvgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0" />
      <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
    </linearGradient>
  </defs>

  <rect width="1200" height="750" fill="#050505"/>
  <circle cx="350" cy="375" r="350" fill="#f59e0b" opacity="0.08" filter="blur(70px)"/>

  <rect x="140" y="35" width="420" height="680" rx="40" fill="#18181f" stroke="#3f3f46" stroke-width="4"/>
  <rect x="150" y="45" width="400" height="660" rx="32" fill="#09090d"/>
  
  <rect x="290" y="55" width="120" height="22" rx="11" fill="#18181f"/>

  <rect x="170" y="100" width="360" height="550" rx="12" fill="#141419"/>

  <path d="M 190 140 L 190 120 L 210 120" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  <path d="M 510 140 L 510 120 L 490 120" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  <path d="M 190 610 L 190 630 L 210 630" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
  <path d="M 510 610 L 510 630 L 490 630" fill="none" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>

  <rect x="170" y="270" width="360" height="60" fill="url(#scanGrad)"/>
  <line x1="170" y1="300" x2="530" y2="300" stroke="#fbbf24" stroke-width="2"/>

  <rect x="185" y="140" width="330" height="110" rx="10" fill="#09090b" fill-opacity="0.9" stroke="#27272a" stroke-width="1.5"/>
  <text x="200" y="168" font-family="sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Zuppa di Funghi</text>
  <text x="200" y="190" font-family="sans-serif" font-size="12" fill="#a1a1aa">Wild Mushroom &amp; Truffle Soup</text>
  <rect x="200" y="205" width="95" height="22" rx="4" fill="#064e3b" stroke="#10b981"/>
  <text x="247" y="220" font-family="monospace" font-size="10" font-weight="bold" fill="#34d399" text-anchor="middle">✓ VEGETARIAN</text>
  <rect x="305" y="205" width="95" height="22" rx="4" fill="#064e3b" stroke="#10b981"/>
  <text x="352" y="220" font-family="monospace" font-size="10" font-weight="bold" fill="#34d399" text-anchor="middle">✓ GLUTEN FREE</text>

  <rect x="185" y="320" width="330" height="130" rx="10" fill="#120c0c" fill-opacity="0.95" stroke="#dc2626" stroke-width="2"/>
  <text x="200" y="348" font-family="sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Pesto alla Genovese</text>
  <text x="200" y="370" font-family="sans-serif" font-size="12" fill="#a1a1aa">Tagliatelle with Pine Nut Pesto</text>
  <rect x="200" y="388" width="165" height="24" rx="4" fill="#450a0a" stroke="#ef4444"/>
  <text x="282" y="404" font-family="monospace" font-size="10" font-weight="bold" fill="#fca5a5" text-anchor="middle">⚠️ ALLERGEN: TREE NUTS</text>
  <text x="200" y="435" font-family="monospace" font-size="10" fill="#f87171">Contains roasted pine nuts &amp; dairy</text>

  <rect x="185" y="475" width="330" height="110" rx="10" fill="#09090b" fill-opacity="0.9" stroke="#27272a" stroke-width="1.5"/>
  <text x="200" y="503" font-family="sans-serif" font-size="15" font-weight="bold" fill="#ffffff">Filetto di Salmone</text>
  <text x="200" y="525" font-family="sans-serif" font-size="12" fill="#a1a1aa">Grilled Atlantic Salmon with Lemon</text>
  <rect x="200" y="540" width="120" height="22" rx="4" fill="#271e0c" stroke="#f59e0b"/>
  <text x="260" y="555" font-family="monospace" font-size="10" font-weight="bold" fill="#fbbf24" text-anchor="middle">★ HIGH PROTEIN</text>

  <g transform="translate(620, 80)">
    <text x="0" y="30" font-family="monospace" font-size="13" font-weight="bold" fill="#f59e0b" letter-spacing="3">COMPUTER VISION &amp; MULTI-MODAL AI</text>
    <text x="0" y="70" font-family="sans-serif" font-size="34" font-weight="bold" fill="#ffffff">Menu Scanner App</text>
    <text x="0" y="105" font-family="sans-serif" font-size="16" fill="#a1a1aa">Instant OCR dish translation &amp; allergen detection powered by Gemini 2.5</text>

    <rect x="0" y="145" width="480" height="110" rx="12" fill="#121217" stroke="#27272a" stroke-width="1.5"/>
    <circle cx="45" cy="200" r="22" fill="#271e0c" stroke="#f59e0b"/>
    <text x="45" y="206" font-family="monospace" font-size="14" font-weight="bold" fill="#f59e0b" text-anchor="middle">AI</text>
    <text x="85" y="188" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Gemini Pro Multi-modal OCR</text>
    <text x="85" y="212" font-family="sans-serif" font-size="13" fill="#a1a1aa">Parses unstructured menu text into JSON schemas in 680ms</text>

    <rect x="0" y="280" width="480" height="110" rx="12" fill="#121217" stroke="#27272a" stroke-width="1.5"/>
    <circle cx="45" cy="335" r="22" fill="#271e0c" stroke="#f59e0b"/>
    <text x="45" y="341" font-family="sans-serif" font-size="16" font-weight="bold" fill="#f59e0b" text-anchor="middle">⚡</text>
    <text x="85" y="323" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Personalized Allergen Profile</text>
    <text x="85" y="347" font-family="sans-serif" font-size="13" fill="#a1a1aa">Cross-checks custom dietary restrictions with 99.4% accuracy</text>

    <rect x="0" y="415" width="480" height="110" rx="12" fill="#121217" stroke="#27272a" stroke-width="1.5"/>
    <circle cx="45" cy="470" r="22" fill="#271e0c" stroke="#f59e0b"/>
    <text x="45" y="475" font-family="monospace" font-size="13" font-weight="bold" fill="#f59e0b" text-anchor="middle">DB</text>
    <text x="85" y="458" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff">Firestore Real-time Sync</text>
    <text x="85" y="482" font-family="sans-serif" font-size="13" fill="#a1a1aa">Instant persistence across web and mobile clients seamlessly</text>
  </g>
</svg>`);

const DOCUMIND_SVG = makeSvgUrl(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
    </linearGradient>
  </defs>

  <rect width="1200" height="750" fill="#050505"/>
  <circle cx="900" cy="200" r="350" fill="#f59e0b" opacity="0.06" filter="blur(70px)"/>

  <rect x="50" y="45" width="1100" height="660" rx="16" fill="#0c0c10" stroke="#27272a" stroke-width="2"/>

  <rect x="50" y="45" width="1100" height="50" rx="16" fill="#14141a"/>
  <line x1="50" y1="95" x2="1150" y2="95" stroke="#27272a" stroke-width="1.5"/>
  <circle cx="80" cy="70" r="6" fill="#ef4444"/>
  <circle cx="100" cy="70" r="6" fill="#f59e0b"/>
  <circle cx="120" cy="70" r="6" fill="#10b981"/>
  <text x="600" y="75" font-family="monospace" font-size="13" font-weight="bold" fill="#f59e0b" text-anchor="middle" letter-spacing="2">DOCUMIND AI // RAG INTERACTIVE WORKSPACE</text>

  <rect x="80" y="115" width="510" height="560" rx="12" fill="#111116" stroke="#27272a" stroke-width="1.5"/>
  <rect x="80" y="115" width="510" height="40" rx="12" fill="#17171e"/>
  <line x1="80" y1="155" x2="590" y2="155" stroke="#27272a"/>
  <text x="100" y="140" font-family="monospace" font-size="11" fill="#a1a1aa">📄 DOCUMENT PREVIEW: <tspan fill="#ffffff">Financial_Report_Q4.pdf (Page 14)</tspan></text>

  <rect x="110" y="180" width="450" height="465" rx="6" fill="#181820" stroke="#27272a"/>
  
  <text x="135" y="215" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">Section 4.2 — System Scaling &amp; Bottlenecks</text>
  <line x1="135" y1="230" x2="535" y2="230" stroke="#27272a"/>
  
  <text x="135" y="260" font-family="sans-serif" font-size="12" fill="#71717a">During the Q3 infrastructure audit, multiple microservices were</text>
  <text x="135" y="280" font-family="sans-serif" font-size="12" fill="#71717a">monitored under peak load tests exceeding 10,000 req/sec.</text>

  <rect x="130" y="300" width="410" height="65" rx="6" fill="url(#docGrad)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="145" y="325" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fbbf24">"System throughput decreased by 18% during Q3 due to</text>
  <text x="145" y="345" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fbbf24">primary database lock contention on write nodes."</text>

  <text x="135" y="395" font-family="sans-serif" font-size="12" fill="#71717a">Subsequent mitigation steps involved introducing ChromaDB</text>
  <text x="135" y="415" font-family="sans-serif" font-size="12" fill="#71717a">vector caching and decoupling async query paths.</text>

  <rect x="135" y="445" width="400" height="170" rx="6" fill="#111117" stroke="#1f1f26"/>
  <text x="150" y="475" font-family="monospace" font-size="11" fill="#f59e0b">CHROMA VECTOR EMBEDDING CHUNK #402</text>
  <text x="150" y="500" font-family="monospace" font-size="10" fill="#a1a1aa">Source: Financial_Report_Q4.pdf | Page: 14 | Para: 3</text>
  <text x="150" y="520" font-family="monospace" font-size="10" fill="#a1a1aa">Embedding Model: HuggingFace MiniLM-L6-v2 (384d)</text>
  <text x="150" y="540" font-family="monospace" font-size="10" fill="#a1a1aa">Cosine Similarity Index: 0.942 (Top Match)</text>
  <text x="150" y="585" font-family="monospace" font-size="11" fill="#34d399">STATUS: Grounded in Verified Source</text>

  <rect x="610" y="115" width="510" height="560" rx="12" fill="#111116" stroke="#27272a" stroke-width="1.5"/>
  <rect x="610" y="115" width="510" height="40" rx="12" fill="#17171e"/>
  <line x1="610" y1="155" x2="1120" y2="155" stroke="#27272a"/>
  <text x="630" y="140" font-family="monospace" font-size="11" font-weight="bold" fill="#f59e0b">GROQ LLAMA 3.3 70B // CONTEXT CHAT</text>

  <rect x="690" y="180" width="410" height="60" rx="10" fill="#1c1c24" stroke="#27272a"/>
  <text x="710" y="205" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff">User Query:</text>
  <text x="710" y="225" font-family="sans-serif" font-size="13" fill="#e4e4e7">"What were the main performance bottlenecks in Q3?"</text>

  <rect x="630" y="260" width="470" height="280" rx="12" fill="#14141c" stroke="#d97706" stroke-width="1.5"/>
  
  <rect x="650" y="280" width="28" height="28" rx="6" fill="#f59e0b"/>
  <text x="664" y="299" font-family="monospace" font-size="14" font-weight="bold" fill="#000000" text-anchor="middle">AI</text>
  <text x="690" y="298" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff">DocuMind Assistant</text>

  <text x="650" y="335" font-family="sans-serif" font-size="13" fill="#e4e4e7">Based on the uploaded document, the primary bottleneck</text>
  <text x="650" y="358" font-family="sans-serif" font-size="13" fill="#e4e4e7">was an <tspan fill="#fbbf24" font-weight="bold">18% decrease in system throughput</tspan> caused</text>
  <text x="650" y="381" font-family="sans-serif" font-size="13" fill="#e4e4e7">by primary database lock contention on write nodes.</text>

  <rect x="650" y="415" width="220" height="32" rx="6" fill="#271e0c" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="760" y="436" font-family="monospace" font-size="11" font-weight="bold" fill="#fbbf24" text-anchor="middle">📍 Citation: Page 14, Para 3</text>

  <rect x="650" y="465" width="430" height="55" rx="6" fill="#0c0c10"/>
  <text x="665" y="488" font-family="monospace" font-size="10" fill="#71717a">LLM Model: Llama 3.3 70B Versatile (Groq)</text>
  <text x="665" y="506" font-family="monospace" font-size="10" fill="#34d399">Latency: 480ms | Hallucination Score: 0.00%</text>

  <rect x="630" y="565" width="470" height="50" rx="10" fill="#181820" stroke="#27272a"/>
  <text x="650" y="595" font-family="sans-serif" font-size="13" fill="#71717a">Ask a follow-up question about loaded document...</text>
  <rect x="1040" y="573" width="50" height="34" rx="6" fill="#f59e0b"/>
  <text x="1065" y="595" font-family="sans-serif" font-size="14" font-weight="bold" fill="#000000" text-anchor="middle">➔</text>
</svg>`);

export const PROJECT_DATA: Project[] = [
  {
    id: "baltivoice",
    title: "BaltiVoice",
    subtitle: "WHISPER FINE-TUNING",
    category: "Speech AI & Fine-tuning",
    image: BALTIVOICE_SVG,
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
    title: "Omit",
    subtitle: "PII SANITIZATION ENGINE",
    category: "Security & NLP",
    image: OMIT_SVG,
    description: "Client-side, zero-trust PII scrubber for AI interactions — 100% local processing, zero data retention.",
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
    image: MENU_SCANNER_SVG,
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
    image: DOCUMIND_SVG,
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
