export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  overview: string;
  whatToExpect: string;
  reasonsToBook: string[];
  treatmentMethods: string[];
}

export interface Condition {
  id: string;
  name: string;
  category: "Spine & Nerve" | "Joint & Movement" | "Sport & Activity" | "Lifestyle & Long-term";
  summary: string;
  symptoms: string[];
  whenToSeekHelp: string;
  treatmentApproach: string;
}

export interface Clinician {
  id: string;
  name: string;
  role: string;
  teaser: string;
  summary: string;
  qualifications: string[];
  expertise: string[];
  personality: string;
}

export interface Testimonial {
  quote: string;
  patientName: string;
  condition: string;
  rating: number; // 1-5
  initial: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  answerFirstSummary: string;
  keyTakeaways: string[];
  sections: {
    title: string;
    content: string;
  }[];
}
