"use client";
import { motion } from "framer-motion";
import { Plane, Rocket, Star, Telescope } from "lucide-react";

export default function NotFound() {
  const icons = [Plane, Rocket, Star, Telescope];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Animated Icon Background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        {[...Array(25)].map((_, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.6, 1, 0.6], rotate: [0, 15, -15, 0] }}
              transition={{ duration: Math.random() * 6 + 4, repeat: Infinity }}
              className="absolute text-white/32"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            >
              <Icon size={40} />
            </motion.div>
          );
        })}
      </div>

      {/* Center Content */}
      <div className="text-center p-6 z-10">
        <motion.h1
          className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-lg mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          This page drifted into a black hole. Even our telescopes can't find it.
        </motion.p>

        <motion.a
          href="/"
          className="mt-8 inline-block px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:opacity-90 transition"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back Home
        </motion.a>
      </div>
    </div>
  );
}
