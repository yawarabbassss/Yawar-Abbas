"use me";
"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/data/siteData";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  Newspaper,
  Loader2
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form response directly to yaawarabbass@gmail.com via FormSubmit AJAX service
      const res = await fetch("https://formsubmit.co/ajax/yaawarabbass@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "N/A",
          message: formData.message,
          _subject: `New SEO Growth Inquiry from ${formData.name}`,
        }),
      });

      if (!res.ok) {
        // Mailto fallback
        window.location.href = `mailto:${SITE_DATA.personal.email}?subject=SEO Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0ACompany: ${encodeURIComponent(formData.company)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
      }
    } catch (err) {
      // Direct mailto fallback if fetch fails
      window.location.href = `mailto:${SITE_DATA.personal.email}?subject=SEO Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0ACompany: ${encodeURIComponent(formData.company)}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-start max-w-3xl mb-12">
          <Badge variant="mint" className="mb-4">
            Initiate Consultation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-deep tracking-tight leading-tight">
            Let's talk about your growth.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            Whether you need a full technical audit, a high-intent keyword strategy, or an end-to-end SEO roadmap to reach revenue targets—let's discuss your specific scope.
          </p>
        </ScrollReveal>

        {/* Levelled & Symmetrical Two-Column Layout */}
        <ScrollReveal delay={0.1} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Booking & Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Direct Booking Hero Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-deep text-white border border-brand-emerald/30 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-emerald text-brand-deep flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-brand-mint bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Fastest Response
                  </span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Book a Strategy Call
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 mb-6 font-light">
                  Directly schedule a 1-on-1 growth consultation on Calendly.
                </p>
              </div>
              <Button
                href={SITE_DATA.urls.calendly}
                external
                variant="primary"
                size="lg"
                className="w-full"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Book a Strategy Call
              </Button>
            </div>

            {/* Newsletter Subscription Card */}
            <div className="p-6 rounded-2xl bg-brand-mint/40 border border-brand-emerald/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-deep">
                  <Newspaper className="w-4 h-4 text-brand-emerald" />
                  <span>The Search Visibility Playbook</span>
                </div>
                <h4 className="text-base font-bold text-brand-deep font-heading mt-1">
                  Subscribe to My Newsletter
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  Actionable SEO strategies & organic growth insights on LinkedIn.
                </p>
              </div>
              <Button
                href={SITE_DATA.urls.newsletter}
                external
                variant="secondary"
                size="sm"
                className="shrink-0"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Subscribe
              </Button>
            </div>

            {/* Email, Location & Socials Card */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200/90 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Direct Email Link */}
                <a
                  href={`mailto:${SITE_DATA.personal.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 bg-white hover:border-brand-emerald transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-mint text-brand-deep flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-gray-500 uppercase">Email Directly</div>
                    <div className="text-xs font-bold text-brand-deep group-hover:text-brand-emerald transition-colors truncate">
                      {SITE_DATA.personal.email}
                    </div>
                  </div>
                </a>

                {/* Location Display */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 bg-white">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 text-brand-deep flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-gray-500 uppercase">Location</div>
                    <div className="text-xs font-bold text-brand-deep">
                      {SITE_DATA.personal.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Connect Row */}
              <div className="pt-3 border-t border-gray-200/80 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Follow & Connect:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={SITE_DATA.urls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-brand-deep hover:text-white text-brand-deep transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_DATA.urls.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-brand-deep hover:text-white text-brand-deep transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_DATA.urls.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-brand-deep hover:text-white text-brand-deep transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Balanced Working Contact Form Card */}
          <div className="lg:col-span-6 flex flex-col">
            <Card bg="white" className="border border-gray-200 shadow-xl p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold font-heading text-brand-deep mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-gray-600 mb-5">
                  Messages are sent directly to <span className="font-semibold text-brand-deep">yaawarabbass@gmail.com</span>.
                </p>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@yourbrand.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Company / Website URL
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="https://yourbrand.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Project Details & Growth Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your business, current traffic, and primary SEO objectives..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-brand-emerald focus:ring-2 focus:ring-brand-emerald/20 text-sm outline-none transition resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full mt-2"
                      icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message to Yawar"}
                    </Button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-brand-mint text-brand-emerald flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6 text-brand-deep" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-deep font-heading">
                      Message Sent to Yawar!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out, {formData.name}. Your message has been sent directly to <span className="font-semibold text-brand-deep">yaawarabbass@gmail.com</span>. I'll get back to you shortly.
                    </p>
                    <Button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", company: "", message: "" });
                      }}
                      variant="outline"
                      size="sm"
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Response Time: &lt; 24 Hours</span>
                <span className="flex items-center gap-1 text-brand-emerald font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Delivery
                </span>
              </div>
            </Card>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};
