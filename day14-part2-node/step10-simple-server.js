const http = require("http");
const fs = require("fs");

let server = http.createServer(function(request, response){
    fs.readFile("./"+request.url, function(error, data){
        response.writeHead(200, { "Content-Type" : "text/html" })
        if(error){
            console.log("Error : ", error);
            response.writeHead(404, { "Content-Type" : "text/plain" })
            response.write("404 : Requested page not found");
        }else{
            let modifiedtext = data.toString();
                modifiedtext = modifiedtext.replace("IBM", "Vijay")
                .replace("IBM", "Vijay");
            response.write(modifiedtext)
        }
        response.end();
    })    
});

server.listen(3000,"localhost", function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log(" Server is now live on localhost:3000");
    }
})
