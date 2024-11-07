import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        border: "border 4s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      colors: {
        form_border: "#EEF2F7",
        pricing_border: "#B6CBE9",
        ui: {
          // light
          ui_light_100: "#F2F9FE",
          ui_light_200: "#F4F6FA",
          ui_light_300: "#DEE8F6",
          ui_light_400: "#C8D3E3",
          ui_light_500: "#B2B9C0",
          ui_light_600: "#828E9D",
          ui_light_700: "#90A2AF",
          //dark
          ui_dark_200: "#3D4045",
          ui_dark_300: "#181E26",
          ui_dark_400: "#191C24",
          ui_dark_500: "#212A40",
          ui_dark_600: "#1B1F26",
          ui_dark_700: "#070C14",
          ui_dark_800: "#14161E",
          // blue
          ui_blue_200: "#485E79",
          ui_blue_300: "#1F78FF",
          ui_blue_400: "#2A7FFF",
          ui_blue_500: "#0E6EFF",
          ui_blue_600: "#1065E3",
          ui_blue_700: "#0657D0",
          ui_blue_800: "#084DB3",
        },
        gradient: {
          gradient1: "#DEE8F5",
          gradient2: "#FFFFFF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
