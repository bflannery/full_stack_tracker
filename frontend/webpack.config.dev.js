const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

module.exports = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.loadCSS(),
  parts.loadImages(),
]);
