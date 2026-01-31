import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaEthereum, FaJs, FaHtml5, FaCss3, FaGithub, FaBitcoin } from "react-icons/fa";
import { SiSolidity, SiWeb3Dotjs, SiTypescript, SiTailwindcss, SiIpfs } from "react-icons/si";
import profileImage from "../../assets/profile_pic.jpeg";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 mb-4 border border-neon-purple/30 rounded-full bg-neon-purple/10 backdrop-blur-sm"
            >
              <span className="text-neon-blue font-mono tracking-wide text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                System Online
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue animate-pulse relative inline-block">
                Animesh
                <span className="absolute top-0 left-0 -z-10 blur-xl opacity-50 bg-neon-purple w-full h-full"></span>
              </span>
            </h1>

            {/* Typing Effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-300">
              <span className="mr-2">I am a</span>
              <ReactTypingEffect
                text={[
                  "Full Stack Developer",
                  "Blockchain & IoT Enthusiast",
                  "Coder",
                  "Problem Solver",
                ]}
                speed={50}
                eraseSpeed={30}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-purple-500 font-bold">{cursor}</span>
                )}
                className="font-semibold text-white"
              />
            </h3>

            {/* About Paragraph */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
              Transforming ideas into digital reality. I specialize in building scalable,
              user-centric web applications and exploring the potential of decentralized systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Let's Talk
              </a>
              <a
                href="https://drive.google.com/file/d/1uvjxyvo0QhlVCVR63157kELq0NOyL-68/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-gray-600 text-white font-medium hover:border-purple-500 hover:bg-purple-500/10 transition-all"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-end relative"
          >
            {/* Abstract geometric shapes behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-neon-purple/20 rounded-full animate-[spin_15s_reverse_linear_infinite]" />

            {/* Floating Tech Icons - Tech Orbit */}
            {[
              { Icon: FaReact, color: "text-blue-400", x: 60, y: -40, delay: 0 },
              { Icon: FaEthereum, color: "text-gray-300", x: -50, y: 70, delay: 1 },
              { Icon: SiSolidity, color: "text-white", x: 80, y: 20, delay: 2 },
              { Icon: FaJs, color: "text-yellow-400", x: -80, y: -20, delay: 0.5 },
              { Icon: SiTypescript, color: "text-blue-500", x: 40, y: 80, delay: 1.5 },
              { Icon: FaBitcoin, color: "text-orange-500", x: -30, y: -90, delay: 2.5 },
              { Icon: SiIpfs, color: "text-teal-400", x: 90, y: -60, delay: 1.2 },
            ].map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [item.y - 10, item.y + 10, item.y - 10],
                  x: [item.x - 5, item.x + 5, item.x - 5],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay
                }}
                className={`absolute z-20 ${item.color} text-3xl md:text-4xl`}
                style={{
                  top: "50%",
                  left: "50%",
                  marginLeft: item.x,
                  marginTop: item.y
                }}
              >
                <item.Icon />
              </motion.div>
            ))}

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2000}
              className="relative z-10"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-full p-2 bg-gradient-to-br from-neon-purple/50 to-neon-blue/50 backdrop-blur-sm neon-border">
                <img
                  src={profileImage}
                  alt="Animesh Kumar Singh"
                  className="w-full h-full rounded-full object-cover border-4 border-dark-bg"
                />
              </div>
            </Tilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;