/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#007bff', // Example primary color - change as needed
          // You can define your desired blue color from the screenshot here
          // e.g. primary: '#3B82F6', (Tailwind's blue-500)
        },
      },
    },
    plugins: [],
  }
  