var http = require('http');
var process = require('process')
http.createServer(function (req, res) {
    //var waitTill = new Date(new Date().getTime() + 10 * 1000);
    //while(waitTill > new Date()){}
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    console.log(`${Math.random()} This process is your pid ${process.pid}`);
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

