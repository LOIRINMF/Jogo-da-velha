/*  document.body.classList.toggle("")
    
    document.getElementById("btnSortear").disabled = true;

    const elemento = document.querySelector('.meu-elemento');
    elemento.className += ' minha-classe';   


*/

let testeB = Number(0)
let testeX = Number(0)

// let opa = document.getElementById("")


// funçoes que qando chamadas liberam um parametro(1) de aprovação.
function bola(){
    document.querySelector('.xis').disabled = true

        testeB = 1

        const novoX = document.querySelector('.xis');
            novoX.classList.toggle('outraX');
        
}
function xis(){
    document.getElementById("bola").disabled = true

    testeX = 1

    const novoB = document.querySelector('.bola');
            novoB.classList.add('outraB');
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