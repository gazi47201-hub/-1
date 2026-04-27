/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FFFEF9',
          100: '#FFF9ED',
          200: '#FFF5E1',
          300: '#FFEFD1',
          400: '#FFE8BE',
        },
        warm: {
          50: '#FAFAF8',
          100: '#F5F3EE',
          200: '#EBE8E3',
          300: '#D9D5CC',
        },
        ink: {
          DEFAULT: '#2C2C2C',
          light: '#4A4A4A',
          lighter: '#6B6B6B',
        },
        earth: {
          DEFAULT: '#8B7355',
          light: '#A69076',
          dark: '#6B5842',
        },
        moss: {
          DEFAULT: '#7D8B6A',
          light: '#9BA88A',
          dark: '#5E6B4F',
        },
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'Georgia', 'serif'],
        sans: ['Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.06)',
        'lifted': '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}