import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { Dimmer } from '../../src';
import React from 'react';
import { action } from '@storybook/addon-actions';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Dimmer', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('default', () => {
    const enabled = boolean('Enabled', true);
    return (
      <Dimmer enabled={enabled} />
    );
  });
