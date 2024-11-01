/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#1B1B1B',
      gray: '#848484',
      cerise: '#E83289',
      ebony: '#0B101B',
      geyser: '#DEE2E9',
      error: '#D80D3D',
    },

    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.4rem',
        '7xl': '4rem',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('daisyui')],
};
