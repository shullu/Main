import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#faf7f2",
          100: "#f3ede1",
          200: "#e6d9c3",
        },
        ink: {
          900: "#0f1b2d",
          800: "#16263d",
          700: "#1e3350",
        },
        gold: {
          400: "#d9b26b",
          500: "#c99a45",
          600: "#a97e2f",
        },
        teal: {
          500: "#0f766e",
          600: "#0d5f58",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
