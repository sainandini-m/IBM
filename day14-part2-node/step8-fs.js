const fs = require("fs");
// fs.writeFileSync("temp.txt", "Welcome to your life");
// let data = fs.readFileSync("temp.txt","utf-8");
// let data = fs.readFileSync("temp.txt");
// console.log(data.toString());
// console.log(data+"");
// fs.appendFileSync("temp.txt", " There is no turning back");
let existingText = fs.readFileSync("temp.txt","utf-8");
fs.writeFileSync("temp.txt",existingText+" even while you sleep we will find you acting on your best behaviour ");
console.log(fs.readFileSync("temp.txt").toString());

