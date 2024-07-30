/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        whitesmoke: "#f5f5f5",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0e0e0",
        },
        gray: "#828282",
        dodgerblue: "#0d99ff",
      },
      spacing: {},
      fontFamily: {
        "small-text": "Inter",
        jejuhallasan: "JejuHallasan",
      },
      borderRadius: {
        "8xs": "5px",
        "81xl": "100px",
        "981xl": "1000px",
      },
    },
    fontSize: {
      base: "16px",
      "45xl": "64px",
      sm: "14px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

