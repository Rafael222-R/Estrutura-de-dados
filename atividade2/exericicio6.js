
const prompt = require ("prompt-sync")();

let numero = (prompt("Insira um inteiro positivo:"));


if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um inteiro positivo válido.");
} else {
    let fatoriais = [1]; 
    let resultado = '';

   
    for (let i = 1; i <= numero; i++) {
        fatoriais[i] = i * fatoriais[i - 1];
    }

   
    for (let i = 0; i <= numero; i++) {
        resultado += "Fatorial de " + i + ": " + i + "! = " + fatoriais[i] + "\n";
    }

 
    console.log(resultado);
}