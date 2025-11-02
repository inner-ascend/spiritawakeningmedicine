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
          ember: '#8C402E',    // Terracotta ember
          canyon: '#A65437',   // Canyon walls
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
          purple: '#7B5E7B',   // Sacred purple - transformation
          indigo: '#4A4E69',   // Ceremonial indigo - deep work
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
        // Ocean colors (Mazunte coastal connection)
        ocean: {
          turquoise: '#5A9A9E', // Healing waters
          deep: '#2D5F63',      // Pacific depths
          foam: '#A8BFBF',      // Gentle waves
          coral: '#E07A5F',     // Sunset reflection
        },
        // Jungle colors (plant medicine connection)
        jungle: {
          deep: '#3D5941',      // Dense forest
          sage: '#5F7F6F',      // Misty green
          canopy: '#4A5D4F',    // Tree cover
          moss: '#7A9B76',      // Vibrant moss
          emerald: '#4A7C59',   // Rich emerald
        },
        // Sunset colors (ceremonial transitions)
        sunset: {
          rose: '#D4806A',      // Desert rose
          peach: '#E8B4A0',     // Warm peach
          mauve: '#B08B8B',     // Soft mauve
          blush: '#C9A5A0',     // Gentle blush
        },
        // Earth minerals (grounding energies)
        mineral: {
          copper: '#B87333',    // Warm copper
          bronze: '#8C6D4F',    // Ancient bronze
          rust: '#A0583C',      // Iron rust
          terracotta: '#C65D3B', // Bright terracotta
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