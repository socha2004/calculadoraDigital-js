let caixa_de_texto = document.querySelector(".text-box");
let numeros = [];
let expressao;

function adicionaNumero(valor) {
    // caixa_de_texto.value += valor;
    // if(valor == "+"){
    //     numeros.push(caixa_de_texto.value);
    //     caixa_de_texto.value += valor
    // }else {
    //     caixa_de_texto.value += valor;
    // }
    caixa_de_texto.value += valor;
}

function limpaCampo() {
    caixa_de_texto.value = '';
    painel.value = '';
    while (numeros.length) {
        numeros.pop();
    }
}

function realizaOperacao() {
    let flag = true;

    if (caixa_de_texto.value = '') {
        window.alert("Insira ao menos 2 valores para realizar o calculo.");
        caixa_de_texto.value = ''
        flag = false;
    }
    if (flag) {
        // for (let i = 0; i < numeros.length; i++) {
        //     resultado += parseFloat(numeros[i]);
        // }
        expressao = caixa_de_texto.value;
        parseFloat(expressao);
        eval(expressao);
        console.log(typeof expressao, expressao);
        window.alert(`A soma é ${expressao}`);
        
        caixa_de_texto.value = "";
    }

    while (numeros.length) { // Limpa o array
        numeros.pop();
    }
}

