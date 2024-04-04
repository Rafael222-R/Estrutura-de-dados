const prompt = require("prompt-sync")();

// Cria uma pilha vazia
let pilha = [];

// Função para desempilhar e mostrar os elementos da pilha
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

// Lê os 10 números
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Insira o " + (i + 1) + "º número:"));
    
    // Verifica se o número é par ou ímpar e executa as ações correspondentes
    if (numero % 2 === 0) {
        pilha.push(numero); // Empilha o número se for par
    } else {
        // Desempilha um número se for ímpar
        if (pilha.length > 0) {
            console.log("Desempilhando elemento da pilha:", pilha.pop());
        } else {
            console.log("Número ímpar encontrado, mas a pilha está vazia.");
        }
    }
}

// Se a pilha não estiver vazia ao final do programa, desempilha e mostra os elementos
if (pilha.length > 0) {
    console.log("Final do programa. A pilha não está vazia.");
    desempilhar();
}
