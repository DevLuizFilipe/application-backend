const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

app.get('/', (req, res) => {
  res.send('O backend está funcionando');
});

// Manipula a conexão do socket
io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Manipula o evento para enviar a mensagem ao frontend
  socket.on('sendMessage', (data) => {
    io.emit('message', data); // Envia a mensagem para todos os clientes conectados
  });

  // Manipula o evento de desconexão
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

http.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
