export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  type: 'client' | 'gateway' | 'model' | 'database' | 'storage';
  protocol: string;
  latency?: string;
  details: string;
}

export interface BenchmarkMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  percentage: number;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  architectureNodes: ArchitectureNode[];
  architectureOverview: string;
  innovations: string[];
  benchmarks: BenchmarkMetric[];
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  metrics?: string[];
  caseStudy?: CaseStudy;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerBrand: 'ibm' | 'deeplearning' | 'stanford' | 'google' | 'aws' | 'imperial' | 'vanderbilt' | 'hkust';
  year: string;
  coursesCount?: number;
  description: string;
  credentialUrl: string;
  category: 'ai' | 'genai' | 'data' | 'engineering';
  isFeatured: boolean;
  skills: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  status: 'Preprint' | 'Published' | 'Under Review';
  venue?: string;
  year: string;
  researchAreas: string[];
  summary: string;
  abstract: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  links: {
    paper?: string;
    dataset?: string;
    model?: string;
    github?: string;
    demo?: string;
  };
  isFeatured: boolean;
}

export interface ServicePillar {
  id: string;
  num: string;
  title: string;
  description: string;
  details: string[];
}

export interface RoadmapStep {
  num: string;
  title: string;
  description: string;
  keyDeliverable: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
