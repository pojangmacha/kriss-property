module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#2E3A23',   // hijau zaitun gelap - elegan & profesional
        secondary: '#C4B69C', // beige hangat - lembut untuk background
        accent: '#6E8B3D',    // hijau daun - untuk tombol dan highlight
        neutral: '#F5F1E3',   // krem lembut - untuk area konten
        dark: '#1E1E1E',      // abu gelap - untuk dark mode
        light: '#FFFFFF',     // putih - untuk teks terang
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.stroke-text': {
          '--tw-text-opacity': '1',
          '-webkit-text-stroke-width': '1.4px',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-stroke-primary': {
          '-webkit-text-stroke-color': theme('colors.primary'),
        },
        '.text-stroke-secondary': {
          '-webkit-text-stroke-color': theme('colors.secondary'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'dark']);
    },
  ],
};
