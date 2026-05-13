import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf7ff",
          100: "#d8edff",
          500: "#0f71d9",
          700: "#0857ac",
          900: "#0a2b52"
        }
      }
    }
  },
  plugins: []
};

export default config;
