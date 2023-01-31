import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

export const buildPlugins = (): webpack.WebpackPluginInstance[] => {
  return [
    //plugin for using custom index.html as template
    new HTMLWebpackPlugin({
      /* TODO: fix path */
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    //plugin to check building progress
    new webpack.ProgressPlugin(),
  ];
};
