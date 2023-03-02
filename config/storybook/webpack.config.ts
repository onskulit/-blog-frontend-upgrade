import path from "path";
import { Configuration } from "webpack"
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import {BuildPaths} from '../build/types/config';

// config for storybook webpack
export default ({config}: {config: Configuration}) => {
    //needed to use absolute imports
    const paths: Pick<BuildPaths, 'src'> = {
        src: path.resolve(__dirname, '..', '..', 'src')
    }   
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));

    return config;
}