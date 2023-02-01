import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  const { port } = options;
  return {
    port,
    //open browser tab with app after build
    open: true,
  };
};
