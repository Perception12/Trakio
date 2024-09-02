import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7272f0',
        secondary: '#dc6ddf',
      },
    },


  },
  plugins: [require('daisyui')],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        lightTheme: {
          'primary': '#7272F0',
          'base-100': '#FFFFFF',
          'secondary': '#dc6ddf',
          'base-content': '#FFFFFF',
          'primary-content': '#FFFFFF',
          'base': '#121212',
          'success': '#aee5c8',
          'warning': '#ffcc99',
          'error': '#ff9999',
        },
      }
    ],
  },
};
export default config;
