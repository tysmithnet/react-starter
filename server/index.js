const colors = require("colors");
const express = require("express");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const mysql = require("mysql");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

// database
var connection = mysql.createConnection({
    //host: "127.0.0.1",
    localAddress: "127.0.0.1",
    user: "root",
    password: "root",
    database: "app"
});
connection.connect((err) => {
    if (err) {
        console.log(`Error connecting to database: ${err}`.bold.red);
        console.log("Are you sure the mysql container is running?".bold.yellow)
        process.exit(-1);
    }
    console.log("Database connection established".bold.green);
})
// express app
const app = express();
const config = require("../webpack.config");
const compiler = webpack(config);

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
    let permissions = [];
    
    connection.query(sql, (err, vals, fields) => {
        if (err || vals.length == 0) {
            res.sendStatus(401);
            return;
        }
        user.fname = vals[0].fname;
        user.lname = vals[0].lname;
        user.username = vals[0].uname;
        user.image = vals[0].image_url;
        permissions = vals.map(x => x.name);
        res.json({
            user,
            jwt,
            permissions
        });
    })
});

app.get("/api/projects", async (req, res) => {
    let pageNum = parseInt(req.query.pageNum);
    let pageSize = parseInt(req.query.pageSize);

    if(!pageNum)
        pageNum = 0;
    if(!pageSize)
        pageSize = 10;

    const sql = `SELECT p.id, p.name, p.description, p.created_utc, u.fname, u.lname, u.uname FROM project p JOIN user u on p.creator_id = u.id LIMIT ?, ?`;
    connection.query(sql, [pageNum, pageSize], (err, rows, fields) => {
        if (err) {
            res.sendStatus(500);
            return;
        }
        res.json(rows);
        return;
    })
});

app.use(history());
app.use(webpackDevMiddleware(compiler, { 
    publicPath: config.output.publicPath,
}));
app.use(express.json())

app.listen(3000, () => {
    console.log("Listing on :3000".bold.green);
});