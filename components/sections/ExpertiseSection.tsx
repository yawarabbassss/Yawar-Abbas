"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/expertise";
import { Sparkles, Check, Cpu, FileText, TrendingUp, BarChart2, Globe } from "lucide-react";

export const ExpertiseSection: React.FC = () => {
  const categoryIcons = [Cpu, FileText, Sparkles, TrendingUp, BarChart2, Globe];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#FAFAFC] text-gray-900 border-b border-gray-100 relative overflow-hidden">
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
              Skills & Tools
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight">
              My tech stack
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-gray-600 max-w-md font-light leading-relaxed"
          >
            All the tools, frameworks, and search technologies used across technical audits, topical authority architecture, generative AI search, and analytics.
          </motion.p>
        </div>

        {/* Skill Category Cards Grid with Stagger & Interactive Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const num = `0${idx + 1}`;

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 hover:border-indigo-500/40 shadow-sm hover:shadow-2xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-950">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-2xl font-heading font-black text-gray-200 group-hover:text-indigo-600/40 group-hover:scale-110 transition-all duration-300">
                      {num}
                    </span>
                  </div>

                  {/* Skills Tag Cloud with Interactive Hover */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-50 hover:bg-indigo-50/80 text-gray-800 hover:text-indigo-950 text-xs font-semibold border border-gray-200 hover:border-indigo-400/60 shadow-2xs transition-all cursor-default"
                      >
                        <Check className="w-3 h-3 text-indigo-600" />
                        <span>{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Footer status line inside card */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                  <span>{cat.skills.length} core competencies</span>
                  <span className="text-indigo-600 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Verified Execution
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
