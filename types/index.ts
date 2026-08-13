export interface NavItem {
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period?: string;
  type: string; // e.g. "Full-time", "Contract", "Leadership"
  description: string;
  keyResponsibilities: string[];
  tags: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc?: string;
  deliverables?: string[];
  iconName: string;
  highlighted?: boolean;
}

export interface ApproachStep {
  step: string; // e.g. "01"
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  execution: string;
  services: string[];
  results: string[];
  metrics: { label: string; value: string }[];
  tools: string[];
  comingSoon?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
