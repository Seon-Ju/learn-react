const path = require('path'); // 노드에서 경로를 쉽게 조작할 수 있도록 하는 것

module.exports = {
    name: 'hello-webpack-setting',
    mode: 'development', // 실서비스에서는 production으로 변경
    devtool: 'eval', // 빠르게 하겠다는 말

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

    output: { // output
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }
};