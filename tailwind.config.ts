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
          'base-content': '#e0e0e0',
          'base': '#f0f0f0',
          'success': '#aee5c8',
          'warning': '#ffcc99',
          'error': '#ff9999',
          'grad-1': '#EEf3EB',
          'grad-2': '#D3E3FD',
          'grad-3': '#FBF2F1'
        },
      }
    ],
  },
};
export default config;
