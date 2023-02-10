import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssWebpackPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const buildPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => {
  const { paths, isDev } = options;

  return [
    //plugin for using custom index.html as a template
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    //plugin to check building progress
    new webpack.ProgressPlugin(),
    //plugin to create css file in build instead of css code in js file
    new MiniCssWebpackPlugin({
      //file name in build
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    //needed to get webpack config variables as global variables
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    //needed to update website without page refresh
    new webpack.HotModuleReplacementPlugin(),
  ];
};
