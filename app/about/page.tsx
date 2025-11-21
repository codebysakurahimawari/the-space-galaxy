"use client";

import Image from "next/image";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { StarsBackground } from "@/components/ui/stars-background";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden">
      
      {/* Animations */}
      <style jsx>{`
        @keyframes shooting-star {
          0% { transform: translate(0,0) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-100vw,100vh) rotate(45deg); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .animate-shooting-star {
          animation: shooting-star 3s linear infinite;
        }
        .animate-shooting-star-delay {
          animation: shooting-star 4s linear infinite 1.5s;
        }
        .animate-blink {
          animation: blink 1.5s infinite alternate;
        }
        @keyframes pulse-slow {
          0%,100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s infinite; }
        .animate-pulse-slower { animation: pulse-slow 9s infinite; }
      `}</style>

      {/* Stars Background */}
      <StarsBackground className="absolute inset-0 opacity-20 animate-float-slow" />

      {/* Floating Nebulas / Planets */}
      <div className="absolute top-1/4 left-1/5 w-40 h-40 rounded-full bg-purple-950/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-2/3 right-1/4 w-32 h-32 rounded-full bg-purple-900/20 blur-3xl animate-pulse-slower"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-purple-800/20 blur-2xl animate-pulse-slow"></div>

      {/* Shooting Stars */}
      <div className="absolute w-0.5 h-16 bg-white/30 rounded-full top-1/2 left-2/3 animate-shooting-star"></div>
      <div className="absolute w-0.5 h-16 bg-white/20 rounded-full top-1/4 left-1/4 animate-shooting-star-delay"></div>

      {/* Blinking Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const size = Math.random() * 2 + 1;
          const delay = Math.random() * 5;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-0 animate-blink"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-8">
          <p className="text-cyan-400 font-medium tracking-widest text-xs uppercase mb-2">
            Since 1980 · Member-Powered
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin leading-tight">
            We are <br />
            <LayoutTextFlip
              text="The Planetary"
              words={["Society", "Movement", "Future", "Cosmos"]}
              className="font-extralight text-cyan-400"
            />
          </h1>

          <p className="text-zinc-200 text-lg md:text-xl font-light leading-relaxed tracking-wide max-w-3xl mx-auto">
            Inspiring humanity to explore the cosmos through science, advocacy, and education.  
            Join a global movement advancing space exploration for future generations.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 text-sm md:text-base text-zinc-300 font-light">
            <div className="px-4 py-2 bg-black/40 rounded-xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300">
              200K+ Members Worldwide
            </div>
            <div className="px-4 py-2 bg-black/40 rounded-xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300">
              100+ Countries
            </div>
            <div className="px-4 py-2 bg-black/40 rounded-xl shadow-md hover:shadow-cyan-400/30 transition-all duration-300">
              40+ Years of Advocacy
            </div>
          </div>

          <div className="flex flex-wrap gap-6 justify-center mt-12">
            <button className="bg-cyan-500 text-black px-14 py-4 rounded-full font-semibold hover:bg-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50">
              Become a Member
            </button>
            <button className="border border-zinc-400 text-zinc-100 px-14 py-4 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 shadow-md hover:shadow-cyan-400/30">
              Explore Our Work
            </button>
          </div>
        </section>

        {/* About / Origin Section */}
        <section className="lg:flex lg:items-center lg:space-x-16 space-y-8 lg:space-y-0 py-32 border-t border-white/10">
          <div className="lg:w-1/2">
            <Image
              src="/about/carl-sagan-minimal.jpg"
              alt="Carl Sagan"
              width={800}
              height={1000}
              className="rounded-2xl object-cover shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:w-1/2 space-y-4 text-left">
            <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase mb-2">
              Our Beginning
            </p>
            <h2 className="text-3xl md:text-4xl font-thin leading-snug mb-4">
              A dream refused <span className="font-light text-cyan-400">to fade</span>
            </h2>
            <p className="text-zinc-200 text-base md:text-lg font-light leading-relaxed tracking-wide">
              Founded in 1980 by Carl Sagan, Bruce Murray, and Louis Friedman, The Planetary Society empowers citizens worldwide to participate in space exploration.
            </p>
            <p className="text-zinc-200 text-base md:text-lg font-light leading-relaxed tracking-wide">
              We remain independent, member-funded, and committed to advancing space science, planetary defense, and public engagement in space exploration.
            </p>
            <p className="text-zinc-200 text-base md:text-lg font-light leading-relaxed tracking-wide">
              Our work bridges science, education, and advocacy, connecting millions across the globe to the wonder of the cosmos.
            </p>
          </div>
        </section>

        {/* Mission / Cards Section */}
        <section className="py-32 border-t border-white/10">
          <div className="text-center space-y-6">
            <p className="text-cyan-400 font-medium tracking-wide text-xs uppercase mb-2">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-thin text-white mb-12 leading-snug">
              Advancing Space <span className="font-light text-cyan-400">Exploration</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[ 
              { title: "Fund", desc: "Support innovative missions and spacecraft projects globally." },
              { title: "Advocate", desc: "Promote science funding, planetary defense, and sustainable exploration." },
              { title: "Educate", desc: "Engage millions through media, events, and educational programs." },
            ].map((item) => (
              <div key={item.title} className="bg-black/30 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300 hover:scale-105">
                <h3 className="text-2xl font-thin text-white mb-3 tracking-wide">{item.title}</h3>
                <p className="text-zinc-200 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advocacy / Stats Section */}
        <section className="py-32 border-t border-white/10 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-thin mb-6 leading-snug">
            Shaping the Future of <span className="font-light text-cyan-400">Space Policy</span>
          </h2>
          <p className="text-zinc-200 text-base md:text-lg leading-relaxed tracking-wide max-w-2xl mx-auto">
            Collaborating with policymakers, scientists, and members worldwide, we ensure space exploration remains a priority for future generations.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-12">
            {[ 
              { number: "200K+", label: "Members Worldwide" },
              { number: "100+", label: "Countries Engaged" },
              { number: "40+", label: "Years of Advocacy" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-thin text-cyan-400 mb-2">{stat.number}</h3>
                <p className="text-zinc-200 text-sm font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 border-t border-white/10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-thin mb-4 leading-snug">
            Join the Mission to <span className="font-light text-cyan-400">Explore the Cosmos</span>
          </h2>
          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed tracking-wide mb-8">
            Become part of a global movement advancing humanity's reach into space, funding innovation and inspiring curiosity across generations.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="bg-cyan-500 text-black px-12 py-4 rounded-full font-medium hover:bg-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50">
              Become a Member
            </button>
            <button className="border border-zinc-400 text-zinc-100 px-12 py-4 rounded-full font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 shadow-md hover:shadow-cyan-400/30">
              Learn More
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
