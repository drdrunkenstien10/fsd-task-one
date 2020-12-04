// Core
import { merge } from 'webpack-merge';

// Constants
import { SRC_DIR } from '../utils/constants';

// Modules
import * as modules from '../modules';

// Env
const env = process.env.NODE_ENV;

// Common Configuration
export default () =>
  merge(
    {
      entry: {
        form_elements: [`${SRC_DIR}/form_elements.js`],
        footers_and_headers: [`${SRC_DIR}/footers_and_headers.js`],
        cards: [`${SRC_DIR}/cards.js`],
      },
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
      },
    },
    modules.setHtml(env),
    modules.loadStyles(env),
    modules.cleanDir(env),
    modules.transpileCode(),
    modules.setPug(),
    modules.loadAssets()
  );
