module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Using class strategy for dark mode (can be 'media')
  theme: {
    extend: {
      colors: {
        'science-yellow': '#FFC832',
        'soft-gray-dark': '#1a1a1a',
        'soft-gray-medium': '#222222', // A mid-point for panels/cards
        'soft-gray-light': '#2a2a2a',
        'clean-white': '#ffffff',
      },
      fontFamily: {
        // For titles/headings - a pixel/bitmap font
        'heading': ['"Press Start 2P"', 'monospace', 'system-ui'],
        // For body text - a clean monospace or retro-styled sans-serif
        'body': ['"Space Mono"', 'monospace', 'sans-serif'],
        // Alternative more pixelated body font:
        // 'body': ['"VT323"', 'monospace', 'sans-serif'],
      },
      maxWidth: {
        'container': '800px', // Max width for the centered column content
      },
      boxShadow: {
        'glow-yellow-focus': '0 0 0 3px rgba(255, 200, 50, 0.6)', // For focus rings
        'glow-yellow-subtle': '0 0 8px 2px rgba(255, 200, 50, 0.3)', // Subtle glow for panels
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollTextVertical: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-120%)' }, // Ensure it scrolls completely out
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out forwards',
        scrollTextVertical: 'scrollTextVertical 20s linear infinite',
      }
    },
  },
  plugins: [],
};
