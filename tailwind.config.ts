// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(#321a67, #281452, #0a0514)',
      },
      colors: {
        'custom-color': '#6434CE',
        'custom-border': '#493182',
      },
    },
  },
  plugins: [],
};

export default config;
