const colors = require("colors");
const sqlite = require("sqlite3").verbose();
const express = require("express");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

// database
const db = new sqlite.Database(":memory:");
const sql = fs.readFileSync(path.resolve(__dirname, "db.sql"), "utf-8");
db.run(sql, (err) => {
    if (err) {
        console.log("Failed creating in memory database".bold.red);
        return;
    }
    console.log("Created in memory database".bold.green);
});

// express app
const app = express();
const config = require("../webpack.config");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));

app.post("/api/auth", (req, res) => {

});

app.listen(3000, () => {
    console.log("Listing on :3000".bold.green);
});