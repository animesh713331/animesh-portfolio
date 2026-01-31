import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [blockHeight, setBlockHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Simulate block height increasing with scroll
            const height = Math.floor(window.scrollY / 10) + 18450000;
            setBlockHeight(height);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none">
            <motion.div
                className="h-full bg-gradient-to-r from-neon-purple to-neon-blue origin-left shadow-[0_0_10px_rgba(176,38,255,0.7)]"
                style={{ scaleX }}
            />

            {/* Block Height Indicator (Hidden on mobile usually, or small tag) */}
            <div className="absolute top-4 right-4 md:right-8 bg-black/60 backdrop-blur text-[10px] text-neon-blue font-mono px-2 py-1 rounded border border-neon-blue/30 hidden md:block">
                BLOCK: #{blockHeight}
            </div>
        </div>
    );
};

export default ScrollProgress;
