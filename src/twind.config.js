/** @type {import('twind').Configuration} */
export default {
  theme: {
    extend: {
      screens: {
        standalone: { raw: '(display-mode:standalone)' },
      },
      fontFamily: {
        sans: `Poppins, sans-serif`,
      },
      colors: {
        primary: '#967c61',
        secondary: '#cbab7f',
        tertiary: '#dcd2c9',
        vanilla: '#f6f4ee',
        darkbrown: '#5d432c'
      }
    },
    // colors: {
    //   primary: '#967c61',
    //   secondary: '#cbab7f',
    //   tertiary: '#dcd2c9'
    // },
  },
  mode: 'silent'
}
