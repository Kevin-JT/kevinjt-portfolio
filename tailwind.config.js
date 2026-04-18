/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#060C18',
        surface: '#0B1221',
        card: '#0F1A2E',
        border: '#1A2840',
        accent: '#00E5A0',
        'accent-dim': '#00B37D',
        cyan: '#22D3EE',
        amber: '#F59E0B',
        muted: '#4A5A7A',
        body: '#94A3B8',
        heading: '#E2E8F0',
        white: '#F8FAFC',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,229,160,0.2)',
        'glow-sm': '0 0 10px rgba(0,229,160,0.15)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        blink: 'blink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
