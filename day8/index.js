const express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get("/", function( req, res ){
    res.sendFile(__dirname+"/step63-modules.html");
})
app.listen(3030);
console.log("server is now live on localhost:3030");