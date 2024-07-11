/*  document.body.classList.toggle("")
    
    document.getElementById("btnSortear").disabled = true;

    const elemento = document.querySelector('.meu-elemento');
    elemento.className += ' minha-classe';   
*/

// Parametros de verificação
var testeB = Number(0)
var testeX = Number(0)

var primeiro_j = ''

var pontosJ1 = document.querySelector("#p_j1")
var pontosJ2 = document.querySelector("#p_j2")

var sistema = document.getElementById("sistem")

// funçoes que quando chamadas liberam um parametro(1) de aprovação.
// PENSEI EM UMA FORMA DE RESUMIR A LILHA 15 A 35 PASANDO UM PARAMETRO PRA FUNCION
function bola() {
    document.querySelector('.btXis').disabled = true
    document.getElementById("bola").disabled = true
    testeB = 1
    // Definindo qual a esolha do Jogador 1
    primeiro_j = 'O'

    sistema.innerHTML = 'Bolinha começa o game'
    // Deixar as div box verde.
    verde()
    // Desabilita visualmente os button.
    nbutton()
}

function xis() {
    document.getElementById("bola").disabled = true
    document.querySelector('.btXis').disabled = true
    testeX = 1
    primeiro_j = "X"

    sistema.innerHTML = 'XIS começa o game'
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
    });
}

/* função que verifica os parametros. */
function bolaORxis(a) {
    if (testeB == 0 && testeX == 0) {
        sistema.innerHTML = "Selecione com qual você ira começa X ou BOLA!!"

    } else {

        //Pegando o ID da box e colocando em uma (var)
        const H = document.querySelector('#bOx' + a)
        const L = document.querySelector('#l' + a)
        let xORb = ''

        // fazer a separaçao de bola ou xis ||CERTO||
        if (testeB == 1) {
            H.innerHTML = "O"
            xORb = 'X'

            testeB = 0
            testeX = 1
        } else {
            H.innerHTML = "X"
            xORb = 'O'

            testeX = 0
            testeB = 1
        }
        sistema.innerHTML = 'Vez do jogador com ' + xORb

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
    // Verificar Linhas (L)
    for (let i = 0; i < 3; i++) {
        if (tabuleiroV[i][0] !== "" && tabuleiroV[i][0] === tabuleiroV[i][1] && tabuleiroV[i][1] === tabuleiroV[i][2]) {
            return { simbolo: tabuleiroV[i][0], linha: i };
        }
    }

    // Verificar Colunas (C)
    for (let j = 0; j < 3; j++) {
        if (tabuleiroV[0][j] !== "" && tabuleiroV[0][j] === tabuleiroV[1][j] && tabuleiroV[1][j] === tabuleiroV[2][j]) {
            return { simbolo: tabuleiroV[0][j], coluna: j };
        }
    }

    // Verificar Diagonais (D)
    if (tabuleiroV[0][0] !== "" && tabuleiroV[0][0] === tabuleiroV[1][1] && tabuleiroV[1][1] === tabuleiroV[2][2]) {
        return { simbolo: tabuleiroV[0][0], diagonal: "principal" };
    }

    if (tabuleiroV[0][2] !== "" && tabuleiroV[0][2] === tabuleiroV[1][1] && tabuleiroV[1][1] === tabuleiroV[2][0]) {
        return { simbolo: tabuleiroV[0][2], diagonal: "secundaria" };
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
        // Reseta os parametros de verifição.
        testeB = 0
        testeX = 0

        let c4 = document.querySelectorAll('.box');

        c4.forEach(element => {
            element.classList.remove('certo');
        });

        sistema.innerHTML = `Parabens Jogador <${vencedor.simbolo}> você venceu!`;

        
        // (ANIMAÇÃO DE VENCER) {animacao_v(vencedor)}
        // Lógica para reiniciar o jogo.   
        setTimeout(function () {

            limp()
            addPonto(vencedor.simbolo)

        }, 2800)

    }
}

// Função que vai fazer as animações. ( depois vou ver sobre isso.)
/*function animacao_v(vencedor) {

    if (vencedor !== null) {
        console.log(`O vencedor é ${vencedor.simbolo}`);
    
        if (vencedor.linha !== undefined) {
            console.log(`A vitória ocorreu na linha ${vencedor.linha + 1}`);
        } else if (vencedor.coluna !== undefined) {
            console.log(`A vitória ocorreu na coluna ${vencedor.coluna + 1}`);
        } else if (vencedor.diagonal !== undefined) {
            console.log(`A vitória ocorreu na diagonal ${vencedor.diagonal}`);
        }
    } else {
        console.log("Não há vencedor");
    }
}*/

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

    //Devolvendo as cores.
    const denovoX = document.querySelector('.btXis');
    denovoX.classList.remove('desativado');

    const denovoB = document.querySelector('.btBola');
    denovoB.classList.remove('desativado');

    sistema.innerHTML = 'Escolhar X ou B'

    // Libera os botoês para joga denovo.
    document.querySelector('.btXis').disabled = false
    document.getElementById("bola").disabled = false
}

// Colocar os nomes dos jogadores na tabela.
function nome(j) {
    let nick_j = document.querySelector('#jogador')
    let nick = nick_j.value.toUpperCase()

        if (nick !== '') {
        const jogador = document.querySelector(`#j${j}`);
        jogador.innerHTML = nick;
        jogador.abbr = 'Outro';
    }
}

// Função para adicionar pontos na tabela.
function addPonto(V) {
    let j_vencedor = (V == primeiro_j) ? true : false;
    
        j_vencedor ? pontosJ1.innerHTML = parseInt(pontosJ1.innerHTML) + 1 : pontosJ2.innerHTML = parseInt(pontosJ2.innerHTML) + 1;

}

// Um evendo que observa qual tecla foi apertada IF (ENTER) ele não deixa. {isso quebra o input}
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();

        let nome_primeiro_j = document.getElementById("j1")

        if (nome_primeiro_j.abbr == "Jo_1") {
            nome(1)
        } else {
            nome(2)
        }
    }
});