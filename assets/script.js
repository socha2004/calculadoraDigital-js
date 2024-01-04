let caixa_de_texto = document.querySelector(".text-box");
let botao = document.querySelector("#botao-9");

function encontraBotao () {}

function adicionaNumero (){
    caixa_de_texto.value += 9; 
}

botao.addEventListener("click", adicionaNumero);
