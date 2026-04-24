/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0EA5E9", // Subtle Sky Blue
        "on-primary": "#000000",
        "secondary": "#FF4D00", // Neon Orange
        "on-secondary": "#FFFFFF",
        "background": "#020408", // Even Deeper Black
        "on-background": "#FFFFFF",
        "surface": "#0A0F1A", // Refined Surface
        "on-surface": "#FFFFFF",
        "surface-variant": "#121926",
        "on-surface-variant": "#94A3B8",
        "outline": "#1E293B",
        "outline-variant": "#334155",
        "error": "#FF0055",
        "success": "#00FFAA",
        "surface-container-lowest": "#05070A",
        "surface-container-low": "#0A0F1A",
        "surface-container": "#121926",
        "surface-container-high": "#1C2533",
        "surface-container-highest": "#283548"
      },
      fontFamily: {
        headline: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Outfit", "sans-serif"]
      }
    }
  },
  plugins: [],
}
