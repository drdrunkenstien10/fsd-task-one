// Core
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { readdirSync } from 'fs';

// Constants
import { PUG_DIR } from '../../utils/constants';

// Pug Pages
const pugPages = readdirSync(`${PUG_DIR}/pages`).filter(fileName =>
  fileName.endsWith('.pug')
);

// Set Pug
export const setPug = () => ({
  plugins: [
    ...pugPages.map(
      page =>
        new HTMLWebpackPlugin({
          template: `${PUG_DIR}/pages/${page}`,
          filename: page.replace(/\.pug/, '.html'),
          chunks: [`${page.replace(/\.pug/, '')}`],
        })
    ),
  ],
  module: {
    rules: [{ test: /\.pug$/, use: 'pug-loader' }],
  },
});
