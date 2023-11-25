import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "6xl": { min: "960px" },
      "5xl": { max: "1120px" },
      "3xl": { max: "960px" },
      "2xl": { max: "920px" },
      xl: { max: "700px" },
      lg: { max: "610px" },
      md: { max: "560px" },
      gsm: { max: "500px" },
      csm: { max: "425px" },
      sm: { max: "320px" },
    },
  },
  plugins: [],
};
export default config;
