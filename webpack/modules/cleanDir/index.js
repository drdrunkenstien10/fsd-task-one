// Core
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// Constants
import { DIST_DIR, BUILD_DIR } from '../../utils/constants';

// Clean DIST and BUILD dirs
export const cleanDir = env => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      root: env === 'production' ? BUILD_DIR : DIST_DIR,
    }),
  ],
});
