const path = require('path');

module.exports = {
    name: 'rock-scissors-paper',
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
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'), // 실제 경로
        filename: 'app.js',
        publicPath: '/dist', // webpack-dev-server가 사용하는 결과물의 상대경로
    }
};