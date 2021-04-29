var express = require("express");
var app = express();
app.get("/", function(req, res){
    res.sendFile(__dirname+"/step16-storage-session.html");
});
app.listen(4040);
console.log("web server is now live on localhost:4040");