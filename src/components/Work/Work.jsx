import React, { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            A curated selection of projects showcasing my skills in full-stack,
            blockchain, machine learning, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(130,69,236,0.45)",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                onClick={() => setSelectedProject(project)}
                className="relative cursor-pointer bg-gray-900 border border-white/40
                           rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* Badges */}
                {project.badges?.length > 0 && (
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {project.badges.slice(0, 2).map((badge, idx) => (
                      <Badge key={idx} label={badge} />
                    ))}
                  </div>
                )}

                {/* Image */}
                <div className="p-4 pt-12">
                  <div className="h-48 rounded-xl overflow-hidden bg-black/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tags pinned to bottom */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#251f38] text-xs font-semibold
                                   text-purple-400 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-3xl w-full shadow-2xl relative">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-3xl text-white hover:text-purple-500"
            >
              &times;
            </button>

            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              {/* Image */}
              <div className="w-full h-[240px] bg-black/30 rounded-xl
                              flex items-center justify-center overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>

              {/* Modal Badges */}
              {selectedProject.badges?.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {selectedProject.badges.slice(0, 3).map((badge, idx) => (
                    <Badge key={idx} label={badge} />
                  ))}
                </div>
              )}

              <p className="text-gray-400 text-sm mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#251f38] text-xs font-semibold
                               text-purple-400 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-700
                             text-gray-300 py-2 rounded-xl font-semibold"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-700
                             text-white py-2 rounded-xl font-semibold"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
