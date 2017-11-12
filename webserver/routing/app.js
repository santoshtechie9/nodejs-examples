
var http = require('http');

http.createServer(function(req,res){

    if (req.url == '/') {

        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello World!!!');

    }else if (req.url =='/api'){

        var obj = {
            firstName:'John',
            LastName:'Doe'
        }

        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(obj));

    }else{
        res.writeHead(404);
        res.end();
    }

}).listen(1337,'127.0.0.1');
