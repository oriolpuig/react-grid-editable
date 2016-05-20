import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config, { postcss, COMMON_CSS } from './config';

export default {
  entry: config.paths.demo + '/index.js',
  output: {
    path: config.paths.public,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: config.paths.demo,
        loader: 'babel'
      }
    ]
  }
};
