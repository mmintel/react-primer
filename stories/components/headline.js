import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import Headline from 'components/headline';
import React from 'react';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Headline', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('default', () => {
    const children = text('Children', 'Sample text');
    const size = number('Size', 1);
    return (
      <Headline size={size}>
        {children}
      </Headline>
    );
  });
