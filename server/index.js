const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: '*'}}), allClients = [];

const PORT = 3001;

io.on('connection', socket => {
  if (allClients.findIndex(user => user.id === socket.id) == -1) allClients.push({id: socket.id});
  console.log('Usuário conectado!', socket.id);

  socket.on('disconnect', reason => {
    const userIndex = allClients.findIndex(user => user.id === socket.id);
    allClients.splice(userIndex, 1);
    console.log('Usuário desconectado!', socket.id);
    io.emit('total-users', allClients);
  });

  socket.on('user-data', data => {
    const userIndex = allClients.findIndex(user => user.id === socket.id);
    allClients[userIndex].userData = data;

    io.emit('total-users', allClients);
  });
})
;
server.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}`);
});