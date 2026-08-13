"use me";
"use client";

import React from "react";
import { SITE_DATA } from "@/data/siteData";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, TrendingUp, Search, Cpu, Building2, ShoppingBag, Rocket, Briefcase } from "lucide-react";

export const AboutSection: React.FC = () => {
  const audienceIcons = [Rocket, Building2, ShoppingBag, Briefcase];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-start max-w-3xl mb-16">
          <Badge variant="mint" className="mb-4">
            About Me & Growth Philosophy
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-deep tracking-tight leading-tight">
            I’m an SEO Specialist focused on helping businesses turn search visibility into{" "}
            <span className="text-brand-emerald">meaningful business growth.</span>
          </h2>
        </ScrollReveal>

        {/* Philosophy Highlight Banner */}
        <ScrollReveal delay={0.1} className="mb-16 p-8 sm:p-10 rounded-2xl bg-brand-deep text-white relative overflow-hidden shadow-lg border border-brand-emerald/20">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-widest text-brand-emerald font-semibold mb-2">
                Core Philosophy
              </div>
              <blockquote className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                "{SITE_DATA.personal.philosophy}"
              </blockquote>
              <p className="mt-4 text-emerald-100/90 text-sm sm:text-base font-light leading-relaxed">
                Keyword rankings are an interim indicator, not the end goal. A #1 ranking that yields zero qualified buyers is a wasted effort. True search engine optimization elevates pipeline velocity, attracts decision-makers, and compounds organic MRR.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-4xl font-extrabold text-brand-emerald font-heading">
                {SITE_DATA.personal.experienceYears}
              </div>
              <div className="text-sm font-medium text-emerald-200 mt-1">
                Hands-on SEO & Digital Growth Experience
              </div>
              <div className="text-xs text-emerald-300/70 mt-2">
                Faisalabad & US Remote Projects
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-Step Strategic Approach Architecture */}
        <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card bg="light" className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-deep flex items-center justify-center font-bold mb-5">
                <Search className="w-6 h-6 text-brand-deep" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep mb-3 font-heading">
                1. Understand & Align
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                First, I deeply analyze your business model, target audience, competitors, commercial margins, and revenue objectives to establish precise search goals.
              </p>
            </div>
          </Card>

          <Card bg="light" className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-deep flex items-center justify-center font-bold mb-5">
                <Cpu className="w-6 h-6 text-brand-deep" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep mb-3 font-heading">
                2. Strategic Build & Authority
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Then, I build a holistic SEO strategy combining technical perfection, high-intent targeting, topical authority clusters, internal linking, and white-hat outreach.
              </p>
            </div>
          </Card>

          <Card bg="light" className="flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-mint text-brand-deep flex items-center justify-center font-bold mb-5">
                <TrendingUp className="w-6 h-6 text-brand-deep" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep mb-3 font-heading">
                3. Optimize & Scale
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Finally, we continuously measure traffic quality, track conversions, refine existing assets, and aggressively scale high-performing organic acquisition pathways.
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Primary Audience Target Grid */}
        <ScrollReveal delay={0.3}>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-deep font-heading">
              Who I Partner With
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Customized SEO strategies tailored to specific business models and audience profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_DATA.audience.map((item, idx) => {
              const IconComp = audienceIcons[idx % audienceIcons.length];
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-xl border border-gray-200/80 bg-white hover:border-brand-emerald/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-brand-deep group-hover:bg-brand-emerald group-hover:text-brand-deep flex items-center justify-center transition-colors mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-brand-deep font-heading mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
