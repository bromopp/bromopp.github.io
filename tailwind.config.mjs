/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary theme colors
        'science-yellow': '#FFC832',
        'scienceYellow': '#FFC832', // Alias for consistency
        'accent': '#FFC832',
        
        // Background colors
        'background': '#1f1f1f',
        'soft-gray-dark': '#1a1a1a',
        'soft-gray-medium': '#222222',
        'soft-gray-light': '#2a2a2a',
        'softGrayLight': '#2a2a2a', // Alias for consistency
        
        // Text colors
        'light-text': '#ffffff',
        'lightText': '#ffffff', // Alias for consistency
        'clean-white': '#ffffff',
      },
      fontFamily: {
        // Retro/pixel fonts
        'heading': ['"Press Start 2P"', 'monospace'],
        'pixel': ['"Press Start 2P"', 'monospace'],
        'body': ['"Space Mono"', 'monospace'],
        'retro': ['"Space Mono"', 'monospace'],
      },
      maxWidth: {
        'container': '800px',
      },
      boxShadow: {
        'glow-yellow': '0 0 20px rgba(255, 200, 50, 0.5)',
        'glow-yellow-focus': '0 0 0 3px rgba(255, 200, 50, 0.6)',
        'glow-yellow-subtle': '0 0 8px 2px rgba(255, 200, 50, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollTextVertical: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-120%)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
        scrollTextVertical: 'scrollTextVertical 20s linear infinite',
        typing: 'typing 3s steps(40, end) forwards',
        blink: 'blink 1s step-end infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
