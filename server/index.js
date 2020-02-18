const colors = require("colors");
const Database = require("better-sqlite3");
const express = require("express");
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

// database
const db = new Database("react-starter.db", {
    memory: true
});
const dbSetupScript = fs.readFileSync(path.resolve(__dirname, "db.sql"), "utf-8");
db.exec(dbSetupScript);
const row = db.prepare("SELECT * FROM user WHERE id=1");
console.assert(row.id == 1);
console.log("Database setup in memory".bold.green);

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