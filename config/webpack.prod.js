const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const distPath = path.resolve(__dirname, "../", "publish");


module.exports = {
    name: "prod",
    mode: "production",
    entry: [
        "./src/root.tsx",
    ],
    output: {
        path: distPath,
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 131072,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 4,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin([distPath]),
        new HtmlWebpackPlugin({title: "react-redux-saga-typescript-starter", template: "src/index.html"}),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }, {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {
                            configFileName: "config/tsconfig.json",
                            useCache: false,
                            useBabel: true,
                            babelOptions: {
                                babelrc: false,
                                presets: [
                                    [
                                        "@babel/preset-env", {
                                            targets: {
                                                browsers: ["last 2 versions"]
                                            },
                                            modules: false
                                        }
                                    ]
                                ]
                            },
                            babelCore: "@babel/core"
                        }
                    }
                ]
            }
        ]
    }
}