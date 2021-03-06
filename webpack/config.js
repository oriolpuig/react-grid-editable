import * as path from 'path';
import pkg from '../package.json';

export const AUTOPREFIXER_BROWSERS = [
  'Android 2.3', 'Android >= 4', 'Chrome >= 35', 'Firefox >= 31', 'Explorer >= 9',
  'iOS >= 7', 'Opera >= 12', 'Safari >= 7.1',
];

export const COMMON_CSS = [];

export function postcss(wpk) {
  return [
    require('postcss-import')({ addDependencyTo: wpk }),
    require('precss')(),
    require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    require('postcss-discard-comments')(),
    require('cssnano')(),
  ];
}

export const externals = {
  react: { commonjs: 'react', commonjs2: 'react', amd: 'React', root: 'React' },
  classnames: {
    commonjs: 'classnames', commonjs2: 'classnames', amd: 'classNames', root: 'classNames',
  },
};

export default {
  paths: {
    dist: path.join(__dirname, '../dist'),
    src: path.join(__dirname, '../src'),
    demo: path.join(__dirname, '../demo'),
    public: path.join(__dirname, '../public'),
    dev: path.join(__dirname, '../src/app.js'),
    devTemplate: path.join(__dirname, '../src/index.html'),
    demoTemplate: path.join(__dirname, '../demo/index.html'),
    publicTemplate: path.join(__dirname, '../public/index.html'),
    packageJson: path.join(__dirname, '../demo/index.html'),
  },
  pkg,
  filename: pkg.name,
  library: 'ReactGridEditable',
};
