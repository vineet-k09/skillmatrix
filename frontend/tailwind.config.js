module.exports = {
    darkMode: 'class', // <- important for theme toggle
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}', // in case you use /src layout
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                accent: 'var(--accent)',
            },
        },
    },
    plugins: [],
}
// bascially now the colour primary is alwasy set to variable primary in globals.css file 
// so text-primary will change based on changing of theme (light/dark)