
const prompt = require("prompt-sync")();

function fibonacciArray(n) {
    let fibonacci = [0, 1];
    
    // Popula o array com os números de Fibonacci até o número fornecido
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

// Solicita ao usuário um inteiro positivo
let numero = parseInt(prompt("Insira um inteiro positivo:"));

// Verifica se o número é válido
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, insira um inteiro positivo válido.");
} else {
    // Chama a função para criar o array de Fibonacci
    let resultado = fibonacciArray(numero);
    console.log("Números de Fibonacci até", numero + ":", resultado.join(", "));
}
