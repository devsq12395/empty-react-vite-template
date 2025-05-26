module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Ancizar Sans"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};