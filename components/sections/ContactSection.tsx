"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";
import {
  Mail,
  Copy,
  Check,
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/yaawarabbass@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New SEO Strategy Inquiry",
          message: formData.message,
          _subject: `New SEO Inquiry from ${formData.name}`,
        }),
      });

      if (!res.ok) {
        window.location.href = `mailto:${SITE_DATA.personal.email}?subject=${encodeURIComponent(
          formData.subject || "SEO Strategy Inquiry"
        )}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(
          formData.email
        )}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
      }
    } catch {
      window.location.href = `mailto:${SITE_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || "SEO Strategy Inquiry"
      )}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(
        formData.email
      )}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAFAFC] text-gray-900 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: High Impact Direct Contact Card with Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative h-full p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12142B] via-[#1E2248] to-[#12142B] text-white shadow-2xl border border-indigo-500/20 flex flex-col justify-between overflow-hidden">
              
              {/* Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 w-56 h-56 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"
              />

              <div>
                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-[11px] font-bold uppercase tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  <span>Contact</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight mb-4">
                  Have a project idea? <br />
                  <span className="text-indigo-400 italic font-serif">Let's talk.</span>
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-8">
                  Whether it's an end-to-end SEO growth roadmap, a technical crawl audit, or a custom Generative Engine Optimization (GEO) blueprint — send a message and I'll get back to you within 24 hours.
                </p>

                {/* Direct Email with Animated Copy Button */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-200 truncate">
                      {SITE_DATA.personal.email}
                    </span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Social Links Matrix */}
                <div className="space-y-2">
                  <motion.a
                    whileHover={{ x: 4 }}
                    href={SITE_DATA.urls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-medium text-gray-300 group-hover:text-white">
                      <Linkedin className="w-4 h-4 text-indigo-400" />
                      <span>LinkedIn / yawar-abbass</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 4 }}
                    href={SITE_DATA.urls.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-medium text-gray-300 group-hover:text-white">
                      <Instagram className="w-4 h-4 text-pink-400" />
                      <span>Instagram / yawarabbassss</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </div>

              {/* Bottom Location */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{SITE_DATA.personal.location}</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Clean Contact Form Card with Scroll Entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-xl flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-gray-950 mb-2">
                  Send a message
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-8">
                  Fill in the details below and I'll review your website and growth targets.
                </p>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Subject / Website URL
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. SaaS Organic Growth / https://yoursite.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Message & Goals *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your business, current traffic, and primary SEO objectives..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 text-sm outline-none transition resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 font-heading">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out, {formData.name}. Your inquiry has been sent directly to <span className="font-semibold text-gray-900">{SITE_DATA.personal.email}</span>. I'll get back to you promptly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-6 py-2.5 rounded-full border border-gray-300 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Form Bottom Guarantee */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>Direct Delivery &lt; 24h</span>
                <span className="text-indigo-600 font-semibold">Strict Data Privacy</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
