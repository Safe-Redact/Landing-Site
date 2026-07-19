import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#D97757",
          dark: "#B85C3F",
          light: "#F4DDD4",
          50: "#FEF5F1",
          100: "#F4DDD4",
          200: "#E8B8A3",
          300: "#E09A7E",
          400: "#D97757",
          500: "#C4603F",
          600: "#B85C3F",
          700: "#9A4A33",
          800: "#7D3B29",
          900: "#5E2C1E",
        },
        primary: {
          DEFAULT: "#1A1A2E",
          50: "#F0F0F4",
          100: "#D8D8E4",
          200: "#B0B0C8",
          300: "#8888AC",
          400: "#606090",
          500: "#4A4A68",
          600: "#38384E",
          700: "#2A2A3E",
          800: "#1A1A2E",
          900: "#0D0D17",
        },
        surface: {
          DEFAULT: "#F8F7F4",
          50: "#FFFFFF",
          100: "#F8F7F4",
          200: "#F0EDE8",
          300: "#E8E6E1",
          400: "#D4D1CA",
        },
        muted: "#7C7C7C",
        success: "#4FAE68",
        warning: "#E8A341",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display": ["3rem", { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-xl": ["1.5rem", { lineHeight: "1.35", fontWeight: "600" }],
        "heading-lg": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "heading": ["1.125rem", { lineHeight: "1.45", fontWeight: "600" }],
        "heading-sm": ["1rem", { lineHeight: "1.45", fontWeight: "600" }],
        "body-xl": ["1.125rem", { lineHeight: "1.65" }],
        "body-lg": ["1rem", { lineHeight: "1.65" }],
        "body": ["0.9375rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "5rem",
        "section-sm": "3rem",
      },
      borderRadius: {
        panel: "0.75rem",
        control: "0.5rem",
        chip: "0.25rem",
      },
      maxWidth: {
        content: "72rem",
        prose: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
