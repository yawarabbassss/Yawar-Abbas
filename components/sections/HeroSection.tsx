"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";
import { ArrowUpRight, Mail, Sparkles, TrendingUp, Quote, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  // 3D Tilt calculation
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-32 pb-20 lg:pt-36 lg:pb-28 flex flex-col justify-center items-center bg-[#FAFAFC] overflow-hidden select-none"
    >
      {/* Background Animated Gradient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-indigo-300/30 via-purple-200/30 to-teal-100/20 blur-[130px] rounded-full pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Centered Greeting & Main Headline with Stagger */}
        <motion.div
          style={{ opacity: opacityParallax }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          {/* Greeting Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 mb-6 text-xs sm:text-sm font-semibold text-gray-800 hover:scale-105 transition-transform"
          >
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            <span>Hello!</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-5"
          >
            I'm <span className="font-serif italic font-normal text-indigo-600 underline decoration-indigo-200 underline-offset-4">{SITE_DATA.personal.name},</span>
            <br />
            <span className="text-gray-950">{SITE_DATA.personal.title}</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed"
          >
            {SITE_DATA.personal.heroHeadline}
          </motion.p>
        </motion.div>

        {/* Hero Interactive Showcase Layout */}
        <motion.div
          style={{ y: yParallax }}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto"
        >
          
          {/* Left Floating Cards */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 items-start">
            {/* Quote Card with Continuous Float */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.04 }}
              className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] relative cursor-default"
            >
              <Quote className="w-6 h-6 text-indigo-500 mb-2 opacity-80" />
              <p className="text-xs sm:text-sm font-medium text-gray-800 italic leading-relaxed">
                "{SITE_DATA.personal.quote}"
              </p>
              <div className="mt-3 text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                — Yawar Abbas
              </div>
            </motion.div>

            {/* Quick Pill Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm text-xs font-semibold text-gray-800"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
              <span>Revenue-First SEO</span>
            </motion.div>
          </div>

          {/* Centerpiece: 3D Interactive Floating Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center perspective-[1000px]">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{
                rotateX,
                rotateY,
                y: [0, -6, 0],
              }}
              transition={{
                rotateX: { duration: 0.1, ease: "linear" },
                rotateY: { duration: 0.1, ease: "linear" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[320px] sm:max-w-[340px] bg-white rounded-[40px] p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(99,102,241,0.35)] border-[6px] border-gray-900 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_30px_70px_-10px_rgba(99,102,241,0.45)]"
            >
              {/* Phone Dynamic Island */}
              <div className="w-24 h-4 bg-gray-900 rounded-full mx-auto mb-5 flex items-center justify-end px-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500/80" />
              </div>

              {/* Inside Mobile Content */}
              <div className="flex flex-col items-center text-center space-y-4">
                
                {/* Avatar with Animated Radar Ring */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-indigo-400 shadow-md">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={SITE_DATA.personal.avatarUrl}
                      alt={SITE_DATA.personal.name}
                      fill
                      sizes="96px"
                      priority
                      className="object-cover object-top"
                    />
                  </div>
                  {/* Live Pulse Sonar Ring */}
                  <span className="absolute bottom-1 right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
                  </span>
                </div>

                {/* Name & Role */}
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-gray-900">
                    {SITE_DATA.personal.name}
                  </h3>
                  <div className="inline-block px-3 py-1 mt-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-700">
                    {SITE_DATA.personal.title} • Growth
                  </div>
                </div>

                {/* Mini Stats Matrix */}
                <div className="grid grid-cols-2 gap-2.5 w-full pt-1">
                  <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-indigo-50/50 transition-colors">
                    <div className="text-base sm:text-lg font-extrabold text-indigo-600 font-heading">
                      {SITE_DATA.personal.experienceYears}
                    </div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Experience</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:bg-indigo-50/50 transition-colors">
                    <div className="text-base sm:text-lg font-extrabold text-indigo-600 font-heading">100%</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">Data-Driven</div>
                  </div>
                </div>

                {/* Mobile Action Buttons Inside Frame */}
                <div className="w-full space-y-2 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#projects"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={SITE_DATA.urls.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                  >
                    <span>Book a Call</span>
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  </motion.a>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Floating Cards */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 items-end">
            {/* Status Card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] text-right cursor-default"
            >
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600 block mb-1">
                CURRENT ROLE
              </span>
              <h4 className="text-sm font-bold text-gray-900 font-heading">
                SEO & Growth Strategist
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Punjab, Pakistan • Remote
              </p>
            </motion.div>

            {/* AI Search Badge */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 shadow-sm text-xs font-semibold text-gray-800"
            >
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>AI Search (GEO) Ready</span>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
