const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : false,
  entry: './js/index',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0', 'env'],
          plugins: [
            'react-html-attrs',
            'transform-decorators-legacy',
            'transform-class-properties',
            'module-resolver',
          ],
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
    ],
  },
  devServer: {
    https: debug ? false : true,
    historyApiFallback: true,
  },
  output: {
    filename: 'index.min.js',
    path: `${__dirname}/dist/`,
  },
  plugins: debug ? [new HtmlPlugin({ template: 'index.html' })] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin(),
    new HtmlPlugin({ template: 'index.html' }),
  ],
};
