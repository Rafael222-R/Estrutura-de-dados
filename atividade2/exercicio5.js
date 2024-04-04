
const prompt = require("prompt-sync")();

let numero = (prompt("Insira um inteiro positivo:"));

if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, insira um inteiro positivo válido.");
} else {
    let fibonacci = [0, 1];
    
   
    for (let i = 2; i < numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    
    console.log("Números de Fibonacci até", numero + ":", fibonacci.join(", "));
}