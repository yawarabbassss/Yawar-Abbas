"use me";
"use client";

import React from "react";
import { SITE_DATA } from "@/data/siteData";
import { TrendingUp, ArrowUpRight, Linkedin, Instagram, Facebook, Github, Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-brand-emerald/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-emerald text-brand-deep flex items-center justify-center font-bold text-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                {SITE_DATA.personal.name}
              </span>
            </div>

            <p className="text-sm text-emerald-100/80 font-light max-w-sm leading-relaxed">
              SEO Specialist positioning search optimization as a business growth system for founders, SaaS companies, eCommerce brands, and B2B enterprises.
            </p>

            <div className="flex items-center gap-2 text-xs text-brand-mint pt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-emerald" />
              <span>{SITE_DATA.personal.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-emerald mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80 font-light">
              {SITE_DATA.navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-brand-emerald transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-emerald mb-4">
              Core Focus
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80 font-light">
              <li>Technical SEO Audits</li>
              <li>Keyword & Intent Mapping</li>
              <li>Topical Authority Strategy</li>
              <li>Generative Engine Optimization (GEO)</li>
              <li>Programmatic SEO</li>
              <li>Conversion Optimization</li>
            </ul>
          </div>

          {/* Conversion & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brand-emerald">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={SITE_DATA.urls.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-emerald hover:text-white transition-colors"
              >
                <span>Book a Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={SITE_DATA.urls.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-mint hover:text-brand-emerald transition-colors"
              >
                <span>Subscribe to Newsletter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_DATA.urls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/5 hover:bg-brand-emerald hover:text-brand-deep text-emerald-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_DATA.urls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/5 hover:bg-brand-emerald hover:text-brand-deep text-emerald-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_DATA.urls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/5 hover:bg-brand-emerald hover:text-brand-deep text-emerald-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_DATA.urls.githubPlaceholder}
                className="p-2 rounded-md bg-white/5 hover:bg-brand-emerald hover:text-brand-deep text-emerald-100 transition-colors opacity-60"
                aria-label="GitHub Repository Placeholder"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1 text-xs text-emerald-200/60">
              Direct Contact: <br />
              <a href={`mailto:${SITE_DATA.personal.email}`} className="text-brand-mint hover:underline">
                {SITE_DATA.personal.email}
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex items-center justify-between text-xs text-emerald-200/60 font-light">
          <div>
            © {new Date().getFullYear()} {SITE_DATA.personal.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
