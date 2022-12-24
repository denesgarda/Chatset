const fs = require("fs");
const path = require("path");

const version = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json"), "utf8")).version;

module.exports = { version };
