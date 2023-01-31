import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

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
  plugins: [
    //plugin for using custom index.html as template
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    //plugin to check building progress
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        //tsx and ts
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  //resolve is needed to add import file path without extentions
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
