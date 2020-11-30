// Core
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
          { loader: 'css-loader', options: {} },
          { loader: 'sass-loader', options: {} },
        ],
      },
    ],
  },
});
