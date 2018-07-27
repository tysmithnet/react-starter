const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require('../config/webpack.config.js');
const compiler = webpack(config);

const app = express();

app.use(webpackDevMiddleware(compiler, {publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler, {
    log:console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
}));

app.get("/ping", (req, res) => {
    res.json({message: "pong"});
});

app.post("/api/auth", (req, res) => {
    if(!req.body.id || !req.body.password) {
        res.status(400);
    }
    // IMPENTRABLE SECURITY
    if(req.body.id == "admin" && req.body.password == "password") {
        res.json({permissions: [
            "ADMIN.EDIT"
        ]});
    }
    else {
        res.status(401);
    }
});

app.listen(8080, () => {
    console.log("Listening on http://localhost:8080/");
});