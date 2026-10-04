"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowUpRight, CheckCircle2, MapPin, Mail, Briefcase, Award, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-gray-900 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: High-Impact Core Strengths Card with Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12142B] via-[#1E2248] to-[#12142B] text-white shadow-2xl border border-indigo-500/20 flex flex-col justify-between overflow-hidden group">
              
              {/* Animated subtle glow circle */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-56 h-56 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"
              />

              <div>
                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Core Strengths</span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-tight mb-8">
                  From technical audit <br />
                  <span className="text-indigo-400 italic font-serif">to revenue growth.</span>
                </h3>

                {/* Checklist with Sequential Delay */}
                <div className="space-y-3.5">
                  {[
                    "Revenue-First SEO Strategy",
                    "Topical Authority & Content Hubs",
                    "AI Search & Generative Optimization (GEO)",
                    "Comprehensive Technical & Indexation Audits",
                    "High-Intent Keyword Precision",
                  ].map((strength, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/5 transition-colors cursor-default"
                    >
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-200">
                        {strength}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-400 italic">
                "{SITE_DATA.personal.quote}"
              </div>

            </div>
          </motion.div>

          {/* Right Column: About Details & Matrix with Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                About Me
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-gray-950 tracking-tight leading-tight mb-6">
                Why hire me?
              </h2>

              {/* Main Bio Paragraph */}
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-4">
                {SITE_DATA.personal.heroSubhead}
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                {SITE_DATA.personal.philosophy} Whether executing deep technical audits for enterprise web platforms, crafting semantic topical clusters for specialized startups, or engineering Generative Engine Optimization (GEO) for AI search engines, my mission is always aligned with your commercial targets.
              </p>
            </div>

            {/* Quick Info Matrix Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-3 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Based in</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{SITE_DATA.personal.location}</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-3 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 truncate">{SITE_DATA.personal.email}</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-3 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Experience</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{SITE_DATA.personal.experienceYears} Hands-on</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-start gap-3 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Currently</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{SITE_DATA.personal.title}</div>
                </div>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href={SITE_DATA.urls.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-indigo-600/25"
              >
                <span>Hire me</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${SITE_DATA.personal.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-bold transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Email Directly</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

        {/* Live Counter Statistics Bar with AnimatedCounter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-6 rounded-3xl bg-[#FAFAFC] border border-gray-200/80 text-center hover:border-indigo-400 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-600 mb-1">
              <AnimatedCounter to={1} suffix="+ Year" />
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Hands-on SEO
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAFAFC] border border-gray-200/80 text-center hover:border-indigo-400 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-600 mb-1">
              <AnimatedCounter to={100} suffix="%" />
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Data-Driven Growth
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAFAFC] border border-gray-200/80 text-center hover:border-indigo-400 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-600 mb-1">
              <AnimatedCounter to={4} suffix="+ Disciplines" />
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Key Verticals
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAFAFC] border border-gray-200/80 text-center hover:border-indigo-400 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-600 mb-1">
              &lt; 24h
            </div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Response Time
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
