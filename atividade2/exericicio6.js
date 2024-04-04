
const prompt = require ("prompt-sync")();

// Solicita ao usuário um inteiro positivo5
let numero = parseInt(prompt("Insira um inteiro positivo:"));

// Verifica se o número é válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um inteiro positivo válido.");
} else {
    let fatoriais = [1]; // Inicializa o array com o fatorial de 0
    let resultado = '';

    // Calcula os fatoriais de 1 até o número fornecido
    for (let i = 1; i <= numero; i++) {
        fatoriais[i] = i * fatoriais[i - 1];
    }

    // Monta a string com os resultados dos fatoriais
    for (let i = 0; i <= numero; i++) {
        resultado += "Fatorial de " + i + ": " + i + "! = " + fatoriais[i] + "\n";
    }

    // Exibe o resultado
    console.log(resultado);
}