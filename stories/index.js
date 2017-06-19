import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { linkTo, setAddon, storiesOf } from '@storybook/react';

import Button from 'components/button';
import PropsAddon from 'storybook-addon-props-fela';
import React from 'react';
import Welcome from './Welcome';
import { action } from '@storybook/addon-actions';
import initFelaProvider from './initFela';

const FelaProvider = initFelaProvider();

setAddon(PropsAddon);

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .addWithProps('with text', () => {
    const disabled = boolean('disabled', false);
    const label = text('Text', 'I am a button');
    return (
      <Button
        disabled={disabled}
        onClick={action('clicked')}
      >
        {label}
      </Button>
    );
  })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
