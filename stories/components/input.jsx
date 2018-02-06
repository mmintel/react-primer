import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { Input } from '../../src';
import { storiesOf } from '@storybook/react';
import TestIcon from 'react-icons/lib/md/check';

export default storiesOf('Components', module)
  .add('Input', () => {
    let prepend = select('Before', ['-', 'Test-Icon'], '-');
    let append = select('After', ['-', 'Test-Icon'], '-');
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
        <Input margin prepend={prepend} append={append} />
        <Input prepend={prepend} append={append} type="select" values={[
          {
            key: 'de',
            value: 'German',
          },
          {
            key: 'en',
            value: 'English',
          },
        ]} />
      </div>
    );
  });
