import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { Image } from '../../src';
import React from 'react';
import { action } from '@storybook/addon-actions';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('Image', () => {
    const fluid = boolean('Fluid', true);
    const src = text('Src', 'http://24.media.tumblr.com/tumblr_lyzlrzTBr71r6b7kmo1_500.jpg');
    const alt = text('Alt', 'Kitten example');
    return (
      <Image fluid={fluid} src={src} alt={alt} />
    );
  });
