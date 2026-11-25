import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
        tile: "rgb(var(--tile) / <alpha-value>)",
        albero: "rgb(var(--albero) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "74rem",
        prose: "38rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
