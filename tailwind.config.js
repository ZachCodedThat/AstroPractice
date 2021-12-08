module.exports = {
  mode: "jit",
  darkMode: "media",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accentColor: "#15616D",
      },
    },
  },
};
