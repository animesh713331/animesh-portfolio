import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";
import HackerText from "../ui/HackerText";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            System <HackerText text="Education_Log" className="text-neon-purple" />
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto font-light">
            MainNet upgrades and protocol improvements installed over time.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical line — DESKTOP ONLY */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-neon-blue to-transparent animate-[flow_3s_linear_infinite]"></div>
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-24 flex ${index % 2 === 0
                ? "justify-start md:pr-16"
                : "justify-end md:pl-16"
                }`}
            >

              {/* Timeline Dot — DESKTOP ONLY */}
              <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-20">
                <div className="w-10 h-10 rounded-full bg-dark-bg
                                border-2 border-neon-purple
                                flex items-center justify-center
                                shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                  <div className="w-3 h-3 bg-neon-blue rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Card - Protocol Upgrade Style */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full md:w-[44%]
                           bg-card-bg border border-neon-purple/30 rounded-xl
                           p-6 overflow-hidden
                           shadow-[0_0_20px_rgba(176,38,255,0.15)]
                           group"
              >
                {/* Protocol Header */}
                <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center p-2">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight font-mono">{edu.degree}</h3>
                      <p className="text-xs text-neon-blue font-mono">{edu.school}</p>
                    </div>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <span className="text-[10px] bg-neon-purple/20 text-neon-purple px-2 py-1 rounded border border-neon-purple/30 font-mono whitespace-nowrap inline-block">
                      v.{edu.date.split(" - ")[1] || "2023"}
                    </span>
                  </div>
                </div>

                {/* Progress Bar Animation */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 font-mono mb-1">
                    <span>Installing Knowledge...</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
                    ></motion.div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {edu.desc}
                </p>

                {/* Status Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> SYSTEM VERIFIED
                  </span>
                  <span>ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Education;
