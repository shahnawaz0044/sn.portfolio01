/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050706",
          900: "#0a0f0d",
          800: "#0f1613",
          700: "#16201c",
          600: "#1e2b25",
        },
        signal: {
          DEFAULT: "#3ef2a6",
          dim: "#1fae78",
          bright: "#8bffce",
          soft: "#0f3d2c",
        },
        bone: {
          100: "#f2f6f3",
          300: "#c7d2cc",
          500: "#8a988f",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(62,242,166,0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(62,242,166,0.08), transparent 40%)",
        "noise-line":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0) 1px)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(62,242,166,0.35)",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
