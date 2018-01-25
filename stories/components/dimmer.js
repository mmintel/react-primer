import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { Dimmer } from '../../src';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

export default storiesOf('Elements', module)
  .add('Dimmer', () => {
    const enabled = boolean('Enabled', true);
    return (
      <Dimmer enabled={enabled} />
    );
  });
