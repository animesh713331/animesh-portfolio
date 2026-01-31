import React, { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Badge from "../ui/Badge";
import { FiCode, FiExternalLink, FiX } from "react-icons/fi";
import HackerText from "../ui/HackerText";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 font-sans bg-dark-bg relative">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Smart Contract <HackerText text="Protocols" className="text-[#8245ec]" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-light">
            Deployed projects and decentralized applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <div
                  className="group relative h-full bg-card-bg/80 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Holographic Sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                  {/* Card Header (Tech Border) */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badges */}
                  {project.badges?.length > 0 && (
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      {project.badges.slice(0, 2).map((badge, idx) => (
                        <Badge key={idx} label={badge} />
                      ))}
                    </div>
                  )}

                  {/* Image Area */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent"></div>
                  </div>

                  {/* Content - Terminal Overlay on Hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-card-bg/95 backdrop-blur-xl border-t border-neon-purple/30 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30 h-[60%] flex flex-col">
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/10">
                      <span className="text-xs font-mono text-neon-blue blink">_terminal.log</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="font-mono text-[10px] text-gray-400 overflow-hidden flex-1 space-y-1">
                      <p><span className="text-green-400">➜</span> Initializing smart contract...</p>
                      <p><span className="text-green-400">➜</span> Connecting to IPFS gateway...</p>
                      <p><span className="text-green-400">➜</span> Loading assets: {project.title}</p>
                      <p><span className="text-blue-400">info</span> Gas estimated: 0.00{Math.floor(Math.random() * 9)} ETH</p>
                      <p><span className="text-green-400">✔</span> Deployed successfully.</p>
                    </div>
                    <div className="mt-3 w-full">
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 w-full py-2 bg-black/50 hover:bg-neon-purple border border-neon-purple/50 hover:border-neon-purple text-neon-blue hover:text-white transition-all duration-300 rounded font-mono text-xs uppercase tracking-wider group/btn shadow-[0_0_10px_rgba(0,243,255,0.1)] hover:shadow-[0_0_20px_rgba(176,38,255,0.5)]"
                      >
                        <FiExternalLink className="group-hover/btn:rotate-45 transition-transform" />
                        <span>Execute_View</span>
                      </a>
                    </div>
                  </div>

                  {/* Standard Content (Hidden on hover partially to reveal terminal) */}
                  <div className="p-6 relative -mt-12 z-20 bg-card-bg group-hover:opacity-0 transition-opacity duration-300">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-neon-blue mb-2 bg-neon-blue/10 px-2 py-1 rounded border border-neon-blue/20">
                      <span>TX: 0x{index}{Math.random().toString(16).substr(2, 6)}...</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-gray-500 font-mono group-hover:text-neon-blue transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Telemetry Strip */}
                  <div className="absolute bottom-0 left-0 w-full h-6 bg-black border-t border-white/10 flex items-center px-4 gap-4 z-40">
                    <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> LIVE
                    </span>
                    <span className="text-[10px] font-mono text-gray-600">Lat: {10 + Math.floor(Math.random() * 40)}ms</span>
                    <span className="text-[10px] font-mono text-gray-600">Peers: {5 + Math.floor(Math.random() * 20)}/50</span>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card-bg border border-purple-500/30 rounded-2xl max-w-4xl w-full shadow-2xl relative z-20 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >

            {/* Left: Image */}
            <div className="md:w-1/2 relative bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Right: Info */}
            <div className="md:w-1/2 p-8 overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.badges?.map((badge, idx) => (
                  <span key={idx} className="bg-purple-600/20 text-purple-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {badge}
                  </span>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>

              <p className="text-gray-300 leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm text-gray-400 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg font-semibold transition-all group"
                >
                  <FiCode className="group-hover:text-purple-400" /> Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(130,69,236,0.3)]"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Work;
