import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
    "> Initializing Core System...",
    "> Loading Modules: [REACT, TAILWIND, FRAMER]",
    "> Verifying Blockchain Nodes...",
    "> Connecting to Mainnet...",
    "> Status: ONLINE",
    "> Welcome, User."
];

const Preloader = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (currentLineIndex < terminalLines.length) {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, terminalLines[currentLineIndex]]);
                setCurrentLineIndex((prev) => prev + 1);
            }, 400); // Speed of lines appearing
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => onComplete(), 800);
        }
    }, [currentLineIndex, onComplete]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 bg-dark-bg z-[10000] flex flex-col items-center justify-center font-mono text-xs md:text-sm text-green-500 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="w-full max-w-md p-6">
                <div className="mb-8 font-bold text-center text-neon-purple text-xl animate-pulse">
                    SYSTEM_BOOT_SEQUENCE
                </div>

                <div className="h-48 overflow-hidden mb-6 border-l-2 border-green-500/30 pl-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg pointer-events-none"></div>
                    {lines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-1"
                        >
                            {line}
                        </motion.div>
                    ))}
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-green-500 ml-1 align-middle"
                    />
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between mt-2 text-gray-500 text-[10px]">
                    <span>LOADING ASSETS...</span>
                    <span>{progress}%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
