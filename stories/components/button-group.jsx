import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Button, ButtonGroup } from '../../src';

export default storiesOf('Components', module)
  .add('Button Group', () => {
    return (
      <div>
        <ButtonGroup margin={{ right: 1 }}>
          <Button>Test</Button>
          <Button>Test</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Test</Button>
          <Button>Test</Button>
          <Button>Test</Button>
          <Button>Test</Button>
        </ButtonGroup>
      </div>
    )
  })
