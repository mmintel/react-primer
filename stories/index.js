import './components/button';
import './components/container';
import './components/dimmer';
import './components/image';
import './components/loading';
import './components/headline';

import { addDecorator, linkTo, setAddon, storiesOf } from '@storybook/react';

import PropsAddon from 'storybook-addon-props-fela';
import React from 'react';

setAddon(PropsAddon);
