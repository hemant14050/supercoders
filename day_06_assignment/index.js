const http = require('http');
const fs = require('fs');

function makegetRequest(url, file) {
    const fileWriteStream = fs.createWriteStream(file);
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.on('data', (chunk) => {
                fileWriteStream.write(chunk);
            })
            res.on('end', ()=> {
                fileWriteStream.end();
                resolve();
            })
        }).on('error', (err) => {
            reject(err);
        })
    });
}

async function apiCall(url, file) {
    await makegetRequest(url, file);
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
            apiCall(url, file);
        });
    }
});