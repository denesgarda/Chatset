const variables = require("./var");
const jSQL = require("jsql");
const path = require("path");
const fs = require("fs");

console.log("CHATSET v" + variables.version + "\nBy Denes Garda\n");
console.log("   ________          __            __ \n  / ____/ /_  ____ _/ /_________  / /_\n / /   / __ \\/ __ `/ __/ ___/ _ \\/ __/\n/ /___/ / / / /_/ / /_(__  )  __/ /_  \n\\____/_/ /_/\\__,_/\\__/____/\\___/\\__/  \n");

function sleep(milliseconds) {
    var waitTill = new Date(new Date().getTime() + milliseconds);
    while(waitTill > new Date()){}
}

sleep(200);
process.stdout.write(". ");
sleep(200);
process.stdout.write(". ");
sleep(200);
process.stdout.write(". ");
sleep(200);
process.stdout.write(". ");
sleep(200);
process.stdout.write(". ");
sleep(200);
process.stdout.write("\n");

console.log("Loading data...");

console.log("Reading database...");
var dir = './data';
if (!fs.existsSync(dir)){
    console.log("Database not found. Creating new one...");
    fs.mkdirSync(dir);
    console.log("Created new database. Rereading...");
}
console.log("Database read.");
const database = new jSQL.Database(path.join(__dirname, "data"));

function executeNoErr(string) {
    try {
    database.execute(string);
    } catch (ignored) {}
}

console.log("Registering config schema...");
executeNoErr("+|schema|'config'");
console.log("Registered config schema.");
console.log("Registering info schema...");
executeNoErr("+|schema|'info'");
console.log("Registered info schema.");
console.log("Registering conversations schema...");
executeNoErr("+|schema|'conversations'");
console.log("Registered conversations schema.");
console.log("Registering config table...");
executeNoErr("+|table|'config'|'config'");
console.log("Registered config table.");
console.log("Registering accounts table...");
executeNoErr("+|table|'info'|'accounts'");
console.log("Registered accounts table.");
console.log("Registering conversations table...");
executeNoErr("+|table|'info'|'conversations'");
console.log("Registered conversations table.");

console.log("All data loaded successfully.");
console.log("TO CONFIGURE SETTINGS, EDIT THE ENTRIES IN ./data/config.json.");

console.log("Starting server...");

let config = database.execute(".|'config'|'config'");
if (!config[0]) {
    database.execute("+|'config'|'config'|{}");
}
config = database.execute(".|'config'|'config'");
if (!config[0].port) {
    database.execute("^|'config'|'config'|{ 'port': 80 }");
}
const port = database.execute(".|'config'|'config'")[0].port;

const express = require("express");

const app = express();

app.listen(port);

console.log("Server started on port " + port + ".");

