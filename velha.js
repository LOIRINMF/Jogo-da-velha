/*  document.body.classList.toggle("")
    
    document.getElementById("btnSortear").disabled = true;

    const elemento = document.querySelector('.meu-elemento');
    elemento.className += ' minha-classe';   


*/

// parametros de verificação
let testeB = Number(0)
let testeX = Number(0)

// let opa = document.getElementById("")


// funçoes que qando chamadas liberam um parametro(1) de aprovação.

// PENSEI EM UMA FORMA DE RESUMIR A LILHA 19 A 40 PASANDO UM PARAMETRO PRA FUNCION
function bola() {
    document.querySelector('.btXis').disabled = true
    document.getElementById("bola").disabled = true
    testeB = 1


    // Deixar as div box verde.
    verde()
    // Desabilita os button.
    nbutton()
}

function xis() {
    document.getElementById("bola").disabled = true
    document.querySelector('.btXis').disabled = true
    testeX = 1

    verde()
    nbutton()
}
// ATE AQUI
function nbutton() {
    const novoX = document.querySelector('.btXis');
    novoX.classList.toggle('outraX');

    const novoB = document.querySelector('.btBola');
    novoB.classList.add('outraB');
}

function verde() {
    let c1 = document.querySelectorAll('.box');

    c1.forEach(element => {
        element.classList.add('certo');
    }
    );
}

/* função que verifica os parametros. 
 (agora e fazer ela chama outra função para continuar o jogo) */

function bolaORxis(a) {
    if (testeB == 0 && testeX == 0) {

        let erro = document.getElementById("opa")

        erro.innerHTML = "Selecione com qual letra você ira começa primeiro!!"
    } else {
        // Se tive algo escrito aqui ele apaga.
        let erro = document.getElementById("opa")
        erro.innerHTML = ""

        //Pegando o ID da box e colocando em uma (var)
        const H = document.querySelector('#bOx' + a)
        const L = document.querySelector('#l' + a)

        // fazer a separaçao de bola ou xis ||CERTO||
        if (testeB == 1) {
            H.innerHTML = "O"

            testeB = 0
            testeX = 1
        } else {
            H.innerHTML = "X"
            testeX = 0
            testeB = 1
        }

        L.onclick = null;
    }
}

// funcion do chatGPT (O cara e bom!!) 
let jogadorAtual = 'X';

function jogar(element) {
    if (element.innerHTML === '') {
        element.innerHTML = jogadorAtual;
        jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    }
}

//Animação
// Simulando o restante do código sendo exibido após 7 segundos
setTimeout(function () {
    let loadingContainer = document.querySelector('.loading-container');
    let GPT = document.querySelector('.GPT');

    // Remove a animação
    loadingContainer.style.animation = 'none';

    // Substitui o conteúdo HTML
    GPT.innerHTML = '<div class="jogo-do-GPT">' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '<div class="caixas" onclick="jogar(this)"></div>' +
        '</div>';
}, 3000);

// codigo de ferificaçao do GPT
/*
let tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function verificarVencedor() {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== "" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
            return tabuleiro[i][0];
        }
    }

    // Verificar colunas
    for (let j = 0; j < 3; j++) {
        if (tabuleiro[0][j] !== "" && tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j]) {
            return tabuleiro[0][j];
        }
    }

    // Verificar diagonais
    if (tabuleiro[0][0] !== "" && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
        return tabuleiro[0][0];
    }

    if (tabuleiro[0][2] !== "" && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
        return tabuleiro[0][2];
    }

    return null;  // Nenhum vencedor
}

// Exemplo de uso após cada jogada
function jogar(a) {
    // ... (seu código existente para jogar)

    // Atualizar a matriz do tabuleiro com a jogada
    // Supondo que "a" seja um índice válido entre 1 e 9
    let linha = Math.floor((a - 1) / 3);
    let coluna = (a - 1) % 3;
    tabuleiro[linha][coluna] = testeB === 1 ? "O" : "X";

    // Verificar se há um vencedor após a jogada
    let vencedor = verificarVencedor();
    if (vencedor !== null) {
        alert("Jogador " + vencedor + " venceu!");
        // Lógica para reiniciar o jogo ou qualquer outra ação desejada
    }
}
*/