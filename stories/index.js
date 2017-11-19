import './components/button';
import './components/container';
import './components/dimmer';
import './components/image';
import './components/loading';
import './components/headline';
import './components/expand';
import './components/accordion';
import './components/masonry';

import { addDecorator, linkTo, setAddon, storiesOf } from '@storybook/react';

import PropsAddon from 'storybook-addon-props-fela';
import React from 'react';

setAddon(PropsAddon);
