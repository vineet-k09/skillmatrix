import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
const ThemeContext = createContext();

// Hook to use context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Check localStorage or default to light
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        // Apply theme class to body
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
