// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">SKILLS</h2>
          <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-3"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            A collection of technical skills and tools I’ve gained through
            hands-on projects, internships, and continuous learning.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap justify-between gap-6">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="w-full sm:w-[48%] bg-gray-900 backdrop-blur-md
                         border border-white rounded-2xl px-6 sm:px-8 py-8
                         shadow-[0_0_20px_rgba(130,69,236,0.3)]"
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
                {category.title}
              </h3>

              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={900}
                scale={1.03}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-center gap-2
                                 border border-gray-700 rounded-3xl py-2 px-3
                                 hover:border-[#8245ec]/60 transition-colors"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
