import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        background: "#FFFFFF",
        surface: "#FAFAFA",
        "text-primary": "#2D2D2D",
        "text-secondary": "#6B6B6B",
        "text-light": "#9A9A9A",
        accent: "#C9A0A0",
        "accent-hover": "#B08888",
        border: "#E8E8E8",
      },
      fontFamily: {
        script: ["var(--font-alex-brush)", "cursive"],
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-assistant)", "sans-serif"],
      },
      fontSize: {
        // Logo
        "logo-desktop": ["48px", { lineHeight: "1.2" }],
        "logo-mobile": ["36px", { lineHeight: "1.2" }],
        "logo-subtitle": ["14px", { lineHeight: "1.4" }],
        // Headlines
        h1: ["42px", { lineHeight: "1.3" }],
        "h1-mobile": ["32px", { lineHeight: "1.3" }],
        h2: ["32px", { lineHeight: "1.3" }],
        "h2-mobile": ["26px", { lineHeight: "1.3" }],
        h3: ["20px", { lineHeight: "1.4" }],
        "h3-mobile": ["18px", { lineHeight: "1.4" }],
        // Body
        body: ["16px", { lineHeight: "1.7" }],
        "body-mobile": ["15px", { lineHeight: "1.7" }],
        "body-small": ["14px", { lineHeight: "1.6" }],
        nav: ["15px", { lineHeight: "1" }],
      },
      spacing: {
        // Design system spacing scale
        "section-desktop": "48px",
        "section-mobile": "32px",
        "content-desktop": "48px",
        "content-mobile": "32px",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        pill: "25px",
      },
      boxShadow: {
        button: "0 2px 8px rgba(0,0,0,0.1)",
        "whatsapp": "0 4px 12px rgba(0,0,0,0.15)",
      },
      animation: {
        "bounce-x": "bounce-x 1s ease-in-out infinite",
        "subtle-pulse": "subtle-pulse 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-up-delay-1": "fade-up 0.6s ease-out 0.1s forwards",
        "fade-up-delay-2": "fade-up 0.6s ease-out 0.2s forwards",
        "fade-up-delay-3": "fade-up 0.6s ease-out 0.3s forwards",
        "fade-up-delay-4": "fade-up 0.6s ease-out 0.4s forwards",
      },
      keyframes: {
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-6px)" },
        },
        "subtle-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
