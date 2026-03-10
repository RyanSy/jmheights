import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D3A",
          light: "#162B52",
          50: "#E8EDF5",
        },
        blue: {
          DEFAULT: "#1E58D8",
          light: "#3B82F6",
          pale: "#EFF6FF",
          50: "#EFF6FF",
          100: "#DBEAFE",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
        orange: {
          DEFAULT: "#F97316",
          deep: "#C2410C",
          light: "#FFF7ED",
          50: "#FFF7ED",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(30,88,216,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,88,216,0.08) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(135deg, #0B1D3A 0%, #162B52 50%, #0B1D3A 100%)",
        "orange-gradient": "linear-gradient(135deg, #F97316, #C2410C)",
        "blue-gradient": "linear-gradient(135deg, #1E58D8, #1E3A8A)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-orange": "pulseOrange 2s ease-in-out infinite",
        counter: "counter 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseOrange: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(249,115,22,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(249,115,22,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
