import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-5 text-white">
          
          {/* Logo */}
          <div
            className="text-lg font-semibold cursor-pointer select-none"
            onClick={() => handleMenuItemClick("about")}
          >
            <span className="text-[#8245ec]">&lt;/</span>
            <span className="text-white">Animesh</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition-colors hover:text-[#8245ec] ${
                    activeSection === item.id
                      ? "text-[#8245ec]"
                      : ""
                  }`}
                >
                  {item.label}
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
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/animeshkrsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="mx-auto max-w-sm bg-[#050414]/80 backdrop-blur-lg rounded-xl shadow-lg py-6">
            <ul className="flex flex-col items-center space-y-5 text-gray-300">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`text-lg transition-colors hover:text-white ${
                      activeSection === item.id
                        ? "text-[#8245ec]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <div className="flex space-x-6 pt-2">
                <a
                  href="https://github.com/animesh713331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/animeshkrsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
