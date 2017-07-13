import { color, withKnobs } from '@storybook/addon-knobs';

import Loading from 'components/loading';
import React from 'react';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Loading', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('default', () => {
    const c = color('Color', '#333');
    return (
      <Loading color={c} />
    );
  });
