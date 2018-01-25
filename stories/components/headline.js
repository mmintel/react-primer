import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { Headline } from '../../src';
import React from 'react';
import { storiesOf } from '@storybook/react';

export default storiesOf('Elements', module)
  .add('Headline', () => {
    const children = text('Children', 'Sample text');
    const size = number('Size', 1);
    return (
      <Headline size={size}>
        {children}
      </Headline>
    );
  });
