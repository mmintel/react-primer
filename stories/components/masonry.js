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
    const columns = number('Columns', 2);
    return (
      <Masonry columns={columns} columnWidth={150}>
        <Image fluid src="http://via.placeholder.com/150x400/e8117e/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/150x800/314663/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/150x400/135223/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/150x200/135223/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/150x200/135223/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/150x400/156234/ffffff" alt="" />
        <Image fluid src="http://via.placeholder.com/150x800/195692/ffffff" alt="" />
      </Masonry>
    );
  });
