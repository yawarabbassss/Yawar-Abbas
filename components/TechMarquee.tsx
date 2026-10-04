"use client";

import React from "react";
import { Sparkles, TrendingUp, Search, Database, Wrench, Layers, Zap, Globe, BarChart2, ShieldCheck, Target } from "lucide-react";

export const TechMarquee: React.FC = () => {
  const items = [
    { label: "Technical SEO", icon: Wrench },
    { label: "Google Search Console", icon: BarChart2 },
    { label: "Google Analytics 4", icon: TrendingUp },
    { label: "Ahrefs & SEMrush", icon: Search },
    { label: "Generative Engine Optimization (GEO)", icon: Sparkles },
    { label: "Topical Authority Clusters", icon: Layers },
    { label: "Schema & JSON-LD", icon: Database },
    { label: "Programmatic SEO", icon: Zap },
    { label: "Keyword Intent Mapping", icon: Target },
    { label: "Conversion Rate Optimization (CRO)", icon: ShieldCheck },
    { label: "WordPress & Web SEO", icon: Globe },
  ];

  return (
    <div className="relative w-full py-6 sm:py-8 bg-[#0B0C16] text-white border-y border-white/10 overflow-hidden select-none group">
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#0B0C16] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#0B0C16] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track with group-hover:pause */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] space-x-4 sm:space-x-6">
        {[...items, ...items, ...items].map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 text-xs sm:text-sm font-semibold tracking-wide text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] shrink-0 cursor-default"
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              <span>{tech.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
