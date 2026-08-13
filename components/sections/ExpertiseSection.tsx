"use me";
"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/expertise";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, Sparkles } from "lucide-react";

export const ExpertiseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", ...SKILL_CATEGORIES.map((c) => c.category)];

  return (
    <section className="py-20 lg:py-28 bg-brand-light text-gray-900 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-start max-w-3xl mb-12">
          <Badge variant="mint" className="mb-4">
            Technical & Strategic Competencies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-deep tracking-tight">
            Expertise Across Modern Search Ecosystems
          </h2>
          <p className="mt-3 text-base text-gray-600 font-light">
            Specialized skill set combining traditional SEO disciplines with cutting-edge AI Generative Engine Optimization (GEO).
          </p>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1} className="flex flex-wrap items-center gap-2 mb-10">
          {filterOptions.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-brand-deep text-brand-emerald shadow-sm border border-brand-deep"
                    : "bg-white text-gray-700 hover:bg-gray-200/70 border border-gray-200"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Category Skills Grid */}
        <ScrollReveal delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.filter(
            (cat) => activeFilter === "All" || cat.category === activeFilter
          ).map((catGroup) => (
            <Card
              key={catGroup.category}
              bg="white"
              className="border border-gray-200/90 hover:border-brand-emerald/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold font-heading text-brand-deep mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>{catGroup.category}</span>
                <Sparkles className="w-4 h-4 text-brand-emerald" />
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gray-50 text-brand-deep text-xs font-semibold border border-gray-200/80 hover:border-brand-emerald hover:bg-brand-mint/30 transition-all"
                  >
                    <Check className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
};
