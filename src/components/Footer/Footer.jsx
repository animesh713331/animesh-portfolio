import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-12 bg-dark-bg border-t border-white/10 overflow-hidden font-mono text-sm">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Column 1: Identity */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white tracking-tighter mb-4 flex items-center gap-2">
              <span className="text-neon-purple">&lt;</span>
              Animesh
              <span className="text-neon-blue">/&gt;</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Building decentralized systems and immersive web experiences.
              Deploying scalable smart contracts on the Ethereum network.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-green-400 bg-green-900/10 border border-green-500/20 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>SYSTEM ONLINE</span>
            </div>
          </div>

          {/* Column 2: Navigation Nodes */}
          <div>
            <h3 className="text-white font-bold mb-4 border-l-2 border-neon-purple pl-3">Nodes</h3>
            <ul className="space-y-2">
              {[
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Experience", id: "experience" },
                { name: "Projects", id: "work" },
                { name: "Education", id: "education" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="text-gray-400 hover:text-neon-blue transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 group-hover:bg-neon-blue transition-colors"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="text-white font-bold mb-4 border-l-2 border-neon-blue pl-3">Uplink</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/animeshkrsingh" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/animeshsingh_0x09" },
                { icon: <FaTwitter />, link: "https://twitter.com/animesh713331" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/animeshkumar.singh.7739/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-purple/20 hover:border-neon-purple transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* System Stats Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex gap-6">
            <span>GAS: <span className="text-yellow-500">24 Gwei</span></span>
            <span>BLOCK: <span className="text-neon-blue">#{18300000 + Math.floor(Math.random() * 1000)}</span></span>
            <span>LATENCY: <span className="text-green-500">14ms</span></span>
          </div>
          <div className="text-center md:text-right">
            &copy; 2026 Animesh Kumar Singh. Executed on Mainnet.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
