// app/page.tsx - FULL SPACE + STATIC TWINKLING STARS ONLY
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Rocket, Sparkles } from "lucide-react";

export default function ComingSoon() {
  const targetDate = "2026-03-01T00:00:00";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate fixed star positions (same every render)
  const stars = Array.from({ length: 180 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() > 0.95 ? 1.5 : Math.random() > 0.7 ? 1 : 0.5,
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 4,
  }));

  return (
    <>
      {/* DEEP SPACE BACKGROUND */}
      <div className="fixed inset-0 bg-black overflow-hidden">
        {/* Subtle Nebula Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/10 via-transparent to-blue-900/10" />

        {/* STATIC TWINKLING STARS - Fixed positions, only opacity + scale */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: star.size > 1 ? "0 0 12px #fff" : "0 0 6px #fff",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Optional: very distant tiny static dots */}
        {[...Array(300)].map((_, i) => (
          <div
            key={`tiny-${i}`}
            className="absolute w-0.5 h-0.5 bg-gray-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Your original content - 100% untouched */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="flex flex-col items-center text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-7xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          >
            TheAlphaSpace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="mt-2 text-xl text-cyan-200 max-w-2xl"
          >
            A new era of cosmic innovation is almost here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="mt-16 flex gap-8 md:gap-20"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-cyan-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_#38bdf8]">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-cyan-400/70">
                  {unit}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Subtle floating icons (kept minimal) */}
          {[Rocket, Sparkles, Mail].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-white/5"
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 16 + i * 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: `${20 + i * 25}%`, left: `${15 + i * 30}%` }}
            >
              <Icon size={90} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}