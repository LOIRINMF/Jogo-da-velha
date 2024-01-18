// document.body.classList.toggle("") || document.getElementById("btnSortear").disabled = true;
    

let testeB = Number(0)
let testeX = Number(0)

// let opa = document.getElementById("")

function bola(){
    document.getElementById("xis").disabled = true

        testeB = 1
}
function xis(){
    document.getElementById("bola").disabled = true

    testex = 1
}

function bolaORxis() {
    if (testeB == 0 && testeX == 0) {

        let erro = document.getElementById("opa")

        erro.innerHTML = "Selecione com qual letra você ira começa primeiro!!"
    } else {
        erro.innerHTML = "Ok"
    }
}