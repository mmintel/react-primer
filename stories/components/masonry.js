import { boolean, number, object, select, text, withKnobs } from '@storybook/addon-knobs';

import { Masonry, Image } from '../../src';
import React from 'react';
import initFelaProvider from '../initFela';
import { storiesOf } from '@storybook/react';

const FelaProvider = initFelaProvider();

export default storiesOf('Elements', module)
  .addDecorator(withKnobs)
  .addDecorator(FelaProvider)
  .add('Masonry', () => {
    const columns = number('Columns');
    return (
      <Masonry columns={columns}>
        <Image src="http://via.placeholder.com/250x400/e8117e/ffffff" alt="" />
        <Image src="http://via.placeholder.com/250x800/a93a39/ffffff" alt="" />
        <Image src="http://via.placeholder.com/250x400/aa6c39/ffffff" alt="" />
        <Image src="http://via.placeholder.com/250x400/2d882d/ffffff" alt="" />
        <Image src="http://via.placeholder.com/250x400/7d2a69/ffffff" alt="" />
        <Image src="http://via.placeholder.com/250x800/226665/ffffff" alt="" />
        <Image src="http://via.placeholder.com/250x400/502d73/ffffff" alt="" />
      </Masonry>
    );
  });
