const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode : 'development',
    entry: {
      index: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
      filename: 'bundle.min.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: false,
                ecma: 6,
                mangle: true
            },
            sourceMap: true
            })
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html'),
          inject: false
        }),
    ]
};
