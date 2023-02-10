import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => {
  const { port } = options;
  return {
    port,
    // open browser tab with app after build
    open: true,
    // needed to fix problem when you update page on route ('/about' e.g.) and browser show error 'Cannot GET /about'
    historyApiFallback: true,
    // needed for hot module replacement
    hot: true,
  };
};
