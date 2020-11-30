// Core
import HTMLWebpackPlugin from 'html-webpack-plugin';

// Constants
import { HTML_DIR } from '../../utils/constants';

// Set Html
export const setHtml = env => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: `${HTML_DIR}/index.html`,
      filename: env === 'prduction' ? 'index.[contenthash].html' : 'index.html',
      title: '🚀 webpack',
    }),
  ],
});
