var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.get("/",function(req, res){
    res.sendFile(__dirname+"/step14-localstorage-01.html");
});
app.listen(2525);
console.log("Web server is now live on localhost:2525");