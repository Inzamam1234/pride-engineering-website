import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#112A46",
        steel: "#2A5A8E",
        gold: "#B88B42",
        base: "#F9F9F9",
        surface: "#FFFFFF",
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.4, 0.5, 0.1, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
