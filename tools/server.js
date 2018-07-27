var http = require("http");
var express = require("express");
require("console-stamp")(console, "HH:MM:ss.l");

const app = express();

app.use(require("morgan")("short"));

(() => {
    const webpack = require("webpack");
    const webpackConfig = require("../config/webpack.config.js");
    const compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        logLevel: "warn",
        publicPath: webpackConfig.output.publicPath,
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log,
        path: "/__webpack_hmr",
        heartbeat: 10 * 1000
    }));
})();

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

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

if (require.main === module) {
    var server = http.createServer(app);
    server.listen(process.env.PORT || 8080, function () {
        console.log("Listening on %j", server.address());
    });
}