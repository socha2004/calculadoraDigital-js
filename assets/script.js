let caixa_de_texto = document.querySelector(".text-box");
let numeros = [];
let expressao;

function adicionaNumero(valor) {
    caixa_de_texto.value += valor;
}
function limpaCampo() {
    caixa_de_texto.value = '';
    while (numeros.length) {
        numeros.pop();
    }
}
function realizaOperacao() {
    let flag = true;
    if(caixa_de_texto.value == ''){
        window.alert("Insira valores para realizar a operação!");
        flag = false;
    }
    else if (flag) {
        try{
            let expressao;
            expressao = eval(caixa_de_texto.value);
             console.log(typeof expressao);
            window.alert(`O resultado é ${eval(caixa_de_texto.value)}`);
        caixa_de_texto.value = "";
        }catch(e){
           window.alert(`A expressão informada está errada!\nMotivo do error: ${e.message}`);
        }
    }
    while (numeros.length) { // Limpa o array
        numeros.pop();
    }
}

