"use client";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
    return (
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

            {/* TOP ANIMATION */}
            <div className="w-[40rem] h-40 relative flex items-center justify-center">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Top gradient mask */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_bottom,transparent_20%,white)]"></div>

                {/* Glow lines */}
                <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            </div>

            {/* CENTER TEXT */}
            <h1 className="md:text-5xl text-3xl  text-center text-white z-20 mt-8">
                Advance Space Exploration
            </h1>
            <p className="text-snug font-light text-center text-[#adb7e9] my-5">Learn about our mission to increase discoveries in our Solar System, elevate the search for life beyond our planet, and decrease the risk of Earth being hit by an asteroid.</p>

            {/* BOTTOM ANIMATION */}
            <div className="w-[40rem] h-40 relative flex items-center justify-center">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Bottom gradient mask */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

                {/* Glow lines */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            </div>

        </div>
    );
}
