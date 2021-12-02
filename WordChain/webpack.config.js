const path = require('path'); // 노드에서 경로를 쉽게 조작할 수 있도록 하는 것

module.exports = {
    name: 'word-chain-setting',
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
            test: /\.jsx?/, // js와 jsx 파일에 rule을 적용하겠다는 정규표현식
            loader: 'babel-loader', // 어떤 rule? babel!
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: { // output
        path: path.join(__dirname, 'dist'), // dirname은 현재 폴더를 가리키고, dist는 현재 폴더 안에 들어있는 폴더
        filename: 'app.js',
    }
};