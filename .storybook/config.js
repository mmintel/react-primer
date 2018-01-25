import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import initFelaProvider from './initFela';
const FelaProvider = initFelaProvider();

addDecorator(withKnobs);
addDecorator(FelaProvider);

function loadStories() {
  require('../stories');
}

setOptions({
  name: 'React-primer',
  url: 'https://example.com',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

configure(loadStories, module);
