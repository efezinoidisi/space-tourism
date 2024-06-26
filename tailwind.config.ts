import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",

        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/technology/background-technology-mobile.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        nav: "rgba(255, 255, 255, 0.04)",
      },
      backdropBlur: {
        sl: "40.774227142333984px",
      },

      fontFamily: {
        barlow: ["var(--font-barlow)"],
        bellefair: ["var(--font-bellefair)"],
        "barlow-condensed": ["var(--barlow-condensed)"],
      },

      keyframes: {
        "infinite-rotate": {
          "0%": {
            rotate: "0deg",
          },

          "50%": {
            rotate: "180deg",
          },
          "100%": {
            rotate: "360deg",
          },
        },

        "fade-in": {
          from: {
            scale: "0.6",
            opacity: "0.3",
          },
          to: {
            scale: "1",
            opacity: "1",
          },
        },

        "slide-in": {
          from: {
            translate: "30% 0",
            opacity: "0",
          },

          to: {
            translate: "0",
            opacity: "1",
          },
        },

        "pulse-2": {
          "50%": {
            opacity: "0.18",
          },
        },
      },

      animation: {
        "infinte-rotate": "infinite-rotate 10s infinite linear",
        "fade-in": "fade-in 600ms linear",
        "slide-in": "slide-in 700ms ease-in-out",
        pulse2: "pulse-2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
export default config;
