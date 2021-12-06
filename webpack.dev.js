const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const port = 8080

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
})
