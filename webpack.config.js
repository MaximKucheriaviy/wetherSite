const path = require('path');
const htmlWebpacPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new htmlWebpacPlugin({template: './src/index.html'})
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        //clientLogLevel: 'silent',
        port: 8888,
    },
    module:{
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
        ]
    }
}