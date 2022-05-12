module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#112340",
      white: "#ffffff",
      green: "#41c1a6",
      yellow: "#ffce5d",
      grey: {
        100: "#f6f5fb",
        200: "#f8f9fc",
        600: "#7d8797",
      },
    },
    fontFamily: {
      body: ["Asap", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      semibold: 600,
    },
    transitionDuration: {
      400: "400ms",
    },
    extend: {},
  },
  plugins: [],
};
