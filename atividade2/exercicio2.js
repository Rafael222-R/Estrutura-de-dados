
    const numbers =  [1, 38 ,5];

    function compare (a,b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }
    
    numbers.sort(compare);

    console.log('Em ordem Crescente : ' + numbers.join(', '))
