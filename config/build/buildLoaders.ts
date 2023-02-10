import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  // if do not use typescript - also babel-loader is neaded
  const typescriptLoader = {
    // tsx and ts
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // If isDev we don't need plugin to create sepate css file in build
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          // needed to use css modules
          modules: {
            // needed to use both common css and css modules (without it webpack also make hash classname instead of classname in css file)
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // in dev we use readable classnames, in prod - hash names
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
  return [
    // Order is impotrant here, so create variable to easily control an order
    assetsLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ];
};
