import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 450ms ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-2%)" },
          "40%": { transform: "translateY(2%)" },
          "60%": { transform: "translateY(-1%)" },
          "80%": { transform: "translateY(1%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
