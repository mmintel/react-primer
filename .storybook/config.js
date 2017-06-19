import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories');
}

setOptions({
  name: 'React-primer',
  url: 'https://example.com',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

configure(loadStories, module);
