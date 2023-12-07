import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
        cacheDirectory: true,
    },
};

const config: Configuration = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dev'),
        filename: 'main.js',
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: babelLoader,
            },
            {
                test: /\.(png|jpg|ico)$/,
                type: 'asset/resource',
            },
            {
                test: /\.svg($|\?)/i,
                use: [babelLoader, 'svg-to-react-webpack-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new ESLintPlugin({
            extensions: ['ts', 'tsx'],
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, 'build'),
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
    },
};

export default config;
