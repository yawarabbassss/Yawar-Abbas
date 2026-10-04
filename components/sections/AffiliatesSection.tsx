"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";
import {
  Server,
  Search,
  Sparkles,
  Code2,
  Terminal,
  ArrowUpRight,
  Gift,
  Tag,
  Percent,
  Copy,
  Check,
  CheckCircle2,
  Zap,
  ExternalLink
} from "lucide-react";

export const AffiliatesSection: React.FC = () => {
  const [activeAffiliateId, setActiveAffiliateId] = useState<string>("hostinger");
  const [copiedCode, setCopiedCode] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    hostinger: Server,
    rankytools: Search,
    bolt: Sparkles,
    lovable: Code2,
    replit: Terminal,
  };

  const activeItem =
    SITE_DATA.affiliates.find((a) => a.id === activeAffiliateId) ||
    SITE_DATA.affiliates[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText("YAWARABBAS");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // 5 Nodes positioned evenly around a circle (360 / 5 = 72 deg spacing)
  // Angles: -90 (top), -18 (top-right), 54 (bottom-right), 126 (bottom-left), 198 (top-left)
  const nodeAngles = [-90, -18, 54, 126, 198];

  return (
    <section id="discounts" className="py-24 sm:py-32 bg-[#FAFAFC] text-gray-900 border-b border-gray-100 relative overflow-hidden">
      {/* Ambient Radial Gradient Glows in Purple Palette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-300/25 via-purple-200/20 to-pink-200/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200/80 shadow-2xs"
          >
            <Gift className="w-3.5 h-3.5 text-indigo-600" />
            <span>Curated Partner Ecosystem & Perks</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight mb-4"
          >
            Exclusive tool discounts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 font-normal max-w-2xl leading-relaxed"
          >
            Click or hover over any node in the circular orbit to claim verified partner discounts, coupon codes, and bonus access for high-growth software and hosting.
          </motion.p>
        </div>

        {/* Circular Satellite Orbit Hub (Purplish Aesthetic) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left / Center Radial Interactive Orbit Diagram */}
          <div className="lg:col-span-7 flex justify-center items-center py-6 sm:py-10">
            <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center select-none">
              
              {/* Outer Orbit Dotted Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-300/60 sm:border-indigo-400/50 animate-[spin_60s_linear_infinite]" />
              
              {/* Inner Orbit Solid Ring */}
              <div className="absolute inset-10 sm:inset-14 rounded-full border border-indigo-200/60" />

              {/* Center Core Node: Written "Discounts" */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-500 shadow-[0_0_45px_rgba(99,102,241,0.4)] flex items-center justify-center cursor-default"
              >
                <div className="w-full h-full rounded-full bg-[#0B0C16] flex flex-col items-center justify-center text-center p-2 border-2 border-white/20">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 mb-1 animate-pulse" />
                  <span className="text-xs sm:text-sm font-heading font-extrabold text-white uppercase tracking-wider">
                    Discounts
                  </span>
                </div>
              </motion.div>

              {/* Orbiting Satellite Nodes */}
              {SITE_DATA.affiliates.map((item, idx) => {
                const Icon = iconMap[item.id] || Tag;
                const angle = nodeAngles[idx];
                const isActive = item.id === activeAffiliateId;

                const rad = (angle * Math.PI) / 180;

                return (
                  <div
                    key={item.id}
                    className="absolute z-30 flex flex-col items-center"
                    style={{
                      transform: `translate(${Math.cos(rad) * (typeof window !== "undefined" && window.innerWidth < 640 ? 120 : 170)}px, ${Math.sin(rad) * (typeof window !== "undefined" && window.innerWidth < 640 ? 120 : 170)}px)`,
                    }}
                  >
                    {/* Satellite Button */}
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveAffiliateId(item.id)}
                      className="relative flex flex-col items-center gap-1.5 p-2 transition-all cursor-pointer group"
                    >
                      {/* Circular Icon Node with Purple Ring */}
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                          isActive
                            ? "bg-indigo-600 text-white ring-4 ring-indigo-200 ring-offset-2 scale-110 shadow-indigo-600/40"
                            : "bg-white text-indigo-600 border-2 border-indigo-300 hover:border-indigo-600 hover:bg-indigo-50/80"
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>

                      {/* Pill Label Tag */}
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap shadow-sm border transition-all ${
                          isActive
                            ? "bg-gray-950 text-white border-gray-950 scale-105"
                            : "bg-white text-gray-800 border-indigo-200 group-hover:border-indigo-500 group-hover:text-indigo-950"
                        }`}
                      >
                        {item.name}
                      </span>
                    </motion.button>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Right Spotlight Detail Card (Purple Theme) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-indigo-500/30 shadow-[0_20px_50px_-15px_rgba(99,102,241,0.25)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-bold flex items-center gap-1.5">
                      <Percent className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{activeItem.badge}</span>
                    </span>

                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {activeItem.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-3xl font-heading font-extrabold text-gray-950 mb-2">
                    {activeItem.name}
                  </h3>
                  <p className="text-xs font-bold text-indigo-600 mb-4">
                    {activeItem.tagline}
                  </p>

                  {/* Discount Offer Highlight Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border border-indigo-200 mb-5 flex items-start gap-3">
                    <Gift className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider">Exclusive Deal</div>
                      <div className="text-xs sm:text-sm font-extrabold text-gray-900">{activeItem.offer}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {activeItem.description}
                  </p>

                  {/* Coupon Code Copy Button for Hostinger */}
                  {activeItem.id === "hostinger" && (
                    <div className="mb-6 p-3 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 text-xs">
                        <Tag className="w-4 h-4 text-indigo-600" />
                        <span className="font-mono font-bold text-gray-900">Code: YAWARABBAS</span>
                      </div>
                      <button
                        onClick={handleCopyCode}
                        className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Primary CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={activeItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
                  >
                    <span>{activeItem.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Quick Links Grid for Mobile / Fast Claiming */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SITE_DATA.affiliates.map((item) => {
            const Icon = iconMap[item.id] || Tag;
            const isSel = item.id === activeAffiliateId;

            return (
              <button
                key={item.id}
                onClick={() => setActiveAffiliateId(item.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSel
                    ? "bg-indigo-50 border-indigo-500 shadow-md ring-2 ring-indigo-200"
                    : "bg-white border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-900 truncate">{item.name}</span>
                </div>
                <div className="text-[10px] text-indigo-700 font-semibold truncate">{item.badge}</div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
