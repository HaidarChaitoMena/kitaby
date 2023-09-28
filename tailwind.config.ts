import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#252A4A',
          secondary: '#2D325A',
          accent: '#f471b5',
          neutral: '#373F6E',
          'base-100': '#1D213E',
          'base-200': '#848DC4',
          info: '#0ca6e9',
          success: '#B9ED92',
          warning: '#f4c152',
          error: '#fb6f84',
        },
      },
    ],
  },
};
export default config;
