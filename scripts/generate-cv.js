import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4"
});

// Color Palette
const darkBg = [18, 18, 20];
const amberColor = [217, 119, 6];
const white = [255, 255, 255];
const lightGray = [180, 180, 185];
const darkGray = [40, 40, 45];

// Page dimensions
const pageWidth = 210;
const pageHeight = 297;

// Background
doc.setFillColor(15, 15, 18);
doc.rect(0, 0, pageWidth, pageHeight, "F");

// Left Accent Line
doc.setFillColor(217, 119, 6);
doc.rect(0, 0, 4, pageHeight, "F");

let y = 20;

// Header Name
doc.setFont("helvetica", "bold");
doc.setFontSize(24);
doc.setTextColor(255, 255, 255);
doc.text("MUHAMMAD ALI", 15, y);

y += 7;
doc.setFont("helvetica", "normal");
doc.setFontSize(12);
doc.setTextColor(217, 119, 6);
doc.text("AI/ML Engineer & Full Stack Developer | Speech & NLP Researcher", 15, y);

y += 6;
doc.setFontSize(9);
doc.setTextColor(160, 160, 165);
doc.text("Email: aliskdse@gmail.com  |  GitHub: github.com/mohdali-dev  |  HuggingFace: huggingface.co/mohdali1", 15, y);

y += 3;
doc.setDrawColor(50, 50, 55);
doc.line(15, y, 195, y);

// SECTION 1: SUMMARY
y += 8;
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(217, 119, 6);
doc.text("EXECUTIVE SUMMARY", 15, y);

y += 5;
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(220, 220, 225);
const summary = "AI/ML Engineer and Full-Stack Developer specializing in state-of-the-art automatic speech recognition (ASR), computer vision, and high-performance neural network pipelines. Lead researcher of BaltiVoice (arXiv:2606.03504), an open-access speech corpus and fine-tuned OpenAI Whisper ASR baseline for low-resource languages. Experienced in building end-to-end scalable web platforms using React, TypeScript, Node.js, and PyTorch.";
const summaryLines = doc.splitTextToSize(summary, 180);
doc.text(summaryLines, 15, y);

y += (summaryLines.length * 4.5) + 4;

// SECTION 2: FEATURED RESEARCH & PUBLICATIONS
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(217, 119, 6);
doc.text("FEATURED RESEARCH & PUBLICATIONS", 15, y);

y += 5;
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(255, 255, 255);
doc.text("BaltiVoice: Speech Corpus & Fine-Tuned Whisper ASR System (2025)", 15, y);

y += 4.5;
doc.setFont("helvetica", "italic");
doc.setFontSize(8.5);
doc.setTextColor(180, 180, 185);
doc.text("Lead Author | Published on arXiv (arXiv:2606.03504) & HuggingFace Hub", 15, y);

y += 4.5;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(200, 200, 205);
const pubDesc = "• Constructed 16.8-hour validated audio corpus (10,060 clips across 136 speakers) for the low-resource Balti language (bft).\n• Fine-tuned OpenAI Whisper-small model, reducing Word Error Rate (WER) from 159.19% to 26.74% (-83% relative reduction) and Character Error Rate (CER) to 8.67%.\n• Released open-source dataset, PyTorch training code, and live Gradio demo on HuggingFace Spaces.";
const pubLines = doc.splitTextToSize(pubDesc, 180);
doc.text(pubLines, 15, y);

y += (pubLines.length * 4) + 4;

// SECTION 3: TECHNICAL SKILLS
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(217, 119, 6);
doc.text("TECHNICAL SKILLS", 15, y);

y += 5;
const skills = [
  ["AI / ML & ASR:", "PyTorch, OpenAI Whisper, HuggingFace Transformers, Torchaudio, OpenCV, Librosa"],
  ["Frontend & UI:", "React, TypeScript, Next.js, Tailwind CSS, Motion / Framer Motion, Vite"],
  ["Backend & Cloud:", "Node.js, Express, Python, REST APIs, Docker, Git / GitHub, MLOps"],
  ["Databases & Tools:", "PostgreSQL, MongoDB, Firebase, Gradio, Linux, Jupyter Notebooks"]
];

skills.forEach(([label, val]) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(255, 255, 255);
  doc.text(label, 15, y);
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor(190, 190, 195);
  doc.text(val, 55, y);
  y += 4.5;
});

y += 3;

// SECTION 4: SELECTED PROJECTS & EXPERIENCE
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(217, 119, 6);
doc.text("PROJECTS & ENGINEERING EXPERIENCE", 15, y);

y += 5;

const projects = [
  {
    title: "BaltiVoice ASR Speech Recognition Engine",
    role: "Lead ML Researcher & Developer",
    desc: "Engineered automated data preprocessing, audio spectrogram filterbanks (16kHz WAV), speaker-disjoint GroupShuffleSplit partitioning, and Whisper-small transfer learning pipeline."
  },
  {
    title: "NeuroVision AI Platform & Custom Neural Architectures",
    role: "Full-Stack AI Developer",
    desc: "Built scalable web interfaces and backend proxy services integrating custom computer vision models with real-time analytics dashboards."
  },
  {
    title: "Design Systems & High-Performance Web Applications",
    role: "Frontend Engineer",
    desc: "Designed modern dark-aesthetic responsive web interfaces with sub-second page loads, custom micro-interactions, and responsive layout architectures."
  }
];

projects.forEach((proj) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text(proj.title, 15, y);
  
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(217, 119, 6);
  doc.text(proj.role, 140, y, { align: "left" });

  y += 4;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(190, 190, 195);
  const lines = doc.splitTextToSize(proj.desc, 180);
  doc.text(lines, 15, y);
  y += (lines.length * 4) + 3;
});

// SECTION 5: EDUCATION & CERTIFICATIONS
doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(217, 119, 6);
doc.text("EDUCATION & CERTIFICATIONS", 15, y);

y += 5;
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.setTextColor(255, 255, 255);
doc.text("Bachelor of Science in Software Engineering (BSSE)", 15, y);

y += 4;
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.setTextColor(180, 180, 185);
doc.text("Specialization in Machine Learning, Speech Processing, & Web Architecture", 15, y);

y += 4;
doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.setTextColor(160, 160, 165);
doc.text("Certifications: Deep Learning Specialization • PyTorch for Audio & NLP • Full-Stack Web Development", 15, y);

// Footer
doc.setDrawColor(50, 50, 55);
doc.line(15, 280, 195, 280);

doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.setTextColor(120, 120, 125);
doc.text("Muhammad Ali — Curriculum Vitae | Generated for Portfolio", 15, 285);
doc.text("aliskdse@gmail.com", 195, 285, { align: "right" });

const outputPath = path.join(process.cwd(), "public", "Muhammad_Ali_CV.pdf");
const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
fs.writeFileSync(outputPath, pdfBuffer);
console.log("Successfully generated /public/Muhammad_Ali_CV.pdf");
