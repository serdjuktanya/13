// let a = "hello World"
// console.log(a);
const fs = require("fs");
// console.log(fs);
let data = fs.readFileSync("data.txt","utf-8");

fs.appendFileSync("data.txt","\nHello World");

