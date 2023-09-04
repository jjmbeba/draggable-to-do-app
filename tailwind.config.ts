import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light':'url("/bg.svg")',
        'dark':'url("/bg-dark.svg")',
        'light-lg':'url("/bg-large.svg")',
        'dark-lg':'url("/bg-dark-large.svg")',
      },
      boxShadow: {
        'list': '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
        'list-dark': '0px 35px 50px -15px rgba(0, 0, 0, 0.50)',
      }
    },
  },
  plugins: [],
}
export default config
