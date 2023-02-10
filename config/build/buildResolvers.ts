import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // needed for absolute paths: https://webpack.js.org/configuration/resolve/#resolvealias
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {},
    // TODO: add alias
    /* {
      "@": paths.src,
    }, */
  };
};
