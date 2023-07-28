const http = require('http');
const fs = require('fs');

function makegetRequest(url, file) {
    return new Promise((resolve, reject) => {
        const fileWriteStream = fs.createWriteStream(file);
        http.get(url, (res) => {
            res.on('data', (chunk) => {
                fileWriteStream.write(chunk);
            })
            res.on('end', ()=> {
                fileWriteStream.end();
                resolve();
            })
            // OR
            // res.pipe(fileWriteStream);
            // resolve();
        }).on('error', (err)=> {
            reject(err);
        });
    });
}

fs.readFile('./urls.txt', 'utf8', (err, data)=> {
    if(err) {
        console.log("An error occured while reading the urls file")
    } else {
        const urls = data.split('\n');
        // console.log(urls);   
        const urlsWithFilesName = urls.map(url => {
            const ur = url.split('/');
            // console.log(ur[ur.length-1]);
            return {
                url: url,
                file: `response_${ur[ur.length-1]}.txt`.replace("\r", "")
            }
        }); 
        // console.log(urlsWithFilesName);

        urlsWithFilesName.forEach(({url, file}) => {
            makegetRequest(url, file).catch((err) => {
                console.log("An error occured!");
                console.log(err);
            })
        });
    }
});