import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "im-green": "#698474",
        "im-green-hover": "#60786A",
        "im-white": "#FCF8F3",
        "im-peach": "#FFD3B6",
        "im-grey": "#888888",
      },
      fontFamily: {
        display: "Work Sans",
        button: "Montserrat" ,
        compose: "Inter",
      },
    },
  },
  plugins: [],
};
export default config;
