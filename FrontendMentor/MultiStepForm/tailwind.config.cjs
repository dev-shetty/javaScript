/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "ubuntu",
        "primary-md": "ubuntu-medium",
        "primary-bold": "ubuntu-bold",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        // Primary Colors
        "primary-900": "hsl(213, 96%, 18%)",
        "primary-700": "hsl(243, 100%, 62%)",
        "primary-500": "hsl(228, 100%, 84%)",
        "primary-300": "hsl(206, 94%, 87%)",

        // Accent Colors
        "accent-400": "hsl(354, 84%, 57%)",

        // Neutral Colors
        "neutral-700": "hsl(231, 11%, 63%)",
        "neutral-400": "hsl(229, 24%, 87%)",
        "neutral-300": "hsl(217, 100%, 97%)",
        "neutral-200": "hsl(231, 100%, 99%)",
        "neutral-100": "hsl(0, 0%, 100%)",
      },
      fontSize: {
        md: "16px",
      },
    },
  },
  plugins: [],
}
