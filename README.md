# react-primer

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls]

# Requirements

- fela
- react-fela

# Usage

## Include theme

```javascript
import { ThemeProvider } from 'react-fela';
import { theme } from '@mmintel/react-primer';

const Layout = (props) => (
  <ThemeProvider theme={theme}>
    //...
  </ThemeProvider>
)
```
