const http = require('http');
const path = require('path');
const fs = require('fs');
const server= http.createServer((req,res ) => {
    if (req.url === '/index.html'){
        const filePath = path.join(__dirname, '/index.html');
        fs.readFile(filePath, 'utf8', (err,data)=>{
            if (err){
                //handle error
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error Handling HTML file');
            } else{
                res.writeHead(200, {'Content-Type': 'text/html;'});
                res.end(data);
                
            }
        });
    } else{
        // 404 page
        const filePath = path.join(__dirname, '/404.html');
        fs.readFile( filePath, 'utf8', (err, data)=>{
            if (err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error reading 404 page');
            }else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    }
});

const port= 2000;

server.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});

