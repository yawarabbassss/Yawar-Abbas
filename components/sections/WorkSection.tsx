"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Eye,
  Star
} from "lucide-react";

export const WorkSection: React.FC = () => {
  const [tab, setTab] = useState<"websites" | "cases">("websites");

  const projects = [
    {
      id: "01",
      title: "Misaq Matchmaking Search Architecture",
      subtitle: "US Registered Mobile Application Platform",
      tag: "Client Project",
      status: "Contract Completed (2026)",
      stat: "400+",
      statLabel: "Target search queries mapped & indexed",
      points: [
        "Analyzed niche intent patterns and targeted demographic search queries across US and diaspora audiences.",
        "Engineered mobile-first technical SEO foundations and fast-indexing landing page architecture.",
        "Mapped user onboarding funnels directly with high-intent organic search queries."
      ],
      techs: ["App SEO", "Intent Mapping", "Schema Markup", "Technical SEO", "Google Search Console"],
      previewHighlights: {
        title: "Matchmaking Search Hub",
        badge: "US Market",
        metric: "100% Indexed",
        subMetric: "Zero Crawl Errors"
      }
    },
    {
      id: "02",
      title: "Himmatkaar Youth Empowerment Engine",
      subtitle: "Regional & National Visibility Campaign",
      tag: "Live Project",
      status: "Active (2026)",
      stat: "100%",
      statLabel: "Complete on-page & technical audit resolution",
      points: [
        "Architected search engine optimization campaigns aligned with social empowerment initiatives.",
        "Optimized digital content and organizational hierarchy for regional search discovery.",
        "Executed complete technical audits to maximize mobile accessibility and PageSpeed."
      ],
      techs: ["Technical Audits", "Content Strategy", "Local SEO", "Information Architecture"],
      previewHighlights: {
        title: "Regional Discovery Hub",
        badge: "Social Impact",
        metric: "Topical Authority",
        subMetric: "Audited & Scaled"
      }
    },
    {
      id: "03",
      title: "Saafify Organic Growth Architecture",
      subtitle: "Growth & Digital Acquisition Engine",
      tag: "Growth Project",
      status: "Active (2026)",
      stat: "10x",
      statLabel: "Topical cluster coverage expansion",
      points: [
        "Directed holistic growth roadmaps connecting SEO, topical authority, and organic conversion funnels.",
        "Analyzed channel analytics to identify highest ROI keywords and commercial user search intents.",
        "Streamlined site hierarchy to eliminate internal link bottlenecks and accelerate indexation."
      ],
      techs: ["Growth Strategy", "Conversion Optimization", "Topical Hubs", "Analytics"],
      previewHighlights: {
        title: "Conversion Pipeline",
        badge: "B2B & SaaS",
        metric: "Revenue Alignment",
        subMetric: "Funnel Optimized"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FAFAFC] text-gray-900 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              Portfolio & Builds
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight">
              Featured work & websites
            </h2>
          </motion.div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center p-1.5 rounded-full bg-gray-200/80 border border-gray-300/80 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setTab("websites")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                tab === "websites"
                  ? "bg-white text-gray-950 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              🌐 Built Websites ({SITE_DATA.builtWebsites.length})
            </button>
            <button
              onClick={() => setTab("cases")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                tab === "cases"
                  ? "bg-white text-gray-950 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📈 SEO Case Studies ({projects.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Live Built Websites Showcase */}
        {tab === "websites" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SITE_DATA.builtWebsites.map((site, idx) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 hover:border-indigo-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Top Bar with Badge and Live Link */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-bold">
                      <Globe className="w-3.5 h-3.5" />
                      <span>{site.badge}</span>
                    </div>

                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100 group-hover:bg-indigo-600 text-gray-700 group-hover:text-white text-xs font-bold transition-colors"
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                    {site.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-950 mb-3 group-hover:text-indigo-600 transition-colors">
                    {site.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
                    {site.description}
                  </p>

                  {/* URL preview pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono text-gray-600 mb-6">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{site.displayUrl}</span>
                  </div>
                </div>

                {/* Tags and Action */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-[11px] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: SEO Case Studies Architecture */}
        {tab === "cases" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {projects.map((proj, idx) => (
              <div
                key={proj.id}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Left Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Number & Tags */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                      {proj.id} / 03
                    </span>
                    <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold">
                      {proj.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-bold flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      {proj.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-950 leading-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                      {proj.subtitle}
                    </p>
                  </div>

                  {/* Stat Highlight Pill */}
                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center gap-4">
                    <div className="text-2xl sm:text-3xl font-heading font-black text-indigo-600">
                      {proj.stat}
                    </div>
                    <div className="text-xs font-medium text-gray-700">
                      {proj.statLabel}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2.5">
                    {proj.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Chips */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {proj.techs.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-xl bg-gray-100 text-gray-800 text-xs font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Mockup Display Frame */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm rounded-3xl bg-[#0B0C16] text-white p-6 sm:p-8 shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/25 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
                        <span className="font-mono uppercase">{proj.previewHighlights.badge}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>

                      <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-1">
                        Case Overview
                      </div>
                      <h4 className="text-xl font-heading font-bold text-white mb-4">
                        {proj.previewHighlights.title}
                      </h4>

                      <div className="space-y-3 pt-2">
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-indigo-500/30 transition-colors">
                          <div className="text-[10px] text-gray-400 uppercase">Primary Metric</div>
                          <div className="text-sm font-bold text-emerald-400">{proj.previewHighlights.metric}</div>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-indigo-500/30 transition-colors">
                          <div className="text-[10px] text-gray-400 uppercase">Technical Health</div>
                          <div className="text-sm font-bold text-white">{proj.previewHighlights.subMetric}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                      <span>Yawar Abbas Strategy</span>
                      <a
                        href={SITE_DATA.urls.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 group/btn"
                      >
                        <span>Discuss Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};
