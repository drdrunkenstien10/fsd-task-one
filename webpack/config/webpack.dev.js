// Core
import { merge } from 'webpack-merge';
import { HotModuleReplacementPlugin } from 'webpack';

// Constants
import { DIST_DIR, PORT, HOST } from '../utils/constants';

// Common Configuration
import getCommonConfig from './webpack.common';

// Development Configuration
export default () =>
  merge(getCommonConfig(), {
    output: {
      filename: '[name].js',
      path: DIST_DIR,
    },
    devServer: {
      contentBase: './dist',
      port: PORT,
      host: HOST,
      hot: true,
    },
    plugins: [new HotModuleReplacementPlugin()],
  });
