import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/config";

export const buildPlugins = (
  paths: BuildPaths
): webpack.WebpackPluginInstance[] => {
  return [
    //plugin for using custom index.html as a template
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    //plugin to check building progress
    new webpack.ProgressPlugin(),
  ];
};
