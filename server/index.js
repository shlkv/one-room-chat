const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server)

const path = require('path');

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '../client/index.html');
  res.sendFile(filePath);
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});