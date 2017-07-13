import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import Headline from 'components/container';
import React from 'react';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Headline', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('default', () => {
    const children = text('Children', 'Sample text');
    return (
      <Headline>
        {children}
      </Headline>
    );
  });
