"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { X, ArrowUpRight } from "lucide-react";

export default function WhatsAppButton() {
  const { theme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    // Subtle auto-greeting preview after 3 seconds if not dismissed
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const whatsappUrl =
    "https://wa.me/94771234567?text=" +
    encodeURIComponent(
      "Hello Neluweera Design Studio, I would like to inquire about a bespoke interior architecture commission."
    );

  return (
    <aside
      aria-label="Direct Studio Contact via WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* LUXURY EDITORIAL CONCIERGE PREVIEW BUBBLE */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto mb-3.5 w-72 sm:w-80 p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-xl border transition-all duration-500 ${
              isDark
                ? "bg-[#1E1D19]/95 border-[#41D2CB]/30 text-[#F5F3EE] shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(65,210,203,0.15)]"
                : "bg-[#FFFFFF]/95 border-[#171714]/15 text-[#171714] shadow-[0_20px_50px_rgba(23,23,20,0.12)]"
            }`}
          >
            {/* Header with Live Status */}
            <div className="flex items-start justify-between pb-3 border-b border-[#919297]/15">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm font-semibold tracking-wider transition-colors duration-500 ${
                      isDark
                        ? "bg-[#252420] text-[#41D2CB] border border-[#41D2CB]/40"
                        : "bg-[#FAF8F5] text-[#171714] border border-[#171714]/10"
                    }`}
                  >
                    N
                  </div>
                  {/* Glowing live online pip */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#1E1D19] dark:border-[#171714]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-normal tracking-tight text-[#171714] dark:text-[#F5F3EE]">
                    Neluweera Concierge
                  </h4>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-[10px] font-sans tracking-[0.18em] uppercase text-[#919297]">
                      Direct Atelier Line &bull; Online
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setDismissed(true)}
                className="text-[#919297] hover:text-[#171714] dark:hover:text-[#F5F3EE] p-1 transition-colors"
                aria-label="Dismiss message preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Concierge Message */}
            <p className="text-xs sm:text-[13px] font-sans font-light leading-relaxed my-3.5 text-[#817C72] dark:text-[#B8B3A8]">
              Have a question regarding an upcoming commission or private consultation? Chat directly with our architectural team.
            </p>

            {/* Direct Link Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-sans font-medium tracking-[0.16em] uppercase flex items-center justify-center space-x-2 transition-all duration-300 group ${
                isDark
                  ? "bg-[#41D2CB] text-[#171714] hover:bg-[#2AA8A1] shadow-[0_0_20px_rgba(65,210,203,0.35)]"
                  : "bg-[#171714] text-[#F5F3EE] hover:bg-[#2A2925] shadow-md"
              }`}
            >
              <span>Connect on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION TRIGGER */}
      <div className="relative pointer-events-auto flex items-center">
        {/* Subtle hover pill label for desktop */}
        <div
          className={`hidden md:flex items-center space-x-2 mr-3 px-3.5 py-1.5 rounded-full text-[11px] font-sans tracking-[0.18em] uppercase shadow-lg backdrop-blur-md border pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 ${
            isDark
              ? "bg-[#1E1D19]/90 border-[#41D2CB]/30 text-[#F5F3EE]"
              : "bg-[#FFFFFF]/90 border-[#171714]/15 text-[#171714]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
          <span>Direct Line</span>
        </div>

        {/* Ambient Radar Pulse Rings (Theme-Aware Animating) */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              animate={{
                scale: [1, 1.85],
                opacity: isDark ? [0.55, 0] : [0.35, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className={`absolute inset-0 rounded-full pointer-events-none transition-colors duration-500 ${
                isDark ? "bg-[#41D2CB]/30" : "bg-[#25D366]/25"
              }`}
            />
            <motion.div
              animate={{
                scale: [1, 1.45],
                opacity: isDark ? [0.45, 0] : [0.25, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 0.9,
                ease: "easeOut",
              }}
              className={`absolute inset-0 rounded-full pointer-events-none transition-colors duration-500 ${
                isDark ? "bg-[#41D2CB]/25" : "bg-[#41D2CB]/20"
              }`}
            />
          </>
        )}

        {/* Primary Interactive Floating WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Atelier Connection"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, -5, 0],
                }
          }
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          onMouseEnter={() => {
            if (!dismissed) setShowTooltip(true);
          }}
          className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl border backdrop-blur-md transition-all duration-500 group cursor-pointer ${
            isDark
              ? "bg-[#1E1D19]/90 border-[#41D2CB]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(65,210,203,0.25)] hover:border-[#41D2CB] hover:shadow-[0_10px_35px_rgba(65,210,203,0.4)]"
              : "bg-[#FFFFFF]/95 border-[#171714]/15 shadow-[0_10px_30px_rgba(23,23,20,0.12),0_0_15px_rgba(37,211,102,0.15)] hover:border-[#41D2CB] hover:shadow-[0_10px_35px_rgba(37,211,102,0.3)]"
          }`}
        >
          {/* Vector SVG WhatsApp Glyph */}
          <div className="relative">
            <svg
              viewBox="0 0 32 32"
              className={`w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 group-hover:scale-110 ${
                isDark
                  ? "text-[#41D2CB] drop-shadow-[0_0_10px_rgba(65,210,203,0.65)]"
                  : "text-[#25D366] drop-shadow-[0_2px_6px_rgba(37,211,102,0.3)]"
              }`}
              fill="currentColor"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.664.743 5.158 2.035 7.29L2.6 29.4l6.295-1.418A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm8.172 20.082c-.34.957-1.7 1.838-2.766 2.066-.732.155-1.688.28-4.908-1.054-4.116-1.705-6.758-5.885-6.963-6.158-.205-.273-1.666-2.217-1.666-4.229 0-2.012 1.054-3 1.428-3.41.375-.41.818-.512 1.09-.512.273 0 .546.002.784.014.252.012.59-.096.924.707.34.82 1.159 2.83 1.26 3.036.103.205.172.444.034.717-.136.273-.205.443-.41.682-.205.24-.43.534-.614.717-.205.205-.42.427-.18.837.24.41 1.065 1.758 2.285 2.846 1.57 1.398 2.894 1.83 3.303 2.035.41.205.648.17.887-.103.24-.273 1.023-1.194 1.296-1.603.273-.41.546-.34.92-.205.375.137 2.385 1.125 2.794 1.33.41.205.682.307.784.478.102.17.102.99-.238 1.947z" />
            </svg>

            {/* Glowing online micro-pip */}
            <span
              className={`absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-500 ${
                isDark
                  ? "bg-[#41D2CB] border-[#1E1D19]"
                  : "bg-[#25D366] border-[#FFFFFF]"
              }`}
            />
          </div>
        </motion.a>
      </div>
    </aside>
  );
}
