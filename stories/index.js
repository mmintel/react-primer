import { addDecorator, linkTo, setAddon, storiesOf } from '@storybook/react';
import { boolean, object, select, text, withKnobs } from '@storybook/addon-knobs';

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
    const disabled = boolean('Disabled', false);
    const block = boolean('Block', false);
    const size = select('Size', ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'massive'], 'medium');
    const label = text('Text', 'I am a button');
    const href = text('Href', 'http://...');
    const style = object('Style', {
      backgroundColor: '#2185d0',
      '&:hover': {
        backgroundColor: '#1678c2',
      },
    });
    return (
      <Button
        disabled={disabled}
        block={block}
        size={size}
        href={href}
        style={style}
        onClick={action('clicked')}
      >
        {label}
      </Button>
    );
  });
