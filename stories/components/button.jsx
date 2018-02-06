import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { Button } from '../../src';
import React from 'react';
import TestIcon from 'react-icons/lib/md/adjust';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

export default storiesOf('Components', module)
  .add('Button', () => {
    const disabled = boolean('Disabled', false);
    const block = boolean('Block', false);
    const label = text('Text', 'I am a button');
    const href = text('Href', 'http://...');
    const size = number('Size', 1);
    const useExtend = boolean('Use Extend (doc only)', false);
    const style = object('Extend', {
      backgroundColor: '#2185d0',
      '&:hover': {
        backgroundColor: '#1678c2',
      },
    });
    const extend = {
      root(props) {
        return style
      }
    };

    let prepend = select('Prepend', ['-', 'Test-Icon'], '-');
    let append = select('Append', ['-', 'Test-Icon'], '-');
    if (prepend === 'Test-Icon') {
      prepend = <TestIcon />;
    } else {
      prepend = null;
    }
    if (append === 'Test-Icon') {
      append = <TestIcon />;
    } else {
      append = null;
    }
    return (
      <div>
        <Button
          disabled={disabled}
          block={block}
          href={href}
          extend={useExtend ? extend : {}}
          prepend={prepend}
          append={append}
          size={size}
          onClick={action('clicked')}
          >
            {label}
          </Button>
          <Button
            disabled={disabled}
            block={block}
            href={href}
            extend={useExtend ? extend : {}}
            prepend={prepend}
            append={append}
            size={size}
            onClick={action('clicked')}
            margin={{ left: 1 }}
            >
              {label}
            </Button>
      </div>
    );
  })
