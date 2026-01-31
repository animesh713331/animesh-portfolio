import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background effect & Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = ["about", "skills", "experience", "work", "education", "contact"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top of section is near top of viewport (offset for navbar)
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Network" },
    { id: "experience", label: "Blocks" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Connect" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-dark-bg/70 backdrop-blur-xl border-b border-white/5 shadow-lg"
        : "bg-transparent"
        }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-5 text-white">

          {/* Logo */}
          <div
            className="text-xl font-mono font-bold cursor-pointer select-none tracking-tighter group relative"
            onClick={() => handleMenuItemClick("about")}
          >
            <span className="text-neon-purple mr-1 opacity-100 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100 inline-block">&#60;</span>
            <span className="text-white group-hover:text-neon-blue transition-colors group-hover:animate-glitch inline-block relative">
              Animesh
            </span>
            <span className="text-neon-purple ml-1 opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 inline-block">/&#62;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-sm font-mono tracking-wide">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`relative px-2 py-1 transition-all duration-300 group ${activeSection === item.id
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  <span className="relative z-10 group-hover:text-neon-blue transition-colors">
                    <span className="text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity mr-1">[</span>
                    {item.label}
                    <span className="text-neon-purple opacity-0 group-hover:opacity-100 transition-opacity ml-1">]</span>
                  </span>
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-purple shadow-[0_0_10px_#b026ff]"></span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/animesh713331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/animeshkrsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-2xl text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-2xl text-white cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-dark-bg/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col items-center justify-start pt-20">
          <ul className="flex flex-col items-center space-y-8 text-gray-300 font-mono text-lg">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition-colors hover:text-neon-blue ${activeSection === item.id
                    ? "text-neon-purple font-bold border-l-2 border-neon-purple pl-4"
                    : ""
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-8 pt-8 border-t border-white/10 w-full justify-center">
              <a
                href="https://github.com/animesh713331"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/animeshkrsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

