
const prompt = require("prompt-sync")();
// Solicita ao usuário um inteiro positivo
let numero = (prompt("Insira um inteiro positivo:"));

// Verifica se o número é válido
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, insira um inteiro positivo válido.");
} else {
    let fibonacci = [0, 1];
    
    // Popula o array com os números de Fibonacci até o número fornecido
    for (let i = 2; i < numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    // Exibe o resultado usando o método join
    console.log("Números de Fibonacci até", numero + ":", fibonacci.join(", "));
}