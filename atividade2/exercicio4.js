
const prompt = require ("prompt-sync")();

function encontrarIndicesNoVetor() {
    // Solicita ao usuário que insira o vetor
    let vetor = prompt("Insira o vetor separado por vírgulas (ex: 1,2,3):").split(",").map(Number);
    // Solicita ao usuário que insira o número a ser buscado
    let numero = parseInt(prompt("Insira o número a ser buscado:"));

    let indices = [];
    // Itera sobre o vetor
    for (let i = 0; i < vetor.length; i++) {
        // Se o elemento atual for igual ao número
        if (vetor[i] === numero) {
            // Adiciona o índice ao array de índices
            indices.push(i);
        }
    }
    // Verifica se o número foi encontrado
    if (indices.length > 0) {
        console.log("O número", numero, "aparece nos índices:", indices);
    } else {
        console.log("O número", numero, "não foi encontrado no vetor.");
    }
}

// Chamada da função
encontrarIndicesNoVetor();
