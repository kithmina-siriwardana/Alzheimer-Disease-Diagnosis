import type { Config } from "tailwindcss";

export default {
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

        primary: "#213555",
        secondary: "#7886C7",
        tertiary: "#A9B5DF",
        quaternary: "#FFF2F2",
      },
    },
  },
  plugins: [],
} satisfies Config;
