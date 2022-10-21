/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        menu: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      backgroundImage: () => ({
        home: "url('/images/background.png')",
        brand: "linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42))",
        context:
          "radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41))",
      }),
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
