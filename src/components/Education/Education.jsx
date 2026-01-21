import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            A concise academic journey that built my foundation in computer
            science, systems thinking, and real-world problem solving.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/30" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative mb-24 flex ${
                index % 2 === 0
                  ? "justify-start md:pr-16"
                  : "justify-end md:pl-16"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 z-20">
                <div
                  className="w-14 h-14 rounded-full bg-gray-900
                             border-4 border-purple-500
                             flex items-center justify-center
                             shadow-[0_0_20px_rgba(130,69,236,0.5)]"
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="w-full md:w-[44%] bg-gray-900/90 backdrop-blur-md
                           border border-white/40 rounded-2xl
                           p-6 sm:p-7
                           shadow-[0_0_25px_rgba(130,69,236,0.25)]"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Logo */}
                  <div
                    className="w-14 h-14 rounded-xl bg-white/10
                               flex items-center justify-center
                               ring-2 ring-purple-500/40
                               shadow-[0_0_15px_rgba(130,69,236,0.35)]
                               shrink-0"
                  >
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {edu.school}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <p className="text-sm text-purple-400 font-medium mb-2">
                  Grade: {edu.grade}
                </p>

                {/* Description – reduced density */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {edu.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
