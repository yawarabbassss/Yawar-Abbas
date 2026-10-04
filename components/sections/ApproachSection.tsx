"use client";

import React from "react";
import { motion } from "framer-motion";
import { APPROACH_STEPS } from "@/data/approach";
import { Target, Search, Layers, TrendingUp, CheckCircle2, Award, ShieldCheck } from "lucide-react";

export const ApproachSection: React.FC = () => {
  const icons = [Target, Search, Layers, TrendingUp];

  return (
    <section id="approach" className="py-24 sm:py-32 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden">
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
              Methodology & Credentials
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight">
              Learning & methodology
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-gray-600 max-w-md font-light leading-relaxed"
          >
            A battle-tested 4-step strategic framework turning complex search algorithms into reliable organic revenue channels.
          </motion.p>
        </div>

        {/* 4 Steps Grid with Stagger & Card Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {APPROACH_STEPS.map((step, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="p-8 rounded-3xl bg-[#FAFAFC] border border-gray-200/80 hover:border-indigo-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-700 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-3xl font-heading font-black text-gray-200 group-hover:text-indigo-600/30 group-hover:scale-110 transition-all duration-300">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-gray-950 mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-600 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  {step.details.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Credentials & Verified Badges Bar with Scroll Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 border border-indigo-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900">
                Continuous Education & AI Search Research
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Constantly testing Generative Engine Optimization (GEO), Google core algorithm updates, and LLM answer indexing.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-indigo-200 text-indigo-900 text-xs font-bold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              White-Hat Strict
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
