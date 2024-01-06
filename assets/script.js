let caixa_de_texto = document.querySelector(".text-box");
let numeros = [];

function adicionaNumero (valor){
    if(valor == '+'){
        numeros.push(caixa_de_texto.value);
        caixa_de_texto.value = '';
    }
    else{
        caixa_de_texto.value += valor;
    }
    console.log(numeros)
}

function limpaCampo(){
    caixa_de_texto.value = '';
    while(numeros.length){
        numeros.pop();
    }
}

function realizaOperacao () {
    let resultado = 0;

    if(caixa_de_texto.value){
        resultado += parseFloat(caixa_de_texto.value);
    }

    else if (caixa_de_texto.value = '' || numeros.length == 0){
        window.alert("Insira valores para realizar a operação")
    }
    else if (numeros.length){
        for(let i=0; i < numeros.length; i++){
            resultado += parseFloat(numeros[i]); 
        }
        window.alert(`A soma é ${resultado}`);
    }
    
    while(numeros.length){ // Limpa o array
        numeros.pop();
    }
}

