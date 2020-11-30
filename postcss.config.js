const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');

module.exports = {
  plugins: [
    autoprefixer,
    mqpacker,
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }],
    }),
  ],
};
