import { action, linkTo, setAddon, storiesOf } from '@kadira/storybook';

import Button from 'components/button';
import PropsAddon from 'storybook-addon-props-fela';
import React from 'react';
import Welcome from './Welcome';
import initFelaProvider from './initFela';

const FelaProvider = initFelaProvider();

setAddon(PropsAddon);

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .addDecorator(FelaProvider)
  .addWithProps('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
