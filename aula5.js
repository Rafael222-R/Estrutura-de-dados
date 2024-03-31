// começando apartir do slid 04 pag 19
var averageTempDay1 = [36.5, 28, 30, 25, 18, 40];
var averageTempDay2 = [19, 22.5, 29, 31, 23.5, 32.5];

var averageTemp = [];
averageTemp[0] = averageTempDay1;
averageTemp[1] = averageTempDay2;

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);
//console.table(averageTemp);


/*const matrix3x3x3 = [];

for (var i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (var j = 0; j < 3; j++) {
        matrix3x3x3 [i][j] = [];
        for (var z = 0; z < 3; z++) {
            matrix3x3x3 [i][j][z] = i + j + z;
        }
    }
}

console.table(matrix3x3x3);
*/

/*
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers.join(", "));
*/

/*
function isEven(x){

        console.log(x);
        return (x % 2 === 0) ? true : false ;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] ;

//numbers.every(isEven);

//numbers.some(isEven);

//numbers.forEach( x => console.log ( x % 2 === 0 ));
*/

/*
function isEven(x){

    
    return (x % 2 === 0) ? true : false ;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] ;


// const myMap = numbers.map(isEven);

//console.log(myMap);

const evenNumbers = numbers.filter(isEven);

    console.log(evenNumbers);
*/

/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  //  console.log (numbers.reduce((previous, current) => previous + current) );
    for (const n of numbers) {
        console.log(n % 2 === 0 ? n + " é par " : n + " é impar") ;
    }


*/

    