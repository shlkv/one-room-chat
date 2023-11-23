const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const path = require('path');

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '../client/index.html');
  res.sendFile(filePath);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});