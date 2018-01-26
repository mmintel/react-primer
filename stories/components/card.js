import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Card, CardHeader, CardBody, CardFooter } from '../../src';

export default storiesOf('Elements', module)
  .add('Card', () => {
    return (
      <div>
        <Card>
          <CardHeader>Test</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eius nisi ad deserunt alias recusandae enim facilis, laboriosam atque, placeat iure.
          </CardBody>
          <CardFooter>
            Footer
          </CardFooter>
        </Card>
      </div>
    );
  });
