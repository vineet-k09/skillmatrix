// frontend/src/context/ThemeContext.tsx
// this files make a reactContext that u can import in new files to setup light and dark theme

'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' // Theme listed in app/globals.css

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}
// in ts we define a interface with theme name and themechangefunction -- that works as the base of context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
// using this context u can access the theme and the function to toggle theme (toggleTheme())

// all contexts neeed provides - u wrap this in layout.tsx for consistency
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('dark')
    // default dark theme
    useEffect(() => {
        const saved = localStorage.getItem('theme') as Theme
        const current = saved || 'dark'
        setTheme(current)
        document.documentElement.className = current
    }, [])

    const toggleTheme = () => {
        const nextTheme: Theme = theme === 'light' ? 'dark' : 'light'
        setTheme(nextTheme)
        document.documentElement.className = nextTheme
        // stores theme name locally for contexting
        localStorage.setItem('theme', nextTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext)
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
    return ctx
}