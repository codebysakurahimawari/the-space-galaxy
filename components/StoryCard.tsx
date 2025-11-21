"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface StoryCardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function ContentCard({ image, title, subtitle, description }: StoryCardProps) {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="bg-[#0d0d16] rounded-md overflow-hidden border border-gray-800 
                 hover:border-cyan-600/40 hover:shadow-[0_0_25px_-5px_rgba(0,255,255,.25)]
                 transition-all duration-300"
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-48">
          <Image 
            src={image}
            alt={title || ""}
            fill
            className="object-cover opacity-90 hover:opacity-100 transition"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {subtitle && (
          <p className="text-cyan-400 text-xs uppercase tracking-wider">{subtitle}</p>
        )}

        {title && (
          <h3 className="text-[#adb7e9] line-clamp-1 text-lg font-regular mt-2 leading-tight">
            {title}
          </h3>
        )}

       
      </div>
    </motion.div>
  );
}
