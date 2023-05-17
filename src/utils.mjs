import {dirname, join} from "path";
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/**
 * Resolve path to package from any npm workspace
 *
 * Used by npm workspaces to find packages that might be hoisted to
 * the project root node_modules
 *
 * @param {string} packageName - Installed npm package name
 * @param {string} [childPath] - Optional child directory path
 * @returns {string} Path to installed npm package
 */
export function packageNameToPath (packageName, childPath = '') {
  return join(dirname(require.resolve(`${packageName}/package.json`)), childPath)
}
