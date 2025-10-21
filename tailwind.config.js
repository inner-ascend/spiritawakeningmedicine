/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep earth tones - grounded in nature
        earth: {
          900: '#1A120B',      // Deep earth black
          800: '#2C2419',      // Dark soil
          700: '#3E3527',      // Rich earth
          600: '#4F4535',      // Warm earth
          500: '#6B5D4F',      // Mid earth
        },
        // Desert & Sonoran palette (honoring Seri Tribe lineage)
        desert: {
          sand: '#D4B896',     // Warm desert sand
          clay: '#A67B5B',     // Adobe clay
          sage: '#8B9D83',     // Desert sage
          dusk: '#7C6A5C',     // Desert dusk
          stone: '#9B8B7E',    // Desert stone
        },
        // Toad medicine colors - natural, organic
        medicine: {
          toad: '#5C4D3C',     // Toad skin brown
          venom: '#E8DCC4',    // Venom crystal cream
          smoke: '#9B8B7E',    // Sacred smoke gray
          earth: '#6B5D4F',    // Medicine earth
        },
        // Sacred accent colors
        sacred: {
          gold: '#C9A05C',     // Sacred gold
          amber: '#D4A574',    // Amber glow
          white: '#F7F5F0',    // Sacred white
          smoke: '#E8E3DA',    // Smoke white
          cream: '#FAF7F2',    // Warm cream
          glow: '#F4E9D4',     // Soft glow
          green: '#8B9D83',    // Sage green (keep for compatibility)
          moon: '#F7F5F0',     // Moon white (compatibility)
          sand: '#E8E3DA',     // Sand (compatibility)
        },
        // Deep spirituality (for dark backgrounds)
        spirit: {
          deep: '#2A1810',     // Deep meditation
          void: '#0D0A08',     // The void
          light: '#F4E9D4',    // Awakening light
          shadow: '#1A120B',   // Shadow work
        },
        // Keep indigo for backwards compatibility - but map to earth tones
        indigo: {
          deep: '#3E3527',     // Map to earth-700
          DEFAULT: '#4F4535',  // Map to earth-600
          light: '#6B5D4F',    // Map to earth-500
        },
        // Keep cosmic/mystic for gradual migration - map to earth tones
        cosmic: {
          900: '#1A120B',      // Map to earth-900
          800: '#2C2419',      // Map to earth-800
          700: '#3E3527',      // Map to earth-700
          600: '#4F4535',      // Map to earth-600
        },
        mystic: {
          purple: '#9B8B7E',   // Map to desert-stone
          indigo: '#7C6A5C',   // Map to desert-dusk
          violet: '#A67B5B',   // Map to desert-clay
          lavender: '#D4B896', // Map to desert-sand
        }
      },
      fontSize: {
        // Add larger editorial sizes
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}