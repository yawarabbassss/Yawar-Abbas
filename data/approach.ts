import { ApproachStep } from "@/types";

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Business, Audience & Financial Goals",
    description: "Before running audits or targeting keywords, I deep-dive into your business model, target customer personas, unit economics, and growth targets.",
    details: [
      "Identify high-margin products and priority services",
      "Analyze buyer decision triggers and customer intent",
      "Establish primary KPIs: qualified leads, demos, and organic revenue"
    ],
    iconName: "Target"
  },
  {
    step: "02",
    title: "Research",
    subtitle: "Niche, Competitors & Search Demand",
    description: "Uncovering the exact search queries your prospective customers use throughout their buying journey, along with competitor vulnerabilities.",
    details: [
      "Comprehensive buyer-intent keyword identification",
      "Competitor gap and market share analysis",
      "Search intent classification (Informational vs Commercial)"
    ],
    iconName: "Search"
  },
  {
    step: "03",
    title: "Audit",
    subtitle: "Technical Health, Content & UX",
    description: "A thorough diagnostic assessment of your website infrastructure to uncover crawl bottlenecks, content thinness, and conversion obstacles.",
    details: [
      "Technical indexability and site architecture check",
      "Content quality, cannibalization, and relevance audit",
      "UX, page speed, and conversion funnel analysis"
    ],
    iconName: "CheckCircle2"
  },
  {
    step: "04",
    title: "Strategize",
    subtitle: "Topical Authority & Execution Roadmap",
    description: "Developing an actionable, prioritized SEO blueprint designed to achieve quick wins while establishing long-term search dominance.",
    details: [
      "Topical authority mapping and content cluster design",
      "Technical fix prioritization matrix",
      "Custom quarterly SEO roadmap with milestones"
    ],
    iconName: "Map"
  },
  {
    step: "05",
    title: "Execute",
    subtitle: "Technical Fixes, Content & Authority",
    description: "Systematic implementation of technical optimizations, high-converting content creation, internal link architecture, and outreach.",
    details: [
      "On-page optimization and schema markup deployment",
      "SEO content creation and topical cluster publication",
      "White-hat link building and digital brand mentions"
    ],
    iconName: "Zap"
  },
  {
    step: "06",
    title: "Measure",
    subtitle: "Traffic, Leads & Business Outcomes",
    description: "Tracking real-time search performance, indexing, qualified traffic growth, and direct conversion attribution using GSC and GA4.",
    details: [
      "Search Console and Google Analytics 4 performance tracking",
      "Lead attribution and goal conversion monitoring",
      "Transparent reporting focused on business growth"
    ],
    iconName: "TrendingUp"
  },
  {
    step: "07",
    title: "Optimize",
    subtitle: "Continuous Improvement & Scaling",
    description: "SEO is an ongoing growth flywheel. Continuously refreshing top assets, expanding topical clusters, and capitalizing on emerging opportunities.",
    details: [
      "Content decay detection and strategic updates",
      "Generative Engine Optimization (GEO) adaptations",
      "Scaling top-performing organic acquisition channels"
    ],
    iconName: "Repeat"
  }
];
