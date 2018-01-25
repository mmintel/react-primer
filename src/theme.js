import ms from 'modularscale-js';
import Color from 'color';

export default {
  calculateSize: (size) => `${ms(size, {
    base: 1,
  })}rem`,
  calculateSpacing: (spacing) => `${spacing}rem`,
  radius: '0.5rem',
  color: {
    black: Color('#000'),
    white: Color('#fff'),
    gray: {
      darker: Color('#111'),
      dark: Color('#333'),
      medium: Color('#AAA'),
      light: Color('#EEE'),
      lighter: Color('#FAFAFA'),
      lightest: Color('#FEFEFE'),
    },
  },
}
