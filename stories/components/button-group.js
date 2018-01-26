import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Button, ButtonGroup } from '../../src';

export default storiesOf('Elements', module)
  .add('Button Group', () => {
    return (
      <div>
        <ButtonGroup>
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
