
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type': 'text/plain'});
    var message = 'Hello World...'
    res.end(message);

}).listen(1337,'127.0.0.1');

