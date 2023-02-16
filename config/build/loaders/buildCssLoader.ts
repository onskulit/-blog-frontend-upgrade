import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => ({
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
});