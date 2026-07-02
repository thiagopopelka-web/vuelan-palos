import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F1E7",
        ink: "#111111",
        wood: "#5B3218",
        softwood: "#8A5A33",
        line: "#D8C8B5"
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;
