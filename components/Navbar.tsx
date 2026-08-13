"use me";
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/siteData";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-emerald rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-full border-2 border-brand-emerald overflow-hidden relative shadow-xs shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src={SITE_DATA.personal.avatarUrl}
              alt="Yawar Abbas"
              fill
              sizes="36px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-gray-900 text-lg tracking-tight leading-tight group-hover:text-brand-deep transition-colors">
              {SITE_DATA.personal.name}
            </span>
            <span className="text-xs font-medium text-brand-deep/70 tracking-wide">
              {SITE_DATA.personal.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {SITE_DATA.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-deep hover:bg-gray-100/70 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href={SITE_DATA.urls.calendly}
            external
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Book a Strategy Call
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-emerald"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {SITE_DATA.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-gray-800 hover:bg-brand-mint/30 hover:text-brand-deep rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2.5">
              <Button
                href={SITE_DATA.urls.calendly}
                external
                variant="primary"
                size="md"
                className="w-full"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Book a Strategy Call
              </Button>
              <Button
                href={`mailto:${SITE_DATA.personal.email}`}
                variant="outline"
                size="md"
                className="w-full"
              >
                Email Yawar
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
