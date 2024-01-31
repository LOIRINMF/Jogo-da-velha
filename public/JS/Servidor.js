// server.js
const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Servir o conteúdo estático (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

let players = [];

wss.on('connection', (ws) => {
  // Adiciona o novo jogador à lista
  players.push(ws);

  // Envia uma mensagem de inicialização ao novo jogador
  ws.send(JSON.stringify({ type: 'init', playerNumber: players.length }));

  // Quando uma mensagem é recebida de um jogador
  ws.on('message', (message) => {
    // Envie a mensagem para o outro jogador
    players.filter(player => player !== ws).forEach(player => player.send(message));
  });

  // Quando a conexão é fechada
  ws.on('close', () => {
    // Remove o jogador desconectado da lista
    players = players.filter(player => player !== ws);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
