const prompt = require("prompt-sync") ();


let numeros = [];

for (let i = 0; i < 3; i++) {
    let numero = parseInt(prompt("Digite um número Inteiro :"));
    numeros.push(numero);
}

numeros.reverse();

console.log("Ordem inversa:", numeros);

