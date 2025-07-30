'use client'

import { useTheme } from '@/context/ThemeContext'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
}); 

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme()

    return (
        <body className={`${theme} ${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
        </body>
    )
}
