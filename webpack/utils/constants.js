// Core
import { path as ROOT_DIR } from 'app-root-path';
import { resolve } from 'path';

// Constants
export { ROOT_DIR };
export const SRC_DIR = resolve(ROOT_DIR, 'src');
export const DIST_DIR = resolve(ROOT_DIR, 'dist');
export const BUILD_DIR = resolve(ROOT_DIR, 'build');
export const HTML_DIR = resolve(ROOT_DIR, 'src/html');
export const PUG_DIR = resolve(ROOT_DIR, 'src/pug');
export const ASSETS_DIR = resolve(ROOT_DIR, 'src/assets');
export const PORT = 5001;
export const HOST = 'localhost';
