"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const WorkSection: React.FC = () => {
  const projects = [
    {
      id: "01",
      title: "Misaq Matchmaking Search Architecture",
      subtitle: "US Registered Mobile Application Platform",
      tag: "Client Project",
      status: "Live",
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
      status: "Active",
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
      status: "Verified",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight">
              Selected projects
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-gray-600 max-w-md font-light leading-relaxed"
          >
            Real search architectures designed, audited, and optimized — engineered to deliver tangible organic growth and qualified demand.
          </motion.p>
        </div>

        {/* Project Case Cards */}
        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
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
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-sm rounded-3xl bg-[#0B0C16] text-white p-6 sm:p-8 shadow-2xl border border-white/10 flex flex-col justify-between relative overflow-hidden group"
                >
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

                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* More Things I've Built / Additional Cards with Stagger */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-lg transition-all"
          >
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 block mb-1">
              Topical Cluster Strategy
            </span>
            <h4 className="text-base font-bold text-gray-900 font-heading mb-2">
              SaaS Organic Lead Generation
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Competitor displacement keyword strategies and intent-mapped landing page architectures.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-lg transition-all"
          >
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 block mb-1">
              eCommerce Taxonomy
            </span>
            <h4 className="text-base font-bold text-gray-900 font-heading mb-2">
              Programmatic SEO Architecture
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Faceted navigation indexation controls and high-volume category structure optimization.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12142B] to-[#0B0C16] text-white border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 block mb-1">
                Private Case Studies
              </span>
              <h4 className="text-base font-bold text-white font-heading mb-2">
                Need Specific Industry Proof?
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                I share customized growth notes and anonymized performance audits for relevant business models.
              </p>
            </div>
            <div className="pt-4">
              <a
                href={SITE_DATA.urls.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-white transition-colors"
              >
                <span>Request Strategy Notes</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
