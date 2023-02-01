import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      //[] for getting name from entry
      filename: "[name].[contenthash].js",
      path: paths.build,
      //delete extra files
      clean: true,
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(),
    },
    //resolve is needed to add import file path without extentions
    resolve: buildResolvers(),
    //needed for mapping
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
};
