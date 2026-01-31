import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Badge from "../ui/Badge";
import HackerText from "../ui/HackerText";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 font-sans bg-dark-bg relative"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Consensus <HackerText text="History_Log" className="text-[#8245ec]" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-light">
            Immutable record of my professional nodes.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical line — Central Chain */}
          {/* Vertical line — Central Chain */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-white/5 md:-translate-x-1/2">
            <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-neon-purple to-transparent animate-[flow_5s_linear_infinite]"></div>
          </div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-20 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center w-full`}
            >

              {/* CONTENT CARD (Left/Right) */}
              <div className="w-full md:w-[45%] pl-16 md:pl-0 md:px-8 relative">
                {/* Connector Line */}
                <div className={`hidden md:block absolute top-10 w-8 h-[2px] bg-neon-purple/50 ${index % 2 === 0 ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`}></div>

                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="h-full"
                >
                  <div className="glass-card p-8 rounded-2xl relative border-l-4 border-l-purple-500 hover:shadow-[0_0_30px_rgba(130,69,236,0.15)] transition-all duration-300 group bg-card-bg/80 backdrop-blur-md border border-white/5">

                    {/* Hash ID Decoration */}
                    <div className="absolute top-4 right-4 text-xs font-mono text-neon-blue/50 group-hover:text-neon-blue transition-colors">
                      Block_#{Math.floor(Math.random() * 999999)}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors">
                          {experience.role}
                        </h3>
                        <p className="text-sm text-neon-blue font-mono">{experience.company}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                      {experience.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 border-t border-white/5 pt-3">
                      <span className="text-green-500">✔ Validated:</span>
                      <span>[{experience.date}]</span>
                    </div>

                    {/* Tech Stack */}
                    {experience.skills?.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 uppercase tracking-wider"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Tilt>
              </div>

              {/* CENTER NODE */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-dark-bg border-2 border-neon-purple z-10 shadow-[0_0_15px_rgba(176,38,255,0.6)] flex items-center justify-center transform rotate-45 group-hover:scale-125 transition-transform">
                <div className="w-3 h-3 bg-neon-blue animate-pulse"></div>
              </div>

              {/* EMPTY SPACE for structure */}
              <div className="w-full md:w-[45%] hidden md:block"></div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
