const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'components': path.resolve('src/components'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style!css?modules!postcss!sass',
      },
    ],
  },
  postcss() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
      }),
    ];
  },
};
