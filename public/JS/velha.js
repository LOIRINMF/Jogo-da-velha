/*  document.body.classList.toggle("")
    
    document.getElementById("btnSortear").disabled = true;

    const elemento = document.querySelector('.meu-elemento');
    elemento.className += ' minha-classe';   
*/

// parametros de verificação
let testeB = Number(0)
let testeX = Number(0)

let sistema = document.getElementById("sistem")

// funçoes que quando chamadas liberam um parametro(1) de aprovação.
// PENSEI EM UMA FORMA DE RESUMIR A LILHA 15 A 35 PASANDO UM PARAMETRO PRA FUNCION
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
        sistema.innerHTML = "Selecione com qual letra você ira começa X ou BOLA!!"
console.log('if')
    } else {

        //Pegando o ID da box e colocando em uma (var)
        const H = document.querySelector('#bOx' + a)
        const L = document.querySelector('#l' + a)
        let S = ''
console.log('else')
        // fazer a separaçao de bola ou xis ||CERTO||
        if (testeB == 1) {
            H.innerHTML = "O"
            S = 'X'

            testeB = 0
            testeX = 1
        } else {
            H.innerHTML = "X"
            S = 'O'

            testeX = 0
            testeB = 1
        }
        sistema.innerHTML = 'Vez do jogador de ' + S

        L.onclick = null;
        jogar(a)
    }
}

// codigo de ferificaçao do GPT
let tabuleiroV = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function verificarVencedor() {
    // Verificar L
    for (let i = 0; i < 3; i++) {
        if (tabuleiroV[i][0] !== "" && tabuleiroV[i][0] === tabuleiroV[i][1] && tabuleiroV[i][1] === tabuleiroV[i][2]) {
            return tabuleiroV[i][0];
        }
    }

    // Verificar C
    for (let j = 0; j < 3; j++) {
        if (tabuleiroV[0][j] !== "" && tabuleiroV[0][j] === tabuleiroV[1][j] && tabuleiroV[1][j] === tabuleiroV[2][j]) {
            return tabuleiroV[0][j];
        }
    }

    // Verificar D
    if (tabuleiroV[0][0] !== "" && tabuleiroV[0][0] === tabuleiroV[1][1] && tabuleiroV[1][1] === tabuleiroV[2][2]) {
        return tabuleiroV[0][0];
    }

    if (tabuleiroV[0][2] !== "" && tabuleiroV[0][2] === tabuleiroV[1][1] && tabuleiroV[1][1] === tabuleiroV[2][0]) {
        return tabuleiroV[0][2];
    }

    return null;
}

function jogar(a) {
    let linha = Math.floor((a - 1) / 3);
    let coluna = (a - 1) % 3;
    tabuleiroV[linha][coluna] = testeB === 1 ? "X" : "O";
    
    // Verificar se há um vencedor após a jogada
    let vencedor = verificarVencedor();
    console.log('teste1000')
    if (vencedor !== null) {
        
        sistema.innerHTML = ("Parabens Jogador " + vencedor + " você venceu!");
        
        // Lógica para reiniciar o jogo.   
        limp()
    }
}
function limp() {

    for (let L = 1; L < 10; L++) {

        let Limpar = document.querySelector('#bOx' + L);

        Limpar.innerHTML = ""

    }
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiroV[i][j] = '';
        }
    }

    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.onclick = () => bolaORxis(parseInt(box.id.substr(1)));
    });

    testeB = Number(0)
    testeX = Number(0)

    document.querySelector('.btXis').disabled = false
    document.getElementById("bola").disabled = false
}

// Simulando o restante do código sendo exibido após 7 segundos
/*
setTimeout(function () {
    // Remove a animação
    document.querySelector('.loading-container').style.display = 'none';
    
    let GPT = document.querySelector('.GPT');
    
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
 */