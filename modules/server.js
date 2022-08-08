const http = require ('http');
const file = require('fs');
const path = require('path');
const MIME = require('mime-types');

const startServer = (staticPath) => {
    const server = http.createServer((req, res) => {
        if(req.method === 'GET'){
            if(req.url === '/'){
                file.readFile(`./${staticPath}/index.html`, 'utf8', (err, data) => {
                    if(err){
                        console.log(err);
                    }
                    res.end(data);
                })
            }
            else{
                const reqPath = path.join(staticPath, req.url);
                const mimeType = MIME.lookup(path.extname(req.url))
                res.writeHead(200, {'Content-Type': mimeType});
                file.readFile(reqPath, (err, data) => {
                    if(err){
                        console.log(err);
                    }
                    res.end(data);
                })
            }
        }
        if(req.method === 'POST'){
            
        }
    })
    return server;
}


module.exports = startServer;