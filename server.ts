/// <reference path="_reference.ts" />
import http = require('http');

var port:number = process.env.port || 3000

var server:http.Server = http.createServer(
    function(req:http.ServerRequest, res:http.ServerResponse){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello Node!");
});
server.listen(port, function(){
   console.log("Server Started... Listening on port: " + port); 
});