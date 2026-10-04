"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";
import {
  ArrowUpRight,
  ArrowUp,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Youtube,
  Link as LinkIcon,
  Newspaper,
  Mail,
  MapPin,
  Sparkles
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0C16] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/10 select-none">
      {/* Ambient Pulsing Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout & Circular Hire Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-teal-300">
                great together.
              </span>
            </h2>
          </motion.div>

          {/* Floating Circular Hire Me Button */}
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={SITE_DATA.urls.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 p-1 flex flex-col items-center justify-center text-center text-white shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all duration-300 group shrink-0"
          >
            <ArrowUpRight className="w-6 h-6 mb-1 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xs font-bold uppercase tracking-wider">Book Call</span>
          </motion.a>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-black text-white">
                YA
              </div>
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white">
                {SITE_DATA.personal.name}.
              </span>
            </div>

            <p className="text-gray-400 max-w-sm font-light leading-relaxed">
              {SITE_DATA.personal.title} — Building scalable organic search engines, topical authority clusters, and Generative Engine Optimization (GEO) blueprints.
            </p>

            {/* Newsletter Callout */}
            <div className="pt-2">
              <a
                href={SITE_DATA.urls.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-indigo-300 hover:text-white transition-all text-xs"
              >
                <Newspaper className="w-4 h-4 text-indigo-400" />
                <span>The Search Visibility Playbook</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Bi-weekly
                </span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigate (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-indigo-400">
              NAVIGATE
            </h4>
            <ul className="space-y-2 text-gray-400">
              {SITE_DATA.navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-indigo-400">
              CONTACT
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${SITE_DATA.personal.email}`} className="hover:text-white transition-colors truncate block font-medium">
                  {SITE_DATA.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{SITE_DATA.personal.location}</span>
              </li>
              <li className="pt-2">
                <a
                  href={SITE_DATA.urls.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-bold"
                >
                  <span>Schedule Strategy Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Channels & Hubs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase font-bold tracking-widest text-indigo-400">
              CONNECT & HUBS
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <motion.a
                whileHover={{ y: -3 }}
                href={SITE_DATA.urls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-indigo-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={SITE_DATA.urls.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={SITE_DATA.urls.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gray-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={SITE_DATA.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={SITE_DATA.urls.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Linktree"
                title="Linktree All Links"
              >
                <LinkIcon className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top (Line Removed) */}
        <div className="pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} {SITE_DATA.personal.name}. All rights reserved.
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-white hover:underline transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Massive Outlined Watermark Name */}
        <div className="w-full text-center pt-8 overflow-hidden select-none pointer-events-none">
          <span className="font-heading font-black text-6xl sm:text-9xl md:text-[13vw] tracking-tighter uppercase text-stroke opacity-60 block leading-none hover:opacity-80 transition-opacity">
            {SITE_DATA.personal.name}
          </span>
        </div>

      </div>
    </footer>
  );
};
