import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins' , 'sans-serif'],
      },
      backgroundImage: {
        "background-game":
          'linear-gradient(0deg, rgba(91,8,128,1) 15%, rgba(76,152,221,1) 49%, rgba(97,0,255,1) 95%)',
        "background-link":
          "linear-gradient(90deg, rgba(199,193,45,1) 6%, rgba(252,69,69,1) 33%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
