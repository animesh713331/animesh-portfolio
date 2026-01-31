// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import HackerText from "../ui/HackerText";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 font-sans bg-dark-bg relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Decentralized <HackerText text="Sensor_Mesh" className="text-[#8245ec]" />
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-light">
            Node network of my technical expertise.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-between gap-8">
          {SkillsInfo.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-full sm:w-[48%] relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <div
                className="relative h-full bg-card-bg bg-opacity-90 backdrop-blur-xl
                           rounded-2xl p-6 sm:p-8
                           border border-white/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-purple-500 rounded-full" />
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => <Tilt
                    key={skill.name}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1000}
                    className="group/skill"
                  >
                    <div
                      className="relative flex flex-col items-center justify-center gap-2
                                     bg-card-bg border border-gray-700/50 w-full aspect-square rounded-sm
                                     hover:border-neon-purple transition-all duration-300
                                     cursor-pointer overflow-hidden"
                    >
                      {/* LED Status Light */}
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full led-pulse"></div>

                      {/* Circuit Traces (Decorations) */}
                      <div className="absolute -left-1 top-4 w-2 h-[1px] bg-gray-600 group-hover/skill:bg-neon-purple transition-colors"></div>
                      <div className="absolute -right-1 bottom-4 w-2 h-[1px] bg-gray-600 group-hover/skill:bg-neon-purple transition-colors"></div>
                      <div className="absolute top-0 left-1/2 w-[1px] h-2 bg-gray-600 group-hover/skill:bg-neon-purple transition-colors"></div>

                      {/* Icon Container */}
                      <div className="relative z-10 p-2 bg-white/5 rounded-sm border border-white/5 group-hover/skill:bg-neon-purple/10 group-hover/skill:border-neon-purple/30 transition-all">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                        />
                      </div>

                      <span className="relative z-10 text-[10px] md:text-xs font-mono text-gray-500 group-hover/skill:text-neon-blue mt-2 tracking-tighter">
                        {skill.name}
                      </span>

                      {/* Tech Specs Decoration */}
                      <span className="absolute bottom-1 left-2 text-[8px] text-gray-700 font-mono">v.{Math.floor(Math.random() * 10)}.0</span>
                    </div>
                  </Tilt>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
