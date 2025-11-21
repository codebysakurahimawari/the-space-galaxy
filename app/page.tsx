"use client";

import { SparklesPreview } from "@/components/animatedstyle";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import WhereWeStandSection from "@/components/WhereWeStandSection";
import { World } from "@/components/globe";
import { GlobeDemo } from "@/components/globedisplay";
import Banner from "@/components/banner";
import FeaturedSection from "@/components/FeaturedSection";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full   flex-col items-center justify-between py-32  bg-white dark:bg-black sm:items-start">

        <div className="max-w-3xl mx-auto">
          <SparklesPreview />
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              text="FIND YOUR PLACE IN"
              words={["The Cosmos", "The Universe", "The Galaxy", "The Solar System"]}
            />
          </motion.div>

          <p className="mt-4 text-center text-base leading-snug !text-[#adb7e9] ">
            Co-founded by Carl Sagan in 1980, The Planetary Society is a
            member-funded nonprofit organization dedicated to advancing space
            science and exploration through three core enterprises.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="w-full max-w-7xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              image={item.image}  // ✅ NEW
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>

        <div className="h-[60vh] my-32 overflow-hidden rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
              {/* Left: Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-12 border-white/8 outline outline-1 outline-white/16">
                  <Image
                    src="/card-images/Explore (1).jpg"
                    alt="Cosmic nebula – Support our core enterprises"
                    width={800}
                    height={600}
                    className="w-full h-[100%] object-fill transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Optional overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Right: Content */}
              <div className="order-1 lg:order-2 text-white max-w-full z-900">



                <div >
                  <LayoutTextFlip
                    text="SUPPORT OUR CORE "
                    words={["ENTERPRISES", "MISSIONS", "GOALS", "INITIATIVES"]}

                  />
                  <p className="my-4 text-left text-base leading-snug !text-[#adb7e9] ">
                    Co-founded by Carl Sagan in 1980, The Planetary Society is a
                    member-funded nonprofit organization dedicated to advancing space
                    science and exploration through three core enterprises.
                  </p>

                  <button className="bg-gray-900 border border-gray-700 text-[#adb7e9] py-2 px-8 rounded-md text-sm hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                    DONATE
                  </button>

                </div>


              </div>
            </div>
          </div>

          <StarsBackground
            className="bg-neutral-900/32 absolute inset-0 z-0"
          />
        </div>

        <WhereWeStandSection />
        <GlobeDemo />
        <Banner />
        <FeaturedSection />
      </main>
    </div>
  );
}

// Skeleton header placeholder (optional)
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

// All grid items
const items = [
  {
    title: "Explore Worlds",
    description: "Increase discoveries about the planets, moons, and distant worlds across the cosmos.",
    image: "/card-images/Explore (1).jpg",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Find Life",
    description: "Elevate the search for extraterrestrial life on Mars, icy moons, and exoplanets.",
    image: "/card-images/Explore (2).jpg",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Defend Earth",
    description: "Decrease the risk of asteroid and comet impacts through planetary defense initiatives.",
    image: "/card-images/Explore (3).jpg",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

  // 🌌 Completely rewritten + space themed
  {
    title: "Decode Cosmic Signals",
    description: "Enhance our ability to detect and interpret radio waves, light, and energy from deep space.",
    image: "/card-images/Explore (4).jpg",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Expand Cosmic Knowledge",
    description: "Advance scientific understanding of galaxies, black holes, stars, and cosmic evolution.",
    image: "/card-images/Explore (5).jpg",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Innovate Space Technology",
    description: "Accelerate the creation of new spacecraft, propulsion systems, and exploration tools.",
    header: <Skeleton />,
    image: "/card-images/Explore (6).jpg",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Embrace Cosmic Adventure",
    description: "Support bold missions that journey to asteroids, distant planets, and unexplored frontiers.",
    header: <Skeleton />,
    image: "/card-images/Explore (7).jpg",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },

];
