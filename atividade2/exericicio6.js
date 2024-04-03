
const prompt = require ("prompt-sync")();

function calcularFatoriais(n) {
    let fatoriais = [1]; // Inicializa o array com o fatorial de 0
    
    // Popula o array com os fatoriais de 1 até n
    for (let i = 1; i <= n; i++) {
        fatoriais[i] = i * fatoriais[i - 1];
    }

    return fatoriais;
}

// Solicita ao usuário um inteiro positivo
let numero = parseInt(prompt("Insira um inteiro positivo:"));

// Verifica se o número é válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um inteiro positivo válido.");
} else {
    // Chama a função para criar o array de fatoriais
    let resultado = calcularFatoriais(numero);
    
    // Exibe o resultado
    for (let i = 0; i <= numero; i++) {
        console.log("Fatorial de", i + ":", i + "! =", resultado[i]);
    }
}
