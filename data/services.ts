import { ServiceCategory } from "@/types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "strategy",
    title: "SEO Strategy & Intelligence",
    description: "Data-driven roadmaps designed to capture high-intent search demand and systematically outrank market competitors.",
    iconName: "Compass",
    services: [
      {
        id: "seo-strategy-roadmapping",
        name: "SEO Strategy & Roadmapping",
        shortDesc: "Custom quarterly and annual SEO growth blueprints aligned directly with your business revenue targets.",
        iconName: "Map",
        highlighted: true
      },
      {
        id: "keyword-research",
        name: "Keyword Research & Intent Mapping",
        shortDesc: "Uncovering buyer-intent keywords that drive qualified leads, demo requests, and transactions rather than empty traffic.",
        iconName: "Search"
      },
      {
        id: "competitor-analysis",
        name: "Competitor Analysis & Gap Audit",
        shortDesc: "Reverse-engineering competitor search strategies, backlink profiles, and content gaps to claim market share.",
        iconName: "BarChart2"
      },
      {
        id: "niche-research",
        name: "Niche & Vertical Market Research",
        shortDesc: "In-depth search behavior analysis tailored specifically to specialized SaaS, eCommerce, and B2B sectors.",
        iconName: "Layers"
      }
    ]
  },
  {
    id: "technical",
    title: "Technical SEO & Infrastructure",
    description: "Eliminating crawl barriers, fixing indexation issues, and engineering high-speed search foundation for scale.",
    iconName: "Wrench",
    services: [
      {
        id: "technical-seo",
        name: "Technical SEO Optimization",
        shortDesc: "Fixing crawl errors, JavaScript rendering issues, canonicalization, site structure, and XML sitemaps.",
        iconName: "Wrench",
        highlighted: true
      },
      {
        id: "seo-audits",
        name: "Comprehensive SEO & Site Audits",
        shortDesc: "Deep-dive diagnostic analysis auditing performance, architecture, indexability, and technical health.",
        iconName: "ShieldCheck"
      },
      {
        id: "programmatic-seo",
        name: "Programmatic / Scalable SEO",
        shortDesc: "Building scalable database-driven page templates to capture thousands of long-tail search variations programmatically.",
        iconName: "Database",
        highlighted: true
      }
    ]
  },
  {
    id: "content",
    title: "On-Page & Content Strategy",
    description: "Building unshakeable topical authority with intent-optimized content that ranks high and converts readers.",
    iconName: "FileText",
    services: [
      {
        id: "on-page-seo",
        name: "On-Page SEO Optimization",
        shortDesc: "Optimizing title tags, meta descriptions, headings, schema markup, and image assets for maximum relevance.",
        iconName: "Edit3"
      },
      {
        id: "topical-authority",
        name: "Topical Authority & Content Hubs",
        shortDesc: "Structuring content clusters, pillar pages, and semantic networks to signal definitive industry authority to search engines.",
        iconName: "Share2",
        highlighted: true
      },
      {
        id: "seo-content-strategy",
        name: "SEO Content Strategy & Planning",
        shortDesc: "Editorial calendars engineered to target funnel stages from awareness to ready-to-buy commercial intent.",
        iconName: "Calendar"
      },
      {
        id: "internal-linking",
        name: "Internal Linking Architecture",
        shortDesc: "Strategic internal link optimization to pass PageRank efficiently and elevate priority conversion pages.",
        iconName: "Link"
      },
      {
        id: "content-writing",
        name: "SEO Content Writing & Editing",
        shortDesc: "High-quality, search-optimized written copy designed for human readers first and search algorithms second.",
        iconName: "PenTool"
      }
    ]
  },
  {
    id: "authority",
    title: "Authority Building & Off-Page SEO",
    description: "Earning domain trust and high-authority editorial references to solidify long-term search dominance.",
    iconName: "Award",
    services: [
      {
        id: "off-page-seo",
        name: "Off-Page SEO & Authority Building",
        shortDesc: "Strategic link profile acquisition designed to build genuine domain rating and search engine trust.",
        iconName: "TrendingUp"
      },
      {
        id: "link-building",
        name: "Ethical Link Building",
        shortDesc: "White-hat outreach programs securing contextual backlinks from reputable publications and industry hubs.",
        iconName: "ExternalLink"
      },
      {
        id: "guest-posting",
        name: "Guest Posting & Editorial Outreach",
        shortDesc: "Securing feature articles on relevant high-authority websites to drive targeted referral traffic and authority.",
        iconName: "Globe"
      },
      {
        id: "local-seo",
        name: "Local SEO & Google Business Profile",
        shortDesc: "Optimizing local map packs, localized keyword targeting, and regional directory authority.",
        iconName: "MapPin"
      }
    ]
  },
  {
    id: "ai-search",
    title: "AI Search & GEO Optimization",
    description: "Future-proofing your brand visibility for Google AI Overviews, ChatGPT Search, Perplexity, and LLM queries.",
    iconName: "Sparkles",
    services: [
      {
        id: "ai-search-optimization",
        name: "AI Search Optimization (GEO)",
        shortDesc: "Generative Engine Optimization (GEO) strategies to ensure your content is indexed, cited, and recommended by AI engines.",
        iconName: "Bot",
        highlighted: true
      },
      {
        id: "ai-visibility",
        name: "AI Visibility & LLM Citation Strategy",
        shortDesc: "Structuring brand data, structured markup, and entity definitions so LLMs recognize your brand as an authority.",
        iconName: "Zap"
      }
    ]
  },
  {
    id: "growth-web",
    title: "Conversion & Web Development",
    description: "Turning search visitors into revenue while building fast, responsive, SEO-ready web assets.",
    iconName: "Layout",
    services: [
      {
        id: "cro",
        name: "Conversion Rate Optimization (CRO)",
        shortDesc: "Optimizing user experience, CTA placements, copy hierarchy, and page speeds to convert search traffic into leads.",
        iconName: "Target",
        highlighted: true
      },
      {
        id: "wordpress-dev",
        name: "WordPress Development & SEO Setup",
        shortDesc: "Building clean, fast, custom WordPress websites engineered from the ground up for SEO performance.",
        iconName: "Code"
      },
      {
        id: "web-dev",
        name: "Web Development Support",
        shortDesc: "Technical collaboration to ensure clean code practices, semantic HTML5, fast rendering, and mobile responsiveness.",
        iconName: "Terminal"
      }
    ]
  }
];
