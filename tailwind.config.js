/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Apple design tokens ──────────────────────────
        apple: {
          blue:        '#0066cc',   // Action Blue — single accent
          'blue-dark': '#2997ff',   // Sky Link Blue — on dark tiles
          ink:         '#1d1d1f',   // Near-black ink (not pure black)
          'ink-80':    '#333333',   // Ink muted 80
          'ink-48':    '#7a7a7a',   // Ink muted 48 / fine-print
          canvas:      '#ffffff',   // Pure white tile
          parchment:   '#f5f5f7',   // Off-white parchment tile
          pearl:       '#fafafc',   // Pearl (ghost buttons)
          tile:        '#272729',   // Dark tile 1 (primary)
          'tile-2':    '#2a2a2c',   // Dark tile 2
          'tile-3':    '#252527',   // Dark tile 3
          black:       '#000000',   // True black (nav only)
          hairline:    '#e0e0e0',   // Card borders
          divider:     '#f0f0f0',   // Soft divider
          muted:       '#cccccc',   // Secondary copy on dark
        },
      },
      fontFamily: {
        // Inter as SF Pro substitute per DESIGN.md guidance
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Apple type scale
        'display-hero': ['56px', { lineHeight: '1.07', letterSpacing: '-0.01em',  fontWeight: '600' }],
        'display-lg':   ['40px', { lineHeight: '1.10', letterSpacing: '-0.009em', fontWeight: '600' }],
        'display-md':   ['34px', { lineHeight: '1.47', letterSpacing: '-0.011em', fontWeight: '600' }],
        'lead':         ['28px', { lineHeight: '1.14', letterSpacing: '0.007em',  fontWeight: '400' }],
        'lead-airy':    ['24px', { lineHeight: '1.5',  letterSpacing: '0',        fontWeight: '300' }],
        'tagline':      ['21px', { lineHeight: '1.19', letterSpacing: '0.011em',  fontWeight: '600' }],
        'body-strong':  ['17px', { lineHeight: '1.24', letterSpacing: '-0.022em', fontWeight: '600' }],
        'body-apple':   ['17px', { lineHeight: '1.47', letterSpacing: '-0.022em', fontWeight: '400' }],
        'caption':      ['14px', { lineHeight: '1.43', letterSpacing: '-0.013em', fontWeight: '400' }],
        'caption-strong':['14px',{ lineHeight: '1.29', letterSpacing: '-0.013em', fontWeight: '600' }],
        'nav-link':     ['12px', { lineHeight: '1.0',  letterSpacing: '-0.007em', fontWeight: '400' }],
        'fine-print':   ['12px', { lineHeight: '1.0',  letterSpacing: '-0.007em', fontWeight: '400' }],
        'micro':        ['10px', { lineHeight: '1.3',  letterSpacing: '-0.005em', fontWeight: '400' }],
      },
      borderRadius: {
        'apple-xs':   '5px',
        'apple-sm':   '8px',
        'apple-md':   '11px',
        'apple-lg':   '18px',
        'apple-pill': '9999px',
      },
      spacing: {
        'section': '80px',   // Apple section vertical padding token
        'tile-v':  '120px',  // Taller tiles for hero sections
      },
      boxShadow: {
        // The ONE Apple product shadow — only for imagery, never UI chrome
        'product': 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0px',
      },
    },
  },
  plugins: [],
}
