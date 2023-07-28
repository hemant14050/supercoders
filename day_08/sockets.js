// express solves routing and middlewares
const express = require('express');
const fs = require('fs');
const app = express();
const {Server} = require('socket.io');
const http = require('http');


const server = http.createServer(app);
const socketServer = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
});

socketServer.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        socketServer.emit('chat message', msg);
    });
});