import { addDecorator, linkTo, setAddon, storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

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

addDecorator(withKnobs);
addDecorator(FelaProvider);

storiesOf('Button', module)
  .add('with text', () => {
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
