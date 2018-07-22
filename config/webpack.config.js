const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // extends: path.resolve("./config/base.config.js"),
    name: "dev",
    mode: 'development',
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname, "../", "dist")
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
    devtool: "source-map",
    plugins: [
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