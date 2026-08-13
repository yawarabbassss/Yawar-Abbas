"use me";
"use client";

import React, { useState } from "react";
import { APPROACH_STEPS } from "@/data/approach";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CheckCircle2, ArrowRight, Target, Zap, ShieldCheck } from "lucide-react";
import { SITE_DATA } from "@/data/siteData";

export const ApproachSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string>(APPROACH_STEPS[0].step);

  return (
    <section id="approach" className="py-20 lg:py-28 bg-brand-deep text-white relative overflow-hidden">
      
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-start max-w-3xl mb-16">
          <Badge variant="mint" className="mb-4">
            Methodology & Framework
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            How I Approach SEO
          </h2>
          <p className="mt-3 text-base text-emerald-100/90 font-light">
            A battle-tested 7-stage SEO framework designed to turn search engines into predictable lead generators.
          </p>
        </ScrollReveal>

        {/* Central Philosophy Callout Banner */}
        <ScrollReveal className="mb-16 p-6 sm:p-8 rounded-2xl bg-brand-dark/90 border border-brand-emerald/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-emerald text-brand-deep flex items-center justify-center font-extrabold text-xl shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-emerald">
                Guiding Principle
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white mt-0.5">
                "{SITE_DATA.personal.quote}"
              </h3>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-emerald-200/80 font-light max-w-md">
            Every audit, content cluster, and technical fix is executed with direct attribution back to customer acquisition and pipeline velocity.
          </div>
        </ScrollReveal>

        {/* 7-Step Interactive Journey Grid - Levelled & Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Step Selector List (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {APPROACH_STEPS.map((item) => {
              const isActive = item.step === selectedStep;
              return (
                <button
                  key={item.step}
                  onClick={() => setSelectedStep(item.step)}
                  className={`text-left p-4 sm:p-4.5 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                    isActive
                      ? "bg-brand-emerald text-brand-deep font-bold border-brand-emerald shadow-lg transform translate-x-1"
                      : "bg-white/5 text-emerald-100 border-white/10 hover:bg-white/10 hover:border-brand-emerald/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-base font-extrabold font-heading px-2.5 py-1 rounded-md ${
                      isActive ? "bg-brand-deep text-brand-emerald" : "bg-white/10 text-brand-mint"
                    }`}>
                      {item.step}
                    </span>
                    <div>
                      <div className="text-base font-bold font-heading">{item.title}</div>
                      <div className={`text-xs ${isActive ? "text-brand-deep/80" : "text-emerald-200/70"}`}>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isActive ? "text-brand-deep" : "text-emerald-300/50"}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Step Content View (Right) - Equal Height to Left */}
          <div className="lg:col-span-7 flex flex-col">
            {APPROACH_STEPS.filter((item) => item.step === selectedStep).map((activeStep) => (
              <div
                key={activeStep.step}
                className="p-8 sm:p-10 rounded-2xl bg-brand-dark/95 border border-brand-emerald/40 shadow-2xl animate-in fade-in-50 duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-brand-emerald">
                        Stage {activeStep.step} of 07
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                        {activeStep.title} — <span className="text-brand-emerald">{activeStep.subtitle}</span>
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-emerald-100 text-sm sm:text-base leading-relaxed font-light">
                    {activeStep.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-emerald mb-4">
                      Actionable Deliverables in this Stage
                    </h4>
                    <ul className="space-y-3.5">
                      {activeStep.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-emerald-50 font-light">
                          <CheckCircle2 className="w-5 h-5 text-brand-emerald mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Milestone Bar ensuring perfect height matching */}
                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-emerald-200/80">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-emerald" />
                    <span>Systematic Execution Stage</span>
                  </div>
                  <span className="flex items-center gap-1 text-brand-emerald font-semibold">
                    <ShieldCheck className="w-4 h-4" /> Revenue Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
