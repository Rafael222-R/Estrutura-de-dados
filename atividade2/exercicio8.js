
const prompt = require ("prompt-sync")();

// Solicita ao usuário um número decimal
let decimal = parseInt(prompt("Insira um número decimal:"));

// Verifica se a entrada é válida
if (isNaN(decimal)) {
    console.log("Por favor, insira um número decimal válido.");
} else {
    // Converte o número decimal para hexadecimal
    let hexadecimal = decimal.toString(16).toUpperCase();

    // Exibe o resultado
    console.log("O número decimal", decimal, "convertido para hexadecimal é:", hexadecimal);
}
