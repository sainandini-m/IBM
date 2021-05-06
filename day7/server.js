let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/step56-ajax-json.html");
})

app.listen(2525);
console.log("server is now live on localhost:2525")
