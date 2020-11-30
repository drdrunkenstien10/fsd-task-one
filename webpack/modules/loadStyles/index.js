// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Constants
import { ROOT_DIR } from '../../utils/constants';

// Load Styles
export const loadStyles = env => ({
  plugins:
    env === 'production'
      ? [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })]
      : [],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader:
              env === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
            options: {},
          },
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                config: `${ROOT_DIR}/postcss.config.js`,
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader:
              env === 'production'
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
            options: {},
          },
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                config: `${ROOT_DIR}/postcss.config.js`,
              },
            },
          },
        ],
      },
    ],
  },
});
