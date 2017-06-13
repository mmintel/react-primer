const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  webpack: {
    aliases: {
      components: path.resolve('src/components'),
    },
    rules: {
      'sass-css': {
        modules: true,
        localIdentName: '[local]__[hash:base64:5]',
      },
    },
  },
};
