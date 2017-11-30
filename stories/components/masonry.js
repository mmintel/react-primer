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
    const columns = number('Columns', 4);
    const gutterWidth = number('Gutter Width', 1);
    const gutterHeight = number('Gutter Height', 1);
    return (
      <Masonry columns={columns} gutterWidth={gutterWidth} gutterHeight={gutterHeight}>
        <Image fluid src="http://via.placeholder.com/300x400/e8117e/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/300x800/314663/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/300x400/135223/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/300x200/135223/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/300x200/135223/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/300x400/156234/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/300x800/195692/ffffff" alt="" />
      </Masonry>
    );
  });
