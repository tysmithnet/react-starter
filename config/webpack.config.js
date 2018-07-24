const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, "../", "dist");

module.exports = {
    // extends: path.resolve("./config/base.config.js"),
    name: "dev",
    mode: "development",
    entry: "./src/main.tsx",
    output: {
        path: distPath,
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({
            title: "react-redux-saga-typescript-starter",
            template: "src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: path.resolve(__dirname, "../", ".cache"),
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "config/tsconfig.json",
                            useCache: true,
                            useBabel: true,
                            cacheDirectory: ".cache",
                            babelOptions: {
                                babelrc: false,
                                presets: [
                                    ["@babel/preset-env", { targets: { browsers: ["last 2 versions"] }, modules: false }]
                                ]
                            },
                            babelCore: "@babel/core"
                        }
                    },
                ]
            }
        ]
    }
}