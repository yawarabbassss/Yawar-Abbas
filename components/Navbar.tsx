"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/siteData";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNav = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
  ];

  const rightNav = [
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Capsule Container */}
      <div
        className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0C16]/90 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] text-white"
            : "bg-[#0B0C16]/85 backdrop-blur-lg border border-white/10 shadow-xl text-white"
        }`}
      >
        {/* Left Links */}
        <nav className="hidden md:flex items-center gap-1">
          {leftNav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Center Pill Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/15 border border-white/10 rounded-full transition-all group"
        >
          <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-xs group-hover:scale-105 transition-transform">
            YA
          </div>
          <span className="font-heading font-bold text-xs sm:text-sm tracking-tight text-white flex items-center gap-1">
            YAWAR ABBAS
            <span className="w-1.5 h-1.5 rounded-xs bg-indigo-400" />
          </span>
        </a>

        {/* Right Links */}
        <nav className="hidden md:flex items-center gap-1">
          {rightNav.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Direct Hire Me CTA on Navbar */}
        <a
          href={SITE_DATA.urls.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow-indigo-500/25 ml-1"
        >
          <span>Book Call</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full text-gray-200 hover:text-white hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 bg-[#0B0C16]/95 backdrop-blur-2xl border border-white/15 rounded-2xl p-5 shadow-2xl md:hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            {[...leftNav, ...rightNav].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? "bg-indigo-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
              <a
                href={SITE_DATA.urls.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold shadow-lg"
              >
                <span>Book Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
