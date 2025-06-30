/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" }
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#FFC832" } // science yellow
        }
      },
      animation: {
        typing: "typing 3s steps(40, end) forwards",
        blink: "blink 1s step-end infinite"
      },
      colors: {
        background: "#1f1f1f",
        accent: "#FFC832",
        lightText: "#ffffff",
        softGrayLight: "#2a2a2a",
        scienceYellow: "#FFC832",
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
        retro: ["'Space Mono'", "monospace"],
      },
      maxWidth: {
        container: "768px",
      },
    },
  },
  plugins: [],
};

