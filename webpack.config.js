const path = require("path");
const fs = require("fs");
const rimraf = require('rimraf');
const configs = [];
const features = fs.readdirSync("./features");
let ENV = "dev";

rimraf(`./prod/features/`,function(){});

process.argv.map((arg) => {
    arg.indexOf("--env")>=0 ? ENV = arg.split("--env=")[1] : ENV;
});

features.map((feature) => {
    configs.push({
        entry: `./features/${feature}/content.js`,
        output: {
            filename: `./features/${feature}/content.js`,
            path: path.resolve(__dirname, 'prod')
        },
        optimization: {
            minimize: ENV === "prod"
        },
        watch: ENV !== "prod"
    });
});

module.exports = configs;