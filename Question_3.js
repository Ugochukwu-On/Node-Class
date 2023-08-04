// 1. Create HTTP server with Server module

const http = require('http');

const localServer = http.createServer();

const port = 3000;

localServer.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);
});



//2. Return hello world

const http = require('http');

const localServer = http.createServer((req, res)=>{
    res.writeHead(200, {'Conetnt-Type' : ' text/html'});
    
    res.end('<h1>Hello World!</h1>')
});

const port = 3000;

localServer.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`);
});

