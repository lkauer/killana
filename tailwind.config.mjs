/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#F8F6F3',
        beige: '#E8DED1',
        leather: '#8B6A4E',
        softblack: '#1F1F1F',
        gold: '#B89B72',
        'gold-light': '#D4BC96',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        soft: '0 4px 30px rgba(31, 31, 31, 0.08)',
        card: '0 8px 40px rgba(31, 31, 31, 0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'pulse-ring': 'pulseRing 3s ease-out infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '0.7' },
          '50%': { transform: 'scaleY(0.6)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
