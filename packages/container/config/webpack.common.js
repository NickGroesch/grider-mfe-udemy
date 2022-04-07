module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', "@babel/preset-env"],//babel process jsx, es>5 => es5
                        plugins: ['@babel/plugin-transform-runtime'],//enables advanced features async/await, etc
                    }
                }
            }
        ]
    }
}