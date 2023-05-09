const express = require('express')
const webApp = express()
const webServer = require('http').createServer(webApp)
const io = require('socket.io')(webServer)

webApp.get('/', (req, res) => {
    res.sendFile(__dirname + '/');
});

io.on('connection', socket => {
    const {id} = socket;
    console.log(`Socket ID started: ${id}`);
});

webServer.listen(3001, () => {
    console.log('> Server listening on port:', 3001);
  });