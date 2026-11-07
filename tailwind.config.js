const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        // Brand display face: page titles and hero/section headlines only.
        display: ["'Montserrat Variable'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#effaf0",
          100: "#d8f3db",
          200: "#b3e6b9",
          300: "#82d28c",
          400: "#4fb85c",
          500: "#2d9a3b",
          600: "#229529",
          700: "#1b6b25",
          800: "#195424",
          900: "#15451f",
          950: "#0a260f",
        },
        ink: {
          DEFAULT: "#0f1a12",
          soft: "#3d4a40",
          muted: "#5f6c62",
        },
      },
      maxWidth: { page: "72rem" },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.brand.700"),
            "--tw-prose-invert-links": theme("colors.brand.300"),
            maxWidth: "none",
            a: { textDecorationThickness: "1px", textUnderlineOffset: "3px" },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            code: {
              fontWeight: "500",
              padding: "0.15em 0.35em",
              borderRadius: "0.3rem",
              backgroundColor: "rgb(127 140 130 / 0.15)",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
