/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FDF6F0',
          50: '#FFFCFA',
          100: '#FDF6F0',
          200: '#FAE8D8',
          300: '#F5D0B5',
          400: '#EDAC80',
          500: '#E08050',
          600: '#C85E2A',
          700: '#A04420',
          800: '#7A3018',
          900: '#4A1C0C',
          950: '#2A0E06',
        },
        accent: {
          DEFAULT: '#E8547A',
          light: '#F07A95',
          dark: '#C93660',
          glow: '#E8547A20',
        },
        warm: {
          DEFAULT: '#F4A261',
          light: '#F7BE8A',
          dark: '#E07A35',
          glow: '#F4A26120',
        },
        citrus: {
          DEFAULT: '#F9C74F',
          light: '#FBD96F',
          dark: '#E5A820',
        },
        success: {
          DEFAULT: '#4CAF82',
          light: '#70C99E',
          dark: '#2E8A5E',
        },
        surface: {
          DEFAULT: '#FEF9F5',
          raised: '#FDF2E9',
          overlay: '#FAE8D8',
        },
        blush: {
          50: '#FFF0F3',
          100: '#FFD6DE',
          200: '#FFB3C1',
          300: '#FF8FA3',
          400: '#E8547A',
          500: '#C93660',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dot-pattern': 'radial-gradient(circle, #F5D0B5 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(#FAE8D8 1px, transparent 1px), linear-gradient(90deg, #FAE8D8 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '24px 24px',
        'grid-sm': '32px 32px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(232, 84, 122, 0.15)',
        'glow-lg': '0 0 40px rgba(232, 84, 122, 0.25)',
        'warm-glow': '0 0 20px rgba(244, 162, 97, 0.2)',
        'warm-glow-lg': '0 0 40px rgba(244, 162, 97, 0.3)',
        'card': '0 2px 16px rgba(160, 68, 32, 0.08)',
        'card-hover': '0 6px 32px rgba(160, 68, 32, 0.14)',
        'navbar': '0 1px 24px rgba(160, 68, 32, 0.1)',
      },
    },
  },
  plugins: [],
} 