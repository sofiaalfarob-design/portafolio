import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9810FA",
        "primary-hover": "#B045FB",
        "primary-dark": "#6B0FBB",
        "primary-accent": "#A23AEE",
        "primary-light": "#D6AFFF",
        "primary-light-hover": "#E8D5FF",
        "primary-bg": "#F2F2F2",
        dark: "#0a0a0a",
        "dark-hover": "#555555",
        "card-bg": "#F8F8F8",
        "bg-muted": "#F8F8F8",
        "bg-muted-alt": "#F2F2F2",
        "metric-card": "#D6AFFF",
        "text-primary": "#171717",
        "text-secondary": "#6E6E82",
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
