import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
        cacheDirectory: true,
    },
};

const config: Configuration = {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: babelLoader,
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                type: 'asset',
            },
            {
                test: /\.svg($|\?)/i,
                use: [babelLoader, 'svg-to-react-webpack-loader'],
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.tsx', '.ts'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                collapseWhitespace: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new ESLintPlugin({
            extensions: ['ts', 'tsx'],
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './public'),
                    to: path.resolve(__dirname, './dist'),
                },
            ],
        }),
    ],
};

export default config;
