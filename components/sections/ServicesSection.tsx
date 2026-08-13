"use me";
"use client";

import React, { useState } from "react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE_DATA } from "@/data/siteData";
import {
  Compass,
  Cpu,
  FileText,
  Award,
  Sparkles,
  Layout,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Star
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SERVICE_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass": return <Compass className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "FileText": return <FileText className="w-5 h-5" />;
      case "Award": return <Award className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Layout": return <Layout className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-start max-w-3xl mb-12">
          <Badge variant="mint" className="mb-4">
            Specialized SEO & Growth Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-deep tracking-tight">
            Strategic SEO Solutions Built for Business Impact
          </h2>
          <p className="mt-3 text-base text-gray-600 font-light">
            Comprehensive search engine optimization services engineered to generate high-intent pipeline, establish topical dominance, and future-proof AI search visibility.
          </p>
        </ScrollReveal>

        {/* Category Tabs Filter Bar */}
        <ScrollReveal delay={0.1} className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-gray-100">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? "bg-brand-deep text-white shadow-md border border-brand-deep"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200/70 border border-transparent"
                }`}
              >
                <span className={isActive ? "text-brand-emerald" : "text-gray-500"}>
                  {getCategoryIcon(cat.iconName)}
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Active Category Services Grid */}
        {SERVICE_CATEGORIES.filter((cat) => cat.id === activeCategory).map((currentCat) => (
          <ScrollReveal key={currentCat.id} delay={0.15} className="animate-in fade-in-50 duration-300">
            
            {/* Category Description Bar */}
            <div className="mb-8 p-4 rounded-xl bg-brand-mint/30 border border-brand-emerald/20 flex items-center justify-between">
              <p className="text-sm font-medium text-brand-deep">
                {currentCat.description}
              </p>
              <span className="text-xs font-semibold text-brand-emerald uppercase tracking-wider hidden sm:inline-block">
                {currentCat.services.length} Specialized Offerings
              </span>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCat.services.map((service) => (
                <Card
                  key={service.id}
                  bg="white"
                  className="flex flex-col justify-between border border-gray-200/90 hover:border-brand-emerald/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-mint/50 text-brand-deep group-hover:bg-brand-emerald group-hover:text-brand-deep flex items-center justify-center transition-colors">
                        <Zap className="w-5 h-5" />
                      </div>
                      {service.highlighted && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-deep bg-brand-mint px-2.5 py-0.5 rounded-full border border-brand-emerald/30">
                          <Star className="w-3 h-3 text-brand-emerald fill-brand-emerald" /> High Demand
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-brand-deep font-heading mb-2.5 group-hover:text-brand-emerald transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" /> Strategic Focus
                    </span>
                    <a
                      href={SITE_DATA.urls.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-deep group-hover:text-brand-emerald flex items-center gap-1 transition-colors"
                    >
                      <span>Discuss Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>

          </ScrollReveal>
        ))}

        {/* CTA Bar below Services */}
        <ScrollReveal delay={0.2} className="mt-16 text-center p-8 rounded-2xl bg-brand-light border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <h3 className="text-xl font-bold text-brand-deep font-heading">
              Need a custom SEO audit or growth roadmap?
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Let's analyze your current search footprint and structure a clear plan for sustainable organic revenue.
            </p>
          </div>
          <Button
            href={SITE_DATA.urls.calendly}
            external
            variant="primary"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Book an SEO Growth Call
          </Button>
        </ScrollReveal>

      </div>
    </section>
  );
};
