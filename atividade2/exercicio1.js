const prompt = require("prompt-sync")();

let numeros = [7, 2];


let numerosOrdenados = (function(array) {
    if (array[0] > array[1]) {
        
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }
    
    return array;
})(numeros);

console.log("Números em ordem crescente:", numerosOrdenados);
