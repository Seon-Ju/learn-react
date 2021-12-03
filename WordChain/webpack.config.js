const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'word-chain-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },

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
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    } // 소스코드에 변경점이 생기면 그에 따라 dist에 저장했던 결과물을 수정
};