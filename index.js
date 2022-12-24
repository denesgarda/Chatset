const variables = require("./var");
const jSQL = require("jsql");
const path = require("path");

console.log("CHATSET v" + variables.version + "\nBy Denes Garda\n");
console.log("   ________          __            __ \n  / ____/ /_  ____ _/ /_________  / /_\n / /   / __ \\/ __ `/ __/ ___/ _ \\/ __/\n/ /___/ / / / /_/ / /_(__  )  __/ /_  \n\\____/_/ /_/\\__,_/\\__/____/\\___/\\__/  \n");

console.log("Loading data...");
const database = new jSQL.Database(path.join(__dirname, "data"));

