import ms from 'modularscale-js';
import Color from 'color';

const shadowOpacity = 0.05;

export default {
  calculateSize: size => `${Math.min(Math.max(ms(size, {
    base: 1,
    ratio: 1.25,
  }), 0.8), 5)}rem`,
  calculateSpacing: spacing => `${ms(spacing, {
    base: 1,
    ratio: 1.25,
  })}rem`,
  radius: '0.5rem',
  border: {
    width: '1px',
  },
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
  shadow: {
    1: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,${shadowOpacity})`,
    2: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,${shadowOpacity})`,
    3: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,${shadowOpacity})`,
    4: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,${shadowOpacity})`,
    5: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,${shadowOpacity})`,
  },
};
