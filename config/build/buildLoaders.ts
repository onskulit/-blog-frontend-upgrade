import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
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

    const cssLoader = buildCssLoader(isDev);
    return [
    // Order is impotrant here, so create variable to easily control an order
        assetsLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
};
