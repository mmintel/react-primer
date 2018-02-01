import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { Image } from '../../src';
import { storiesOf } from '@storybook/react';

export default storiesOf('Components', module)
  .add('Image', () => {
    const fluid = boolean('Fluid', true);
    const stretch = boolean('Stretch', true);
    const src = text('Src', 'http://24.media.tumblr.com/tumblr_lyzlrzTBr71r6b7kmo1_500.jpg');
    const alt = text('Alt', 'Kitten example');
    return (
      <Image fluid={fluid} stretch={stretch} src={src} alt={alt} />
    );
  });
