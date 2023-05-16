const fs = require("fs");
const html = fs.readFileSync("js_52.html", "utf-8");
html = html.replace("content", "Suraj");

console.log("The content of the file is");
console.loglog(html);

console.log("Creating a new file...");
fs.writeFileSync("suraj.html",html);

