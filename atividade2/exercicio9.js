const prompt = require("prompt-sync")();


let pilha = [];


function desempilhar() {
    if (pilha.length === 0) {
        console.log("A pilha está vazia.");
    } else {
        console.log("Desempilhando elementos da pilha:");
        while (pilha.length > 0) {
            console.log(pilha.pop());
        }
    }
}


for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Insira o " + (i + 1) + "º número:"));
    
   
    if (numero % 2 === 0) {
        pilha.push(numero); 
    } else {
      
        if (pilha.length > 0) {
            console.log("Desempilhando elemento da pilha:", pilha.pop());
        } else {
            console.log("Número ímpar encontrado, mas a pilha está vazia.");
        }
    }
}

if (pilha.length > 0) {
    console.log("Final do programa. A pilha não está vazia.");
    desempilhar();
}
