import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    //tsx and ts
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [
    //Order is impotrant here, so create variable to easily control an order
    typescriptLoader,
  ];
};
