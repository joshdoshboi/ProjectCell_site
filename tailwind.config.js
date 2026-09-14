/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chassis: {
          DEFAULT: '#D9CDB8',
          light: '#E6DCCB',
          dark: '#B8A992',
          border: '#A3947D',
          inset: '#8C7E69',
        },
        retro: {
          bg: '#121513',
          darkBg: '#0A0C0B',
          panel: '#18181B',
          panelDark: '#111111',
          panelBorder: '#27272A',
          green: '#33FF66',
          greenGlow: '#4EFA8A',
          greenDim: '#1B5E20',
          greenBg: '#08140B',
          orange: '#C05634',
          orangeLight: '#D46947',
          orangeDark: '#9C3E20',
          yellow: '#EAB308',
          cyan: '#06B6D4',
          purple: '#A855F7',
          muted: '#A1A1AA',
          dim: '#71717A',
        }
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        display: ['"Chakra Petch"', 'sans-serif'],
      },
      boxShadow: {
        'chassis': '0 25px 50px -12px rgba(0, 0, 0, 0.85), inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -3px 0 rgba(0, 0, 0, 0.25)',
        'chassis-inset': 'inset 2px 2px 6px rgba(0,0,0,0.6), inset -1px -1px 2px rgba(255,255,255,0.2)',
        'crt-glow': '0 0 15px rgba(51, 255, 102, 0.4), inset 0 0 25px rgba(51, 255, 102, 0.15)',
        'crt-text': '0 0 8px rgba(51, 255, 102, 0.75)',
        'hardware-btn': 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0,0,0,0.4)',
        'hardware-btn-pressed': 'inset 0 2px 4px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}

