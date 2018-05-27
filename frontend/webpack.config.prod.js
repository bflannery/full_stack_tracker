const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const glob = require('glob');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src', ),
  build: path.join(__dirname, 'build'),
};

module.exports = merge([
  {
    performance: {
      hints: 'warning', // "error" or false are valid too
      maxEntrypointSize: 500000, // in bytes, default 250k
      maxAssetSize: 450000, // in bytes
    },
  },
  {
    output: {
      chunkFilename: '[name].[chunkhash:4].js',
      filename: '[name].[chunkhash:4].js',
    },
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true,
    },
  }),
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()],
  }),
  // Order matters! Purify has to be after Extract
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]',
    },
  }),
  parts.generateSourceMaps({ type: 'source-map' }),
  {
    optimization: {
      splitChunks: {
        chunks: 'initial',
      },
      runtimeChunk: {
        name: 'manifest',
      },
    },
  },
  parts.attachRevision(),
]);