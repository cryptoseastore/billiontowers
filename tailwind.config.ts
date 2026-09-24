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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          green: "#228000",
          orange: "#f79c22",
          "orange-light": "#fe8e49",
          blue: "#0088cb",
        },
      },
      fontFamily: {
        sans: ["var(--font-questrial)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
