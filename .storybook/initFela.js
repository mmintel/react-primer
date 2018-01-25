/* global document */
import { Provider, ThemeProvider } from 'react-fela';
import React from 'react';
import { createRenderer } from 'fela';
import fallbackValue from 'fela-plugin-fallback-value'
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer';
import prefixer from 'fela-plugin-prefixer';
import { theme } from '../src';
console.log(theme)
const config = {
  plugins: [
    placeholderPrefixer(),
    prefixer(),
    fallbackValue(),
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
      <ThemeProvider theme={theme}>
        {story()}
      </ThemeProvider>
    </Provider>
  );
