import React from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

import Cursor from "./components/ui/Cursor";
import Preloader from "./components/ui/Preloader";
import ScrollProgress from "./components/ui/ScrollProgress";

import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-dark-bg min-h-screen relative overflow-hidden selection:bg-neon-purple selection:text-white transition-colors duration-500">
          <Cursor />
          <ScrollProgress />
          <ParticleBackground />
          <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-[pulse_4s_ease-in-out_infinite]"></div>


          <div className="relative pt-20">
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Work />
            <Education />
            <Contact />
            <Footer />
          </div>

        </div>
      )}
    </>
  );
};

export default App;
