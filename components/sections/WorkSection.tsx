"use me";
"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE_DATA } from "@/data/siteData";
import { FolderGit2, ArrowUpRight, Lock } from "lucide-react";

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-20 lg:py-28 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-start max-w-3xl mb-16">
          <Badge variant="mint" className="mb-4">
            Client Work & Case Studies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-deep tracking-tight">
            Proof & Portfolio Architecture
          </h2>
          <p className="mt-3 text-base text-gray-600 font-light">
            Public case studies and strategic breakdowns are currently being compiled for NDA compliance and verified publishing.
          </p>
        </ScrollReveal>

        {/* Coming Soon Feature Card */}
        <ScrollReveal delay={0.1} className="p-8 sm:p-12 rounded-2xl bg-brand-light border border-gray-200 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto flex flex-col items-center">
            
            <div className="w-16 h-16 rounded-2xl bg-brand-mint text-brand-deep flex items-center justify-center font-bold mb-6 shadow-xs">
              <FolderGit2 className="w-8 h-8 text-brand-deep" />
            </div>

            <Badge variant="emerald" className="mb-3">
              Case Studies Coming Soon
            </Badge>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-brand-deep">
              Detailed Growth Breakdowns in Progress
            </h3>

            <p className="mt-4 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              I operate with strict data integrity. Rather than publishing unverified metrics or boilerplate templates, detailed technical case studies detailing industry challenges, topical cluster blueprints, and organic growth trajectories will be released here.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200/80 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={SITE_DATA.urls.calendly}
                external
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Discuss Your Specific Use Case
              </Button>
              <Button
                href={`mailto:${SITE_DATA.personal.email}`}
                variant="outline"
                size="md"
              >
                Request Private Strategy Notes
              </Button>
            </div>

          </div>
        </ScrollReveal>

        {/* Modular Case Study Blueprint Preview */}
        <ScrollReveal delay={0.2} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-75">
          <Card bg="white" className="border border-dashed border-gray-300">
            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
              <span>SaaS Sector</span>
              <Lock className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-lg font-bold text-gray-700 font-heading mb-2">
              SaaS Organic Lead Engine
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Structured competitor displacement landing pages and commercial keyword mapping.
            </p>
          </Card>

          <Card bg="white" className="border border-dashed border-gray-300">
            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
              <span>eCommerce</span>
              <Lock className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-lg font-bold text-gray-700 font-heading mb-2">
              Programmatic Taxonomy SEO
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Facet indexation control and high-volume category structure optimization.
            </p>
          </Card>

          <Card bg="white" className="border border-dashed border-gray-300">
            <div className="flex items-center justify-between text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
              <span>B2B Services</span>
              <Lock className="w-3.5 h-3.5" />
            </div>
            <h4 className="text-lg font-bold text-gray-700 font-heading mb-2">
              Topical Authority Cluster
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Pillar content hub engineering to capture high-ticket B2B search demand.
            </p>
          </Card>
        </ScrollReveal>

      </div>
    </section>
  );
};
