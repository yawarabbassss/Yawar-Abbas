"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-gray-900 selection:bg-indigo-600 selection:text-white relative">
      {/* Intro Preloader Animation */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Floating Capsule Glassmorphic Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Mobile Frame Showcase */}
        <HeroSection />

        {/* Infinite Looping Tech Marquee Ticker */}
        <TechMarquee />

        {/* What I Build For You / Services Bento Grid (Dark) */}
        <ServicesSection />

        {/* Why Hire Me? Core Strengths & Bio Matrix */}
        <AboutSection />

        {/* My Tech Stack / Skills Categorized */}
        <ExpertiseSection />

        {/* Work Experience Split Timeline */}
        <ExperienceSection />

        {/* Selected Projects & Live Case Studies */}
        <WorkSection />

        {/* Learning & Credentials / 4-Step Methodology */}
        <ApproachSection />

        {/* Have a project idea? Let's talk (Contact Section) */}
        <ContactSection />
      </main>

      {/* Signature Footer with Circular Hire Me Button & Big Watermark */}
      <Footer />
    </div>
  );
}
