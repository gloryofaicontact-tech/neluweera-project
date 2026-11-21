"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function LampThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isPulling, setIsPulling] = useState(false);
  const ropeControls = useAnimation();
  const lampControls = useAnimation();

  const isLight = theme === "light";

  const playClickSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      // Crisp mechanical pull-switch click sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      // Click attack
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);

      // Follow-up metallic resonance
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(320, ctx.currentTime + 0.02);
      osc2.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.09);
      gain2.gain.setValueAtTime(0.12, ctx.currentTime + 0.02);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.02);
      osc2.stop(ctx.currentTime + 0.09);
    } catch {
      // AudioContext policy or unsupported
    }
  };

  const handlePull = async () => {
    if (isPulling) return;
    setIsPulling(true);
    playClickSound();

    // Rope stretching animation (pull down then spring back with overshoot)
    await Promise.all([
      ropeControls.start({
        y: [0, 20, -3, 0],
        transition: { duration: 0.45, ease: [0.175, 0.885, 0.32, 1.275] },
      }),
      lampControls.start({
        rotate: [0, -2, 2, -1, 0],
        transition: { duration: 0.6, ease: "easeOut" },
      }),
    ]);

    toggleTheme();
    setIsPulling(false);
  };

  return (
    <div
      className="relative flex flex-col items-center select-none cursor-pointer group"
      onClick={handlePull}
      title={`Click or pull rope to switch to ${isLight ? "Dark" : "Light"} Mode`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePull();
        }
      }}
      aria-label={`Toggle theme: Currently ${isLight ? "Light Mode" : "Dark Mode"}`}
    >
      {/* Ceiling Mount / Wire */}
      <div className="w-[1.5px] h-3 sm:h-4 bg-[#919297] opacity-80" />

      {/* Architectural Pendant Lamp Head */}
      <motion.div
        animate={lampControls}
        className="relative flex flex-col items-center"
      >
        {/* Lamp Shade (Conical Trapeze) */}
        <svg
          width="32"
          height="16"
          viewBox="0 0 32 16"
          className="overflow-visible drop-shadow-sm transition-colors duration-500"
        >
          {/* Shade Body */}
          <path
            d="M 11 0 L 21 0 L 32 16 L 0 16 Z"
            fill={isLight ? "#292824" : "#41D2CB"}
            className="transition-colors duration-500"
          />
          {/* Bronze Rim Highlight */}
          <line
            x1="0"
            y1="15.5"
            x2="32"
            y2="15.5"
            stroke="#A68B68"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Illuminated Light Bulb */}
        <div className="relative -mt-0.5 flex justify-center items-center">
          <div
            className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${
              isLight
                ? "bg-[#FFF4D0] shadow-[0_0_16px_4px_rgba(255,244,208,0.9),0_0_24px_8px_rgba(65,210,203,0.4)]"
                : "bg-[#292824] border border-[#919297]/40 shadow-none"
            }`}
          />

          {/* Warm Ambient Downward Light Cone (Active in Light Mode) */}
          <div
            className={`absolute top-2 w-16 h-14 pointer-events-none transition-opacity duration-700 ${
              isLight ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(255,244,208,0.35) 0%, rgba(65,210,203,0.12) 50%, transparent 80%)",
            }}
          />
        </div>
      </motion.div>

      {/* Animated Pull-Rope & Brass Fob */}
      <motion.div
        animate={ropeControls}
        className="relative flex flex-col items-center -mt-0.5"
      >
        {/* Slender Beaded Chain */}
        <div className="flex flex-col items-center space-y-[2px] py-0.5">
          <span className="w-[1.5px] h-[3px] bg-[#919297] rounded-full" />
          <span className="w-[1.5px] h-[3px] bg-[#919297] rounded-full" />
          <span className="w-[1.5px] h-[3px] bg-[#919297] rounded-full" />
          <span className="w-[1.5px] h-[3px] bg-[#919297] rounded-full" />
          <span className="w-[1.5px] h-[3px] bg-[#919297] rounded-full" />
        </div>

        {/* Weighted Brass Cylindrical Pull Fob */}
        <motion.div
          whileHover={{ scale: 1.15, y: 2 }}
          whileTap={{ scale: 0.95, y: 16 }}
          className="w-2 h-4 rounded-xs bg-gradient-to-b from-[#C2AB8D] via-[#A68B68] to-[#8C7250] shadow-xs border border-[#FFF4D0]/30 transition-transform flex items-center justify-center group-hover:from-[#41D2CB] group-hover:to-[#2AA8A1]"
        >
          <span className="w-0.5 h-1.5 bg-[#171714]/30 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Subtle Tooltip Label on Hover */}
      <span className="absolute -bottom-6 text-[9px] uppercase tracking-wider font-sans text-[#919297] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {isLight ? "Pull for Night" : "Pull for Day"}
      </span>
    </div>
  );
}
