import { color, withKnobs } from '@storybook/addon-knobs';

import { Loading } from '../../src';
import React from 'react';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('Loading', () => {
    const c = color('Color', '#333');
    return (
      <Loading color={c} />
    );
  });
