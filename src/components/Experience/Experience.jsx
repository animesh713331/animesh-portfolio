import React from "react";
import { experiences } from "../../constants";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Hands-on experience through internships, research, and real-world
            engineering work where I shipped and learned fast.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical line — DESKTOP ONLY */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/30" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative mb-24 flex ${
                index % 2 === 0
                  ? "justify-start md:pr-16"
                  : "justify-end md:pl-16"
              }`}
            >
              {/* Timeline Dot — DESKTOP ONLY */}
              <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-20">
                <div
                  className="w-14 h-14 rounded-full bg-gray-900
                                border-4 border-purple-500
                                flex items-center justify-center
                                shadow-[0_0_18px_rgba(130,69,236,0.45)]"
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative w-full md:w-[44%]
                           bg-gray-900/90 backdrop-blur-md
                           border border-white/40 rounded-2xl
                           p-6 sm:p-7
                           shadow-[0_0_25px_rgba(130,69,236,0.25)]"
              >
                {/* Badges */}
                {experience.badges?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3 md:absolute md:top-4 md:right-4">
                    {experience.badges.slice(0, 2).map((badge, idx) => (
                      <Badge key={idx} label={badge} />
                    ))}
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Card Logo — ONLY LOGO ON MOBILE */}
                  <div
                    className="w-14 h-14 rounded-xl bg-white/10
                                  flex items-center justify-center
                                  ring-2 ring-purple-500/40
                                  shadow-[0_0_12px_rgba(130,69,236,0.3)]
                                  shrink-0"
                  >
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {experience.company}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {experience.desc}
                </p>

                {/* Tech Stack */}
                {experience.skills?.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-purple-400 mb-2">
                      {experience.type === "tech"
                        ? "Tech Stack"
                        : "Tools & Skills"}
                    </h5>

                    <ul className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, idx) => (
                        <li
                          key={idx}
                          className="bg-[#8245ec]/20 text-gray-200
                   px-3 py-1 text-xs rounded-lg
                   border border-[#8245ec]/40"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
