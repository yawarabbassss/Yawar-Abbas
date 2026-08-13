"use me";
"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-20 lg:py-28 bg-brand-light text-gray-900 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-start max-w-3xl mb-16">
          <Badge variant="mint" className="mb-4">
            Track Record & Professional Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-deep tracking-tight">
            Hands-on SEO Execution & Growth Leadership
          </h2>
          <p className="mt-3 text-base text-gray-600 font-light">
            Factual history of growth strategy and search optimization roles across organizations, applications, and regional initiatives.
          </p>
        </ScrollReveal>

        {/* Experience Timeline Grid */}
        <ScrollReveal delay={0.1} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Role Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`text-left p-5 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? "bg-brand-deep text-white border-brand-deep shadow-md transform translate-x-1"
                      : "bg-white text-gray-800 border-gray-200/80 hover:border-brand-emerald/40 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${isActive ? "text-brand-emerald" : "text-brand-deep/70"}`}>
                      {exp.type}
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-brand-emerald" : "text-gray-400"}`} />
                  </div>
                  <h3 className="text-lg font-bold font-heading mt-1">
                    {exp.role}
                  </h3>
                  <div className={`text-sm ${isActive ? "text-emerald-100" : "text-gray-600"}`}>
                    {exp.company}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Role Content Card */}
          <div className="lg:col-span-8">
            {EXPERIENCES.filter((exp) => exp.id === activeTab).map((activeExp) => (
              <Card
                key={activeExp.id}
                bg="white"
                className="shadow-md border border-gray-200 animate-in fade-in-50 duration-300"
              >
                {/* Role Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-brand-emerald bg-brand-mint/60 px-3 py-1 rounded-full border border-brand-emerald/20">
                      {activeExp.type}
                    </span>
                    <h3 className="text-2xl font-extrabold text-brand-deep font-heading mt-3">
                      {activeExp.role} <span className="text-brand-emerald">@ {activeExp.company}</span>
                    </h3>
                  </div>

                  {activeExp.location && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                      <MapPin className="w-3.5 h-3.5 text-brand-deep" />
                      <span>{activeExp.location}</span>
                    </div>
                  )}
                </div>

                {/* Role Overview */}
                <p className="mt-6 text-sm text-gray-700 leading-relaxed font-light">
                  {activeExp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-brand-deep mb-3">
                    Key Focus Areas & Impact
                  </h4>
                  <ul className="space-y-3">
                    {activeExp.keyResponsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills/Tags */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                  {activeExp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gray-100 text-brand-deep px-3 py-1 rounded-md border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};
