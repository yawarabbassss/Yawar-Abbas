"use me";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_DATA } from "@/data/siteData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CanvasBackground } from "@/components/CanvasBackground";
import { ArrowUpRight, ArrowDown, Linkedin, CheckCircle2, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-brand-deep text-white overflow-hidden">
      {/* Background Video & Canvas Fallback System */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter blur-[1px]"
            poster="/images/hero-fallback.jpg"
          >
            <source src={SITE_DATA.personal.heroVideoUrl} type="video/mp4" />
          </video>
        ) : null}
        
        {/* Animated Canvas Node Fallback always active behind or when video fails */}
        <CanvasBackground />

        {/* Ambient Dark Emerald Overlay & Grid Texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-deep/85 to-brand-dark/95" />
        <div className="absolute inset-0 bg-[radial-gradient(#1DBF73_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="mint" icon={<Sparkles className="w-3.5 h-3.5 text-brand-emerald" />}>
                SEO Specialist — Punjab, Pakistan
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
              I help founders, SaaS companies, eCommerce brands, and B2B businesses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald via-emerald-300 to-teal-200">
                increase organic visibility
              </span>{" "}
              and generate qualified leads.
            </h1>

            {/* Supporting Subhead */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl font-light leading-relaxed">
              {SITE_DATA.personal.heroSubhead}
            </p>

            {/* Core Differentiator Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 text-xs sm:text-sm text-emerald-200/90 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>Revenue-First SEO</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>High-Intent Traffic</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span>Topical Authority Architecture</span>
              </div>
            </div>

            {/* CTAs Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                href={SITE_DATA.urls.calendly}
                external
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Book a Strategy Call
              </Button>

              <Button
                href={SITE_DATA.urls.newsletter}
                external
                variant="secondary"
                size="lg"
                className="bg-brand-mint text-black font-bold hover:bg-emerald-200 border-brand-emerald/40"
                icon={<ArrowUpRight className="w-4 h-4 text-black" />}
              >
                Subscribe to Newsletter
              </Button>

              <Button
                href="#work"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-brand-emerald hover:text-brand-emerald hover:bg-white/5"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                View My Work
              </Button>
            </div>

            {/* Supporting Social Link */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm text-emerald-200/80">
              <div className="flex items-center gap-2">
                <span>Direct connect:</span>
                <a
                  href={SITE_DATA.urls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-emerald hover:text-white font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Outer Emerald Glow Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-emerald via-teal-400 to-brand-mint rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-brand-dark/90 border border-brand-emerald/30 overflow-hidden shadow-2xl p-3">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-brand-deep">
                  <Image
                    src={SITE_DATA.personal.avatarUrl}
                    alt="Yawar Abbas - SEO Specialist"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-deep/90 backdrop-blur-md border border-brand-emerald/40 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-brand-emerald font-semibold uppercase tracking-wider">
                        SEO Specialist
                      </div>
                      <div className="text-sm font-bold text-white">
                        Yawar Abbas
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-brand-mint bg-brand-emerald/20 px-2.5 py-1 rounded-md border border-brand-emerald/30">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-emerald" />
                      <span>1+ Year Exp</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
