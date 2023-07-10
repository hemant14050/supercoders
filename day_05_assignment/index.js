/**
 * Subjective
 * Nodejs Assignment - 4
 * 
 * Build a program that retrieves data from an external API using the 'https' module, 
 * processes the response using streams, and saves it to a file.
 */

const http = require('http');
const https = require('https');
const fs = require('fs');

const URL = 'https://jsonplaceholder.typicode.com/posts';
const writableStream = fs.createWriteStream('./data/posts.txt', {flags: 'a'});

const receptor = (req, res) => {
    const {url, method} = req;

    if(method === 'GET') {
        if(url === '/') {
            res.end("<h1>This Server to fetch data from API</h1>");
        } else if(url === '/fetchData') {
            https.get(URL, (res)=> {
                // console.log("Filling..........");

                res.on('data', (data)=> {
                    writableStream.write(data);
                    // console.log("Data is writting...");
                });

                res.on('end', ()=> {
                    writableStream.end();
                    console.log("Data is written successfully");
                });
            })
            .on('error', (err)=> {
                console.log("Error: ", err.message);
            });

            res.end("<h1>This fetched data</h1");
        }
    }
}

const server = http.createServer(receptor);
server.listen(3030, ()=> {
    console.log("Server is started at port 3030");
});