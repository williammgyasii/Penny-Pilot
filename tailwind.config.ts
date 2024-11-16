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
        text: "text 5s ease infinite",
        border: "border 4s linear infinite",
        "infinite-scroll": "infinite-scroll 40s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "slow-blob": "blob 15s infinite",
      },
      backgroundImage: {
        "hero-background":
          "linear-gradient(120deg, #070C14, #212A40,#191C24,#14161E)",
        "custom-gradient": "linear-gradient(to bottom, #14161E, #070C14)",
        "benefit-card-background":
          "linear-gradient(to bottom, #DEE8F5, #FFFFFF)",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, -20px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "infinite-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        border: {
          to: {
            "--border-angle": "360deg",
          },
        },
      },
      colors: {
        form_border: "#EEF2F7",
        pricing_border: "#B6CBE9",
        ui: {
          ui_light_100: "#F2F9FE",
          ui_light_200: "#F4F6FA",
          ui_light_300: "#DEE8F6",
          ui_light_400: "#C8D3E3",
          ui_light_500: "#B2B9C0",
          ui_light_600: "#828E9D",
          ui_light_700: "#90A2AF",
          ui_dark_200: "#3D4045",
          ui_dark_300: "#181E26",
          ui_dark_400: "#191C24",
          ui_dark_500: "#212A40",
          ui_dark_600: "#1B1F26",
          ui_dark_700: "#070C14",
          ui_dark_800: "#14161E",
          ui_blue_200: "#485E79",
          ui_blue_300: "#1F78FF",
          ui_blue_400: "#2A7FFF",
          ui_blue_500: "#0E6EFF",
          ui_blue_600: "#1065E3",
          ui_blue_700: "#0657D0",
          ui_blue_800: "#084DB3",
          ui_yellow_200: "#FFB407",
          ui_yellow_300: "#FFA700",
          ui_yellow_400: "#FFA100",
          ui_yellow_500: "#FF9200",
          ui_green_200: "#42D986",
          ui_green_300: "#13B554",
          ui_green_400: "#16B247",
          ui_green_500: "#0F9C38",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
export default config;
