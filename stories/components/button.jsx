import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { Button } from '../../src';
import React from 'react';
import TestIcon from 'react-icons/lib/md/check';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

export default storiesOf('Components', module)
  .add('Button', () => {
    const disabled = boolean('Disabled', false);
    const block = boolean('Block', false);
    const label = text('Text', 'I am a button');
    const href = text('Href', 'http://...');
    const size = number('Size', -2);
    const useOverrides = boolean('Use Overrides', false);
    const style = object('Overrides', {
      backgroundColor: '#2185d0',
      '&:hover': {
        backgroundColor: '#1678c2',
      },
    });
    const overrides = {
      root(props) {
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
        overrides={useOverrides ? overrides : {}}
        before={before}
        after={after}
        size={size}
        onClick={action('clicked')}
      >
        {label}
      </Button>
    );
  })
