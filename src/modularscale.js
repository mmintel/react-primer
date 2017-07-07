import ms from 'modularscale-js';

export default function (n) {
  return ms(n, {
    base: 1,
    ratio: 1.414, //Augmented Fourth
  });
}
