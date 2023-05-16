// Asynchoronous or non-blocking 
// Line by Line execution not guaranteed
// Callbacks will fire 
const fs = require("fs");
fs.readFile("dom56.html", "utf-8",(error, data)=>{
    console.log(error, data);
});
console.log("This is a message");