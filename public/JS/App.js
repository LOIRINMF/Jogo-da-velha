const ws = new WebSocket('ws://localhost:3000');

let currentPlayer;

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.type === 'init') {
    currentPlayer = data.playerNumber;
    console.log(`You are player ${currentPlayer}`);
  } else if (data.type === 'move') {
    // Atualize o tabuleiro com a jogada recebida
    console.log(`Player ${data.playerNumber} made a move: ${data.move}`);
  }
};

// Função para enviar uma jogada para o servidor
// Porvavelmente a função mais inportante!!
function makeMove(move) {
  const message = JSON.stringify({ type: 'move', playerNumber: currentPlayer, move });
  ws.send(message);
}


// Exemplo de uso
makeMove(4); // O jogador faz uma jogada na posição 4 do tabuleiro
