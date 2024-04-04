
const prompt = require ("prompt-sync")();

function encontrarIndicesNoVetor() {
    
    let vetor = prompt("Insira o vetor separado por vírgulas (ex: 1,2,3):").split(",").map(Number);
   
    let numero = parseInt(prompt("Insira o número a ser buscado:"));

    let indices = [];
  
    for (let i = 0; i < vetor.length; i++) {
        
        if (vetor[i] === numero) {
           
            indices.push(i);
        }
    }
   
    if (indices.length > 0) {
        console.log("O número", numero, "aparece nos índices:", indices);
    } else {
        console.log("O número", numero, "não foi encontrado no vetor.");
    }
}


encontrarIndicesNoVetor();
