"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "@/data/siteData";

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  const nameLetters = SITE_DATA.personal.name.split("");

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-[#0B0C16] text-white flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-widest text-gray-400 uppercase relative z-10"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              PORTFOLIO
            </span>
            <span>© {new Date().getFullYear()}</span>
          </motion.div>

          {/* Center Brand Name with Staggered Letter Reveal */}
          <div className="my-auto text-center flex flex-col items-center justify-center relative z-10">
            <div className="overflow-hidden flex items-baseline justify-center flex-wrap">
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.03,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className={`text-4xl sm:text-7xl md:text-8xl font-heading font-black tracking-tighter uppercase text-white ${
                    char === " " ? "mr-4 sm:mr-6" : ""
                  }`}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="inline-block w-3 h-3 sm:w-5 sm:h-5 bg-indigo-500 ml-2 sm:ml-3 rounded-xs shadow-[0_0_25px_#6366F1]"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs sm:text-sm text-indigo-300 font-medium tracking-widest uppercase mt-4"
            >
              SEO Specialist & Digital Growth
            </motion.p>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full space-y-4 relative z-10"
          >
            <div className="flex items-end justify-between text-xs sm:text-sm text-gray-400 font-medium">
              <div className="max-w-xs hidden sm:block">
                <span className="text-white font-semibold block">{SITE_DATA.personal.title}</span>
                <span className="text-gray-500 text-xs">Punjab, Pakistan • US Remote</span>
              </div>
              <div className="text-4xl sm:text-6xl font-heading font-bold text-white tracking-tight tabular-nums ml-auto">
                {progress}%
              </div>
            </div>

            {/* Loading Bar */}
            <div className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
