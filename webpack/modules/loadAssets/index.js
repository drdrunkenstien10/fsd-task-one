// Core
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Constants
import { ASSETS_DIR } from '../../utils/constants';

// Load Assets
export const loadAssets = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/,
        use: {
          loader: 'file-loader',
          options: {},
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: `${ASSETS_DIR}/images/`, to: 'assets/images/' }],
    }),
  ],
});
