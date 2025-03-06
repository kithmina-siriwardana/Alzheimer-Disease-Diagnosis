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

        primary: "#0E2249",
        secondary: "#F6F8FF",
        tertiary: "#ECF1FC",
        quaternary: "#FFF2F2",

        btnPrimary: "#14367B",
        btnPrimaryHover: "#102b62",

        sidebarBtnHover: "#EFF6FF",
        sidebarBtnActive: "#EFF6FF",
        sidebarBtnText: "#FFFFFF",
        sidebarBtnTextActive: "#1A8DC2",

        breadcrumbBgActive: "#E2EFFF",
        breadcrumbTextActive: "#00387F",
      },
    },
  },
  plugins: [],
} satisfies Config;
