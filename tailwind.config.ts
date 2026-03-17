import type { Config } from "tailwindcss"

const config: Config = {

  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {

    extend: {

      colors: {

        mocha: {
          light: "#E8E2DE",   // page background
          base: "#A38F85",    // borders
          dark: "#3D3531"     // headings
        },

        accent: {
          blue: "#E0E7FF"
        }

      },

      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.08)",
        hover: "0 16px 40px rgba(0,0,0,0.15)"
      }

    }

  },

  plugins: []

}

export default config