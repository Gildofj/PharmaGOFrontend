const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: "#8F8F8F",
          10: "#F7F7F7",
          20: "#E0E0E0",
          30: "#C5C5C5",
          40: "#AAAAAA",
          50: "#8F8F8F",
          60: "#747474",
          70: "#595959",
          80: "#262626",
          90: "#121212",
          100: "#080808",
        },
        primary: {
          DEFAULT: "#47CE74",
          0: "#E9FCEF",
          10: "#C2EFD1",
          20: "#99E4B2",
          30: "#70D993",
          40: "#47CE74",
          50: "#1EC355",
          60: "#17A246",
          70: "#127F37",
          80: "#0D5C28",
          90: "#083919",
          100: "#03160A",
        },
        yellow: {
          DEFAULT: "#FFBE3D",
          10: "#FFF1D6",
          50: "#FFBE3D",
          100: "#1A150D",
        },
        red: {
          DEFAULT: "#FF3D3D",
          10: "#FFD6D6",
          50: "#FF3D3D",
          100: "#1A0D0D",
        },
        purple: {
          DEFAULT: "#7700CC",
          10: "#EED6FF",
          50: "#7700CC",
          100: "#140D1A",
        },
      },
      fontFamily: {
        sans: ["Hind", ...defaultTheme.fontFamily.sans],
        cursive: ["Big Shoulders Display", "cursive"],
      },
      fontSize: {
        h1: ["3.5rem", "3.5rem"],
        h2: ["3rem", "3rem"],
        h3: ["2.5rem", "2.5rem"],
        h4: ["2rem", "2rem"],
        h5: ["1.5rem", "1.562rem"],
        h6: ["1.25rem", "1.375rem"],
        subtitle: ["1.125rem", "1.312rem"],
        small: ["0.875rem", "1.062rem"],
        medium: ["1rem", "1.187rem"],
        large: ["1.125rem", "1.25rem"],
        btnSmall: ["0.875rem", "0.875rem"],
        btnMedium: ["1rem", "1rem"],
        btnLarge: ["1.125rem", "1.125rem"],
        caption: ["0.625rem", "0.75rem"],
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
