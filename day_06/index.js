const http = require('http');
const fs = require('fs');

// use of promise

const server = http.createServer((req, res) => {
    const { url, method } = req;
    if(method == 'GET') {
        if(url == '/') {
            fs.readFile('index.html', (err, data) => {
                if(err) {
                    res.writeHead(500, {'Content-Type': 'text/html'});
                    res.end('<h1>Internal Server Error</h1>');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
        }
    }
}); 

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});