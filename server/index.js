const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: '*'}});

const PORT = 3001;

io.on('connection', socket => {
  console.log('Usuário conectado!', socket.id);

  socket.on('disconnect', reason => {
    console.log('Usuário desconectado!', socket.id);
  });
})
;
server.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}`);
});