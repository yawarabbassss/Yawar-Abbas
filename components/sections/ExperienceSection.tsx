"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden">
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
              Career & Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight">
              Work experience
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm sm:text-base text-gray-600 max-w-md font-light leading-relaxed"
          >
            Where I've built organic growth systems, directed search strategy, and scaled digital reach across international and regional markets.
          </motion.p>
        </div>

        {/* Split Timeline List */}
        <div className="space-y-12 relative">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6 sm:p-10 rounded-3xl bg-[#FAFAFC] border border-gray-200/80 hover:border-indigo-500/40 hover:shadow-xl transition-all duration-300"
            >
              {/* Left Column: Company & Dates */}
              <div className="lg:col-span-4 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 text-indigo-900 text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>2026</span>
                  </div>

                  {exp.status && (
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                        exp.id === "misaq"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-emerald-50 text-emerald-800 border-emerald-200"
                      }`}
                    >
                      {exp.status}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-gray-950 tracking-tight">
                  {exp.company}
                </h3>

                {exp.location && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{exp.location}</span>
                  </div>
                )}

                {exp.type && (
                  <div className="inline-block text-xs font-semibold px-3 py-1 rounded-xl bg-gray-200/70 text-gray-700">
                    {exp.type}
                  </div>
                )}
              </div>

              {/* Right Column: Role & Key Contributions */}
              <div className="lg:col-span-8 space-y-4">
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-indigo-900">
                  {exp.role}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 pt-2">
                  {exp.keyResponsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tags Chips */}
                <div className="pt-4 border-t border-gray-200 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 hover:border-indigo-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
