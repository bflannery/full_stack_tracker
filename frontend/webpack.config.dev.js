const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

module.exports = merge([
  parts.devServer({
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '8080',
  }),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.loadCSS(),
  parts.loadImages(),
]);
