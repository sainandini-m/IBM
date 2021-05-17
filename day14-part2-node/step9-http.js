const http = require("http");
let server = http.createServer(function(request, response){
    // console.log(request.url);
    response.writeHead(200, { "Content-Type" : "text/html" })
    if(request.url == "/"){
        response.write("<h1> Welcome to home page </h1>");
    }else if(request.url == "/about.html"){
        response.write("<h1> Welcome to about page </h1>");
    }else if(request.url == "/contact.html"){
        response.write("<h1> Welcome to contact page </h1>");
    }else{
        response.writeHead(404, { "Content-Type" : "text/plain" })
        response.write("404 : Requested page not found");
    }
    response.end();
});

server.listen(3000,"localhost", function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log(" Server is now live on localhost:3000");
    }
})
