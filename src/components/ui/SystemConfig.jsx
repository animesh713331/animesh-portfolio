import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSettings, FiCpu, FiMonitor, FiX, FiCheck } from "react-icons/fi";
import { useConfig } from "../../context/ConfigContext";

const SystemConfig = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme, performanceMode, togglePerformance } = useConfig();

    return (
        <div className="fixed bottom-6 right-6 z-[99999] font-mono">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border backdrop-blur-md transition-all duration-300 ${theme === 'matrix'
                    ? 'bg-black/80 border-green-500 text-green-500 shadow-[0_0_15px_rgba(0,255,0,0.3)]'
                    : 'bg-card-bg/80 border-neon-purple text-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.3)]'
                    }`}
            >
                {isOpen ? <FiX size={20} /> : <FiSettings size={20} />}
            </motion.button>

            {/* Config Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={`absolute bottom-16 right-0 w-72 rounded-xl border backdrop-blur-xl p-5 shadow-2xl overflow-hidden ${theme === 'matrix'
                            ? 'bg-black/90 border-green-500/50 text-green-400'
                            : 'bg-card-bg/90 border-white/10 text-gray-300'
                            }`}
                    >
                        {/* Header */}
                        <div className={`flex items-center gap-2 mb-6 pb-3 border-b ${theme === 'matrix' ? 'border-green-900' : 'border-white/10'}`}>
                            <FiSettings className={theme === 'matrix' ? 'text-green-500' : 'text-neon-purple'} />
                            <h3 className="text-sm font-bold tracking-wider uppercase">System Config</h3>
                        </div>

                        {/* Theme Switcher */}
                        <div className="mb-6">
                            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block opacity-70 flex items-center gap-2">
                                <FiMonitor /> Interface Theme
                            </label>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => theme !== 'cyberpunk' && toggleTheme()}
                                    className={`flex-1 py-2 px-3 rounded text-xs border transition-all ${theme === 'cyberpunk'
                                        ? 'bg-neon-purple/20 border-neon-purple text-white shadow-[0_0_10px_rgba(176,38,255,0.3)]'
                                        : 'bg-transparent border-white/10 opacity-50 hover:opacity-100'
                                        }`}
                                >
                                    Cyberpunk
                                </button>
                                <button
                                    onClick={() => theme !== 'matrix' && toggleTheme()}
                                    className={`flex-1 py-2 px-3 rounded text-xs border transition-all ${theme === 'matrix'
                                        ? 'bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_10px_rgba(0,255,0,0.3)]'
                                        : 'bg-transparent border-white/10 opacity-50 hover:opacity-100'
                                        }`}
                                >
                                    Matrix
                                </button>
                            </div>
                        </div>

                        {/* Performance Toggle */}
                        <div>
                            <label className="text-xs font-semibold uppercase tracking-widest mb-3 block opacity-70 flex items-center gap-2">
                                <FiCpu /> Performance Mode
                            </label>
                            <button
                                onClick={togglePerformance}
                                className={`w-full py-3 px-4 rounded border flex items-center justify-between transition-all ${performanceMode
                                    ? (theme === 'matrix' ? 'bg-green-500/10 border-green-500/50' : 'bg-yellow-500/10 border-yellow-500/50')
                                    : 'bg-transparent border-white/10 hover:bg-white/5'
                                    }`}
                            >
                                <div className="text-left">
                                    <div className={`text-xs font-bold ${performanceMode ? (theme === 'matrix' ? 'text-green-400' : 'text-yellow-400') : ''}`}>
                                        {performanceMode ? "Eco / Low Power" : "High Performance"}
                                    </div>
                                    <div className="text-[10px] opacity-60 mt-0.5">
                                        {performanceMode ? "Particles reduced. Animations simplified." : "Full visual fidelity enabled."}
                                    </div>
                                </div>
                                {performanceMode && <FiCheck className={theme === 'matrix' ? 'text-green-500' : 'text-yellow-500'} />}
                            </button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SystemConfig;
