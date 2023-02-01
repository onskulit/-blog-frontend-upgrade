import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
  //if do not use typescript - also babel-loader is neaded
  const typescriptLoader = {
    //tsx and ts
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  return [
    //Order is impotrant here, so create variable to easily control an order
    typescriptLoader,
    cssLoader,
  ];
};
