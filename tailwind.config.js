/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#e4e4e7',
        accent: '#FF791B',
        border: '#27272a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}