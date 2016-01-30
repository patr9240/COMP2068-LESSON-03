/// <reference path="_reference.ts" />
//creating express app
import express = require('express');
var app:express.Express = express();
var port:number = process.env.port || 3000;
//main route
app.get('/', function (req:express.Request, res:express.Response, next:any){
    res.send('Hello Express!');
});

//Route for info page
app.get('/info', function(req:express.Request, res:express.Response){
    res.send('Your custom info page goes here');
});

app.listen(port, function(){
    console.log("app Server Started... on port: " + port);
});









/*
//creating node app
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
*/
