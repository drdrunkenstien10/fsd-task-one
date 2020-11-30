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
      entry: [SRC_DIR],
      resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
      },
    },
    modules.setHtml(env),
    modules.loadStyles(env),
    modules.cleanDir(env),
    modules.transpileCode()
  );
