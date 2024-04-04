
const prompt = require ("prompt-sync")();

let decimal = (prompt("Insira um número decimal:"));


if (isNaN(decimal)) {
    console.log("Por favor, insira um número decimal válido.");
} else {
    
    let hexadecimal = decimal.toString(16).toUpperCase();

   
    console.log("O número decimal", decimal, "convertido para hexadecimal é:", hexadecimal);
}
