/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        "primary-main": "#5194F9",
        "primary-text": "#FFFFFF",
        "primary-disabled": "#A1A1A1",
        "primary-paper": "#F6FAFF",
      },
    },
  },
  plugins: [],
};
