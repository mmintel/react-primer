import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { Button } from '../../src';
import React from 'react';
import TestIcon from 'react-icons/lib/md/check';
import { action } from '@storybook/addon-actions';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('Button', () => {
    const disabled = boolean('Disabled', false);
    const block = boolean('Block', false);
    const label = text('Text', 'I am a button');
    const href = text('Href', 'http://...');
    const style = object('Style', {
      backgroundColor: '#2185d0',
      '&:hover': {
        backgroundColor: '#1678c2',
      },
    });
    const appliedStyle = {
      button(props) {
        return style
      }
    };

    let before = select('Before', ['-', 'Test-Icon'], '-');
    let after = select('After', ['-', 'Test-Icon'], '-');
    if (before === 'Test-Icon') {
      before = <TestIcon />;
    } else {
      before = null;
    }
    if (after === 'Test-Icon') {
      after = <TestIcon />;
    } else {
      after = null;
    }
    return (
      <Button
        disabled={disabled}
        block={block}
        href={href}
        design={appliedStyle}
        before={before}
        after={after}
        onClick={action('clicked')}
      >
        {label}
      </Button>
    );
  })
