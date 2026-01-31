import React, { createContext, useContext, useState, useEffect } from "react";

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
    const [theme, setTheme] = useState("cyberpunk"); // cyberpunk | matrix
    const [performanceMode, setPerformanceMode] = useState(false); // false = high quality, true = low power

    useEffect(() => {
        // Apply theme to document
        const root = document.documentElement;
        if (theme === "matrix") {
            root.classList.add("theme-matrix");
            document.body.style.backgroundColor = "#000000";
        } else {
            root.classList.remove("theme-matrix");
            document.body.style.backgroundColor = "#050414";
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "cyberpunk" ? "matrix" : "cyberpunk"));
    };

    const togglePerformance = () => {
        setPerformanceMode((prev) => !prev);
    };

    return (
        <ConfigContext.Provider
            value={{
                theme,
                toggleTheme,
                performanceMode,
                togglePerformance,
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
};
