let caixa_de_texto = document.querySelector(".text-box");
let numeros = [];

function adicionaNumero(valor) {
    if (valor == '+') {
        numeros.push(caixa_de_texto.value);
        caixa_de_texto.value = '';
    }
    else if (valor == '-'){
        // Pass
    }
    else {
        caixa_de_texto.value += valor;
    }
    console.log(numeros)
}

function limpaCampo() {
    caixa_de_texto.value = '';
    while (numeros.length) {
        numeros.pop();
    }
}

function realizaOperacao() {
    let resultado = 0;
    let flag = true;

    if (caixa_de_texto.value) {
        numeros.push(caixa_de_texto.value);
    }
    if (caixa_de_texto.value = '' || numeros.length < 1) {
        window.alert("Insira ao menos 2 valores para realizar o calculo.")
        flag = false;
    }
    if (flag) {
        for (let i = 0; i < numeros.length; i++) {
            resultado += parseFloat(numeros[i]);
        }
        window.alert(`A soma é ${resultado}`);
        caixa_de_texto.value = "";
    }

    while (numeros.length) { // Limpa o array
        numeros.pop();
    }
}

