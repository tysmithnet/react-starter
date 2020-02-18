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
app.use(express.json())

app.post("/api/auth", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `select u.fname, u.lname, u.uname, u.image_url, p.name from user u join user_permission up on u.id = up.user_id join permission p on up.permission_id = p.id where u.uname = '${username}' and u.pass = '${password}';`;
    const user = {
        fname: null,
        lname: null,
        username: null,
        image: null,
    };
    const jwt = "todo";
    let permission = [];
    db.all(sql, (err, rows) => {
        if (err) {
            console.log(`Error validating auth: ${err}`.bold.red);
            res.sendStatus(401);
            return;
        }
        user.fname = row[0].fname;
        user.lname = row[0].lname;
        user.username = row[0].uname;
        user.image = row[0].image_url;
        permissions = rows.map(r => r.name);
        res.send({
            user,
            jwt,
            permissions
        });
    });
});

app.listen(3000, () => {
    console.log("Listing on :3000".bold.green);
});