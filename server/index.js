const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}});

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

io.on('connection', socket => {
    const {id} = socket;
    console.log('Usuário conectado!', id);

    socket.on('disconnect', reason => {
      console.log('Usuário desconectado!', id);
    });
});