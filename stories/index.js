import './components/button';
import './components/container';
import './components/dimmer';
import './components/image';
import './components/loading';
import './components/headline';
import './components/expand';
import './components/accordion';
import './components/masonry';
import './components/grid';

import { addDecorator, linkTo, setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import PropsAddon from 'storybook-addon-props-fela';
import React from 'react';

setAddon(JSXAddon);
setAddon(PropsAddon);
