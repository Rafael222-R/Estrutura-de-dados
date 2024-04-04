const prompt = require ("prompt-sync")();


let par = [];
let impar = [];


for (let i = 0; i < 10; i++) {
    let numero = (prompt("Insira o " + (i + 1) + "º número:"));
    
    
    if (numero % 2 === 0) {
        par.push(numero); 
    } else {
        impar.push(numero); 
    }

    
    if (numero === 0) {
        if (par.length === 0 || impar.length === 0) {
            console.log("Erro: Alguma das pilhas está vazia.");
        } else {
            console.log("Desempilhando um elemento de cada pilha:");
            console.log("Elemento desempilhado da pilha 'par':", par.pop());
            console.log("Elemento desempilhado da pilha 'impar':", impar.pop());
        }
    }
}


console.log("Desempilhando todos os elementos das pilhas:");

console.log("Elementos da pilha 'par':");
while (par.length > 0) {
    console.log(par.pop());
}

console.log("Elementos da pilha 'impar':");
while (impar.length > 0) {
    console.log(impar.pop());
}
