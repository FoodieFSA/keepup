const isDev = process.env.NODE_ENV === 'development'
const HtmlWebPackPlugin = require("html-webpack-plugin");
console.log(isDev,process.env.NODE_ENV,".........................")
module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}