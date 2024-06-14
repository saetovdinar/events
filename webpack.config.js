const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'asset/resource'
        }, 
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader',]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        {
            test: /\.(jpg|png|svg|jpeg|gif)$/,
            type: 'asset/resource'
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
        },
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "./index.html"
        }),
       
    ]
};