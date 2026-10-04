"use client";

import React from "react";
import { motion } from "framer-motion";
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
  CheckCircle2,
  Percent
} from "lucide-react";

export const AffiliatesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    hostinger: Server,
    rankytools: Search,
    bolt: Sparkles,
    lovable: Code2,
    replit: Terminal,
  };

  return (
    <section id="discounts" className="py-24 sm:py-32 bg-[#FAFAFC] text-gray-900 border-b border-gray-100 relative overflow-hidden">
      {/* Ambient background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-200/30 via-purple-100/20 to-pink-100/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200/70">
              <Gift className="w-3.5 h-3.5 text-emerald-600" />
              <span>Partner Perks & Discounts</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight">
              Exclusive tool discounts
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-gray-600 max-w-md font-light leading-relaxed"
          >
            Claim verified discounts, bonus credits, and partner perks on hosting, search intelligence tools, and AI software engineering platforms.
          </motion.p>
        </div>

        {/* Affiliate Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.affiliates.map((item, idx) => {
            const Icon = iconMap[item.id] || Tag;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="p-8 rounded-3xl bg-white border border-gray-200/90 hover:border-indigo-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Discount Ribbon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white flex items-center justify-center font-bold transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-bold flex items-center gap-1">
                    <Percent className="w-3 h-3 text-emerald-600" />
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-heading font-extrabold text-gray-950 mb-2">
                    {item.name}
                  </h3>
                  <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs font-semibold text-indigo-900 mb-4 flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{item.offer}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-4 border-t border-gray-100">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gray-950 group-hover:bg-indigo-600 text-white text-xs font-bold transition-all shadow-md group-hover:shadow-indigo-500/25"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparency Note */}
        <div className="mt-12 text-center text-xs text-gray-500">
          <span>💡 Note: Buying through these verified partner links provides exclusive discounts and supports ongoing SEO & tech research.</span>
        </div>

      </div>
    </section>
  );
};
