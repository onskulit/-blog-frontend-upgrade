import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolvers } from "./config/build/buildResolvers";

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    //[] for getting name from entry
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    //delete extra files
    clean: true,
  },
  plugins: buildPlugins(),
  module: {
    rules: buildLoaders(),
  },
  //resolve is needed to add import file path without extentions
  resolve: buildResolvers(),
};

export default config;
