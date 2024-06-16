//import {nextui} from '@nextui-org/theme'
const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
         "./app/**/*.{js,ts,jsx,tsx}", 
        "./pages/**/*.{js,ts,jsx,tsx}", 
        "./components/**/*.{js,ts,jsx,tsx}", 
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "merlot-light": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            background: "#FFFFFF",
            foreground: "#F9F9FB",
            primary: {
              '50': '#fdf3f4',
              '100': '#fbe5e7',
              '200': '#f8d0d3',
              '300': '#f1b0b5',
              '400': '#e88188',
              '500': '#da5962',
              '600': '#c63c46',
              '700': '#a62f38',
              '800': '#8c2b32',
              '900': '#73292e',
              '950': '#3e1114',
              DEFAULT: "#a62f38",
              foreground: "#FFFFFF",
            },
            focus: "#da5962",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
}
