const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'react-router',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
            new RefreshWebpackPlugin(),
    ],

    entry: { // input
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties', 'react-refresh/babel'],
            },
        }],
    },

    plugins: [
        new RefreshWebpackPlugin(),
    ],

    output: {
        path: path.join(__dirname, 'dist'), // 실제 경로
        filename: 'app.js',
        publicPath: '/dist', // webpack-dev-server가 사용하는 결과물의 상대경로
    },

    devServer: {
        historyApiFallback: true,
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    }
};