const madge = require("madge");
const path = require("path");
const find = require("find");

const config = {
    includeNpm: true,
    webpackConfig: path.resolve("config/webpack.config.js")
}

const files = find.file(/\.[jt]sx?$/, path.resolve("src"), (files) => {
    madge(files, config)
    .then((res) => res.image(path.resolve("depGraph.png")))
    .then((writtenImagePath) => {
        console.log("Dependency Graph Written to:  " + writtenImagePath);
    });
});
