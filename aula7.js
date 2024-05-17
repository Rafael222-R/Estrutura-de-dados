/*

class Queue {
    constructor (){

        this.count = 0;

        this.lowesCount = 0;

        this.items = {};
    }
}

*/

/*
class Queue {
    constructor(){
        this.items = {};
    }
    enqueue(element) {

    }
    size (){

    }
    isEmpty(){

    }
    dequeue(){

    }

    peek (){

    } 
    clear (){

    }   
    toString(){

    }
}

*/
/*
class Queue {
    constructor(){
        this.count = 0;

        this.lowesCount = 0;

        this.items = {};
    }

    enqueue(element){
        this.items[this.count] = element;
        this.count++
        }
}

*/
/*
size(); {
    return this.count - this.lowestCount;

}

isEmpty() ;{
    return this.size() === 0;
}


dequeue() ;{
    if (this.isEmpty()) {
        return undefined;
    }

    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.lowestCount++;
    return result; 

}

peek(); {
    if (this.isEmpty()) {
        return undefined;
    }

    return this.items[this.lowestCount]
}

clear (); {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
}

toString(); {
    if (this.isEmpty()){
        return '';
    }
    let objString = `${this.items[this.lowestCount]}` ; 
    for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${ objString}, ${this.items[i]}` ; 
    }
    return objString;
}

*/
const fila = new Queue();
console.log(file.isEmpty());

fila.enqueue('jhon');
fila.enqueue("Jack");







