const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    rules: {
      'sass-css': {
        modules: true,
        localIdentName: '[local]__[hash:base64:5]',
      },
    },
  },
};
