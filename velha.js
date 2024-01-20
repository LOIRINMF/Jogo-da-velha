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
function bola() {
    document.querySelector('.btXis').disabled = true

    testeB = 1

    const novoX = document.querySelector('.btXis');
    novoX.classList.toggle('outraX');

    verde()
}
function xis() {
    document.getElementById("bola").disabled = true

    testeX = 1

    const novoB = document.querySelector('.btBola');
    novoB.classList.add('outraB');

    // Deixar as div box verde.
    verde()
}

function verde() {
    let c1 = document.querySelector('#l1')
    c1.classList.add('certo')

    let c2 = document.querySelector('#l2')
    c2.classList.add('certo')

    let c3 = document.querySelector('#l3')
    c3.classList.add('certo')

    let c4 = document.querySelector('#l4')
    c4.classList.add('certo')

    let c5 = document.querySelector('#l5')
    c5.classList.add('certo')

    let c6 = document.querySelector('#l6')
    c6.classList.add('certo')

    let c7 = document.querySelector('#l7')
    c7.classList.add('certo')

    let c8 = document.querySelector('#l8')
    c8.classList.add('certo')

    let c9 = document.querySelector('#l9')
    c9.classList.add('certo')
}

/* função que verifica os parametros. 
 (agora e fazer ela chama outra função para continuar o jogo) */

function bolaORxis() {
    if (testeB == 0 && testeX == 0) {

        let erro = document.getElementById("opa")

        erro.innerHTML = "Selecione com qual letra você ira começa primeiro!!"
    } else {
        let erro = document.getElementById("opa")
        erro.innerHTML = "Ok"
    }
}