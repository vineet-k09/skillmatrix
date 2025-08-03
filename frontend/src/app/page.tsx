//frontend/src/app/page.tsx
'use client'
import { useTheme } from "@/context/ThemeContext";
export default function Home() {
  const {theme,toggleTheme} = useTheme()
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* secondary points to --secondary in theme(dark/light) change colours in globals.css no need to change here */}
        <button className="bg-primary font-bold text-[var(--accent)] text-2xl" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        </main>
    </div>
  );
}
