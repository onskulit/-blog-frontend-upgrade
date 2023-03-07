import path from "path";
import { Configuration, RuleSetRule } from "webpack"
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import {BuildPaths} from '../build/types/config';

// config for storybook webpack
export default ({config}: {config: Configuration}) => {
    // needed to use absolute imports
    const paths: Pick<BuildPaths, 'src'> = {
        src: path.resolve(__dirname, '..', '..', 'src')
    }   
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map<RuleSetRule | "...">((rule: RuleSetRule | "...") => {
        if (rule === '...') {
            return rule;
        }

        if(/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg/i};
        }
        
        return rule;
    });
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));

    return config;
}