/*  document.body.classList.toggle("")
    
    document.getElementById("btnSortear").disabled = true;

    const elemento = document.querySelector('.meu-elemento');
    elemento.className += ' minha-classe';   
*/

// Parametros de verificação
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
    // Desabilita visualmente os button.
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
    const novoB = document.querySelector('.btBola');
    novoB.classList.add('desativado');

    const novoX = document.querySelector('.btXis');
    novoX.classList.add('desativado');

}

function verde() {
    let c1 = document.querySelectorAll('.box');

    c1.forEach(element => {
        element.classList.add('certo');
    }
    );
}

/* função que verifica os parametros. */
function bolaORxis(a) {
    if (testeB == 0 && testeX == 0) {
        sistema.innerHTML = "Selecione com qual você ira começa X ou BOLA!!"

    } else {

        //Pegando o ID da box e colocando em uma (var)
        const H = document.querySelector('#bOx' + a)
        const L = document.querySelector('#l' + a)
        let S = ''

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

// Tabuleiro virtual
let tabuleiroV = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Verificar ser alguem venceu.
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

//Passa os paramtros pro tabuleiro virtual e chama a função que verifica ser há vencedor.
function jogar(a) {
    let linha = Math.floor((a - 1) / 3);
    let coluna = (a - 1) % 3;
    tabuleiroV[linha][coluna] = testeB === 1 ? "X" : "O";

    // Verificar se há um vencedor após a jogada
    let vencedor = verificarVencedor();

    if (vencedor !== null) {

        sistema.innerHTML = "Parabens Jogador " + vencedor + " você venceu!";


        // Lógica para reiniciar o jogo.   
        setTimeout(function () {
            limp()
        }, 3000)

    }
}

// Ser ouver vencedor apos mostra quem foi, essa função reseta o jogo. (pronto para outra rodada?)
function limp() {

    // Limpa os <h3>
    for (let L = 1; L < 10; L++) {
        let Limpar = document.querySelector('#bOx' + L);

        Limpar.innerHTML = ""

    }
    // Limpa o tabuleiro virtual.
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            tabuleiroV[i][j] = '';
        }
    }

    // Devolve a função onclick das div.box.
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.onclick = () => bolaORxis(parseInt(box.id.substr(1)));
    });

    // Reseta os parametros de verifição.
    testeB = Number(0)
    testeX = Number(0)

    //Devolvendo as cores.
    const denovoX = document.querySelector('.btXis');
    denovoX.classList.remove('desativado');

    const denovoB = document.querySelector('.btBola');
    denovoB.classList.remove('desativado');

    let c2 = document.querySelectorAll('.box');

    c2.forEach(element => {
        element.classList.remove('certo');
    }
    );

    sistema.innerHTML = ''

    // Libera os botoês para joga denovo.
    document.querySelector('.btXis').disabled = false
    document.getElementById("bola").disabled = false
}

// Colocar os nomes dos jogadores na tabela.
function nome(j) {
    let nick_j = document.querySelector('#jogador')
    let nick = nick_j.value.toUpperCase()

    if (nick == '') {

    } else if (j === 1 ) {
        let jogador_1 = document.querySelector('#j1')

        jogador_1.innerHTML = nick

    } else {
        let jogador_2 = document.querySelector('#j2')

        jogador_2.innerHTML = nick

    }
}

// Um evendo que observa qual tecla foi apertada IF (ENTER) ele não deixa. {isso quebra o input}
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();

       /* let primeiro_j = document.querySelector('#j1')

        if (primeiro_j.value === 'Jogador 1'){
            nome(1)
        } else {
            nome(2)
        } 
        */
    }
});