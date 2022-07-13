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
        primary: '#71563A',
        secondary: '#5d432c',
        tertiary: '#796b5c',
        vanilla: '#f6f4ee',
        darkbrown: '#624835',
        bronze: '#C87B3F',
        beige: '#C1A883',
        success: '#9BBC40',
        desert: '#D7BDA5',
        isabel: '#F6F4EE',
        isabelcontrast: '#e0d7ce'
      }
    }
  },
  mode: 'silent'
}
