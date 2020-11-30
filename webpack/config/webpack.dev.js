// Core
import { merge } from 'webpack-merge';

// Constants
import { DIST_DIR } from '../utils/constants';

// Common Configuration
import getCommonConfig from './webpack.common';

// Development Configuration
export default () =>
  merge(getCommonConfig(), {
    output: {
      filename: '[name].js',
      path: DIST_DIR,
    },
  });
