/* global document */
import { Provider } from 'react-fela';
import React from 'react';
import { createRenderer } from 'fela';
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer';
import prefixer from 'fela-plugin-prefixer';

const config = {
  plugins: [
    placeholderPrefixer(),
    prefixer(),
  ],
};
const renderer = createRenderer(config);

const ss = document.createElement('style');
ss.id = 'stylesheet';
document.body.appendChild(ss);
const stylesheet = document.querySelector('#stylesheet');

export default () =>
  story => (
    <Provider renderer={renderer} mountNode={stylesheet}>
      {story()}
    </Provider>
    );
