const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const output = {
    path: path.resolve('dist'),
    filename: 'bundled.js'
};
if (process.env.NODE_ENV === 'production') {
    output.libraryTarget = 'commonjs2';
}

module.exports = {
    entry: process.env.NODE_ENV === 'production' ? './src/app.js' : './src/dev.js',
    output,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};
