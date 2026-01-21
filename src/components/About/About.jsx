import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile_pic.jpeg";

const About = () => {
  return (
    <section id="about" className="py-16 font-sans">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Hi, I am
            </h1>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Animesh Kumar Singh
            </h2>

            {/* Typing Effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#8245ec]">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  "Coder",
                  "Full Stack Developer",
                  "Blockchain & IoT Enthusiast",
                  "Problem Solver & Builder",
                ]}
                speed={90}
                eraseSpeed={45}
                typingDelay={400}
                eraseDelay={1800}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>

            {/* About Paragraph */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-10">
              I’m Animesh Kumar Singh, a Computer Science (IoT) undergraduate at
              Government Engineering College, Vaishali. I’m deeply interested in
              full-stack web development and blockchain. I enjoy learning by
              building real projects and understanding systems end to end. I
              primarily work with the MERN stack and actively explore Solidity
              and Web3 technologies to solve real-world problems around data
              verification, trust, and decentralization.
            </p>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1uvjxyvo0QhlVCVR63157kELq0NOyL-68/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition-transform duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow:
                  "0 0 10px rgba(130,69,236,0.6), 0 0 30px rgba(130,69,236,0.4)",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt
              tiltMaxAngleX={18}
              tiltMaxAngleY={18}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] 
                         rounded-full border-4 border-purple-700"
            >
              <img
                src={profileImage}
                alt="Animesh Kumar Singh"
                className="w-full h-full rounded-full object-cover 
                           drop-shadow-[0_10px_25px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
