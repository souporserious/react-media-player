var path = require("path");
var webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
var TARGET = process.env.TARGET || null;

var config = {
    entry: {},
    output: {
        path: path.join(__dirname, "example"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.(js|jsx)/, exclude: /node_modules/, use: "babel-loader"},
            {test: /\.(css|scss)/, use: "style!css!postcss!sass?sourceMap"}
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    plugins: [],
    devServer: {
        contentBase: "./example",
        inline: true
    }
};

if (TARGET === "minify") {
    config.entry.index = path.join(__dirname, "example/index.jsx");

    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    );

    config.plugins.push(
        new webpack.optimize.TerserPlugin()
    );
} else {
    config.entry.index = [
        "webpack/hot/dev-server",
        path.join(__dirname, "example/index.jsx")
    ];
}

module.exports = config;
