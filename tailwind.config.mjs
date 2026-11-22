/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'terminal-green': '#00FF41',
        'terminal-green-dim': '#00CC33',
        'terminal-green-dark': '#008F11',
        'terminal-black': '#0D1117',
        'terminal-black-light': '#161B22',
        'terminal-gray': '#21262D',
        'accent-cyan': '#00FFFF',
        'accent-magenta': '#FF00FF',
        'accent-yellow': '#FFFF00',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'terminal': ['VT323', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'pulse': 'pulse 2s infinite',
        'bounce': 'bounce 1s infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
