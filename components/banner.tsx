"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function MembershipBanner() {
  const plans = ["$4/month", "$10/month", "$20/month", "$40/month"];
  const [selected, setSelected] = useState("$10/month");

  return (
    <section className="w-full bg-[#0a0a13]  py-20 relative overflow-hidden">

      {/* Soft gradient glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center relative z-10"
      >


        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white text-4xl font-medium tracking-tight mb-3"
        >
          Become A Member
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-[#adb7e9] mb-12 text-lg"
        >
          Get More Space. Support exploration. Shape the future.
        </motion.p>


        {/* PRICING BUTTONS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1, y: 0,
              transition: { delayChildren: 0.2, staggerChildren: 0.12 }
            }
          }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {plans.map((plan) => (
            <motion.button
              key={plan}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelected(plan)}
              className={`bg-gray-900 border border-gray-700 text-[#adb7e9] py-2 px-8 rounded-md text-sm hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-2xl${
                selected === plan
                  ? "bg-cyan-600 text-white border-cyan-500 shadow-lg shadow-cyan-600/40"
                  : "bg-[#14141d]/70 text-gray-300 border-gray-700 hover:border-gray-500"
              }`}
            >
              {plan}
            </motion.button>
          ))}
        </motion.div>


        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
        >
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#22d3ee" }}
            type="text"
            placeholder="First Name"
            className="bg-[#12121a]/80 border border-gray-700 text-gray-200 px-4 py-3 rounded-lg outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#22d3ee" }}
            type="text"
            placeholder="Last Name"
            className="bg-[#12121a]/80 border border-gray-700 text-gray-200 px-4 py-3 rounded-lg outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#22d3ee" }}
            type="email"
            placeholder="Email"
            className="sm:col-span-2 bg-[#12121a]/80 border border-gray-700 text-gray-200 px-4 py-3 rounded-lg outline-none"
          />
        </motion.form>


        {/* SUBSCRIBE BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 260, damping: 15 }}
          className="bg-gray-900 border border-gray-700 text-[#adb7e9] py-2 px-8 rounded-md text-sm hover:text-yellow-400 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
        >
          Subscribe
        </motion.button>


        {/* FOOTER TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-500 text-xs max-w-xl mx-auto mt-6 leading-relaxed"
        >
          Sign up for updates, weekly tools, and exclusive opportunities to support space
          exploration. You may opt out any time. View our{" "}
          <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
            Privacy Policy
          </a>.
        </motion.p>

      </motion.div>
    </section>
  );
}
