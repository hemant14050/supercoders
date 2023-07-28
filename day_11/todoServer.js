const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/todoViews/index.html');
});

app.post('/todoData', (req, res) => {
    // get data from request
    // save data in file
    // send response

    fs.readFile("./data/treasure.mp4", "utf-8", (err, data) => {
        if(err) {
            res.status(500).send({
                message: 'Internal Server Error',
            });
            return;
        }
        if(data.length == 0) {
            data = "[]";
        }

        try {
            data = JSON.parse(data);
            data.push(req.body);

            fs.writeFile("./data/treasure.mp4", JSON.stringify(data), (err) => {
                if(err) {
                    res.status(500).send({
                        message: 'Internal Server Error',
                    });
                    return;
                }
                res.status(200).send({
                    message: 'Todo added successfully',
                });
            });
        } catch(e) {
            res.status(500).send({
                message: 'Internal Server Error',
            });
            return;
        }

    })
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/todoViews/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/todoViews/contact.html');
});

app.get('/todo', (req, res) => {
    res.sendFile(__dirname + '/todoViews/todo.html');
});

app.get('/todoScript.js', (req, res) => {
    res.sendFile(__dirname + '/todoViews/todoScript.js');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});