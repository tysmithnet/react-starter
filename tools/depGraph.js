const madge = require("madge");
const path = require("path");
const find = require("find");
const colony = require("colony");

find.file(/\.[jt]sx?$/, path.resolve("src"), (files) => {
    colony.build(files, {}, () => {
        console.log("Complete");
    });
});
