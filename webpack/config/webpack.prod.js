// Core
import { merge } from 'webpack-merge';

// Constants
import { BUILD_DIR } from '../utils/constants';

// Common Configuration
import getCommonConfig from './webpack.common';

// Production Configuration
export default () =>
  merge(getCommonConfig(), {
    output: {
      filename: '[name].[contenthash].js',
      path: BUILD_DIR,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
  });
