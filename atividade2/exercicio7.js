
const prompt = require("prompt-sync")();


let linhas = (prompt("Insira a quantidade de linhas:"));

let colunas = (prompt("Insira a quantidade de colunas:"));


if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
    console.log("Por favor, insira valores válidos para as linhas e colunas.");
} else {
    let matriz = [];

    
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            
            matriz[i][j] = i + j + 2;
        }
    }

    
    console.log("Matriz:");

    for (let i = 0; i < linhas; i++) {
        console.log(matriz[i].join("\t"));
    }
}
