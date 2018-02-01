import { color } from '@storybook/addon-knobs';
import { Loading } from '../../src';
import React from 'react';
import { storiesOf } from '@storybook/react';

export default storiesOf('Components', module)
  .add('Loading', () => {
    const c = color('Color', '#333');
    return (
      <Loading color={c} />
    );
  });
