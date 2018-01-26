import React from 'react';
import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '../../src';

export default storiesOf('Elements', module)
  .add('Card', () => {
    const level = number('Level', 0);
    return (
      <div>
        <Card level={level} margin={{ bottom: 1 }}>
          <CardHeader>Test</CardHeader>
          <Image stretch src="http://24.media.tumblr.com/tumblr_lyzlrzTBr71r6b7kmo1_500.jpg" />
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eius nisi ad deserunt alias recusandae enim facilis, laboriosam atque, placeat iure.
          </CardBody>
          <CardFooter>
            <Button size={-1}>Submit</Button>
          </CardFooter>
        </Card>
        <Card level={level}>
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
