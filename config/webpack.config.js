const path = require("path");

module.exports = {
    extends: path.resolve("./config/base.config.js"),
    name: "dev",
    mode: 'development',
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "../", "dist")
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
    devtool: "source-map",
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
                                    [
                                        "@babel/preset-env", {
                                            modules: false
                                        }
                                    ]
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