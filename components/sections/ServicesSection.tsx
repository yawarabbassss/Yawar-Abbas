"use client";

import React from "react";
import { motion } from "framer-motion";
import { SERVICE_CATEGORIES } from "@/data/services";
import { Compass, Wrench, FileText, Award, Sparkles, Layout, ArrowUpRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Wrench,
    FileText,
    Award,
    Sparkles,
    Layout,
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0B0C16] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Animated Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              What I Do
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              What I build for you
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-gray-400 max-w-md font-light leading-relaxed"
          >
            From the first technical audit to the qualified leads that convert in your pipeline — one growth specialist who drives the entire organic engine.
          </motion.p>
        </div>

        {/* Bento Grid Layout with Staggered Entrance & Hover Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.slice(0, 4).map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Sparkles;
            const number = `0${idx + 1}`;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative p-6 sm:p-8 rounded-3xl bg-[#121424] hover:bg-[#16192E] border border-white/10 hover:border-indigo-500/60 transition-colors duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.35)]"
              >
                <div>
                  {/* Top Row: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-black text-white/20 group-hover:text-indigo-400/50 group-hover:scale-110 transition-all duration-300">
                      {number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Sub-services / Feature Chips */}
                <div>
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {cat.services.map((srv) => (
                      <span
                        key={srv.id}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-medium text-gray-300 border border-white/5 group-hover:border-indigo-500/30 group-hover:text-white transition-colors"
                      >
                        {srv.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Additional Value Banner with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900/30 via-[#121424] to-purple-900/20 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Next-Gen Generative Engine Optimization (GEO)
              </h4>
              <p className="text-xs text-gray-400">
                Optimized for ChatGPT, Google AI Overviews, Perplexity, and LLM search discovery.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shrink-0"
          >
            <span>Request Full Growth Plan</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
