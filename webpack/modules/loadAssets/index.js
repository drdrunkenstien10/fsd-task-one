// Core
import CopyWebpackPlugin from 'copy-webpack-plugin';

// Constants
import { ASSETS_DIR } from '../../utils/constants';

// Load Assets
export const loadAssets = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'assets/images/[name][contenthash].[ext]' },
        },
      },
      // {
      //   test: /\.(png|jpg|jpeg|webp|gif|svg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {},
      //   },
      // },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: `${ASSETS_DIR}/images/`, to: 'assets/images/' }],
    }),
  ],
});
