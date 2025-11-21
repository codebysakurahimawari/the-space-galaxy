"use client";

import { motion } from "framer-motion";
import ContentCard from "./StoryCard";

const items = [
  {
    image: "/card-images/Explore (1).jpg",
    subtitle: "Space Policy & Advocacy",
    title: "Revisiting NASA funding as the government reopens",
  },
  {
    image: "/card-images/Explore (2).jpg",
    subtitle: "Articles",
    title: "Promoted Sunday, Fired Monday: Inside NASA’s sudden office closure",
  },
  {
    image: "/card-images/Explore (3).jpg",
    subtitle: "Day of Action",
    title: "Take Action: Write Congress Today",
  },
  {
    image: "/card-images/Explore (4).jpg",
    subtitle: "Analysis",
    title: "How to Save NASA Science: A retrospective on 2025’s Day of Action",
  },
  {
    image: "/card-images/Explore (5).jpg",
    subtitle: "Night Sky",
    title: "What’s up in the night sky: November 2025",
  },
  {
    image: "/card-images/Explore (6).jpg",
    subtitle: "Planetary Radio",
    title: "Epic Spaceman: Making cosmic scale human",
  },
];

export default function FeaturedSection() {
  return (
    <section className="w-full py-24 bg-[#080810]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-white text-4xl font-medium tracking-tight">
            Featured Stories
          </h2>
          <p className="text-[#adb7e9] mt-2">
            Explore insights, missions, and updates shaping the future of space.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ContentCard {...item} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
