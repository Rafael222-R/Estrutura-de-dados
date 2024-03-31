/*let num = 0;
    if (num === 0) {
        console.log('num é igual a 1');
   }
    else {
        console.log('num não é igual a 1, o valor do numero é ' + num);
   }

    if (num === 1) {
        num--;
   }else {
        num++
   }
var month = 8;
   if (month === 1) {
    console.log('January');
   } else if (month === 2) {
    console.log('february');
   }else if (month === 3) {
    console.log('march');
   }else if (month === 4) {
    console.log('april');
   }else if (month === 5) {
    console.log('may');
   }else if (month === 6) {
    console.log('june');
   }else if (month === 7) {
    console.log('july');
   }else if (month === 8) {
    console.log('august');
   }else if (month === 9) {
    console.log('september');
   }else if (month === 10) {
    console.log('october');
   }else if (month === 11) {
    console.log('november');
   }else if (month === 12) {
    console.log('december');
   }else {
    console.log('is not a month')
   }

   var month = 15;
   switch (month) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('february');
        break;
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('may');
        break;
    case 6:
        console.log('june');
        break;
    case 7:
        console.log('july');
        break;
    case 8:
        console.log('august');
        break;
    case 9:
        console.log('september');
        break;
    case 10:
        console.log('october');
        break;
    case 11:
        console.log('november');
        break;
    case 12:
        console.log('december');
        break   
    default:
        console.log('is not a month')
        break;
   }

   for (var i = 0; i < 10; i++) {
    console.log(i);
   }

   var saída = 'Mengudo';
   document.write(saída);

   var saída = 'Mengudo';
   alert(saída);
   
   var i = 0;
   do{
    console.log(i);
    i++;
    } while(i < 10);
    

    function sayHello() {
        console.log('Hello');
    }

    sayHello();
    

    function output(text) {
        console.log(text);
    }
        output('SRN');
    
    
        function sum(num1, num2) {

            console.log(num1 + num2);
        }

        sum(5, 4)
    

        obj = {
            name: {
                first: 'Guilherme',
                last : 'Sousa'
            },
            addres: 'QNP 05 casa 33A - Ceilândia Norte'
        };

        console.log(obj.addres)
        

        function Book (title, pages, isbn) {
            this.title = title;
            this.page = pages;
            this.isbn = isbn;
        }
        // para instanciar essa classe, podemos usar o código a seguir
        var book = new Book('Estrutura de dados', 406, '978-85-7522-553-0');
        // acessando suas propriedades 
        console.log(book.title); // exibe o título do livro
        book.title = 'Estrutura de dadaos e algoritmos com JavaScript' // atualiza o valor do título
        console.log(book.title); // exibe o valor atualizado
        console.log('Este livro possui: ' + book.pages + ' páginas.');
        

        function Book (title, pages, isbn) {
            this.title = title;
            this.page = pages;
            this.isbn = isbn;
        }
        // para instanciar essa classe, podemos usar o código a seguir
        var book = new Book('Estrutura de dados', 406, '978-85-7522-553-0');
        // podemos declarar e usar uma função/método, veja:
        Book.prototype.printTitle = function() {
            console.log(this.title);
        }
        book.printTitle();
        

        function Book (title, pages, isbn) {
            this.title = title;
            this.page = pages;
            this.isbn = isbn;
            this.printIsbn = function(){
                console.log('ISBN: ' + this.isbn);
            }
        }
        // para instanciar essa classe, podemos usar o código a seguir
        var book = new Book('Estrutura de dados', 406, '978-85-7522-553-0');
        // executando (chamado) a propriedade função da classe
        book.printIsbn();
        

        const numbers = [1,2,3,[4,5,6]];

        console.log(numbers.length);
        

        let daysOfWeek = new Array();

        daysOfWeek = new Array(7);

        daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

        let daysOfWeek = [];

        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        console.log(daysOfWeek);
        

        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for(let i = 0; i < daysOfWeek.length; i++) {
            console.log(daysOfWeek[i]);
        }
        

        const fibonacci = [];
        fibonacci[0] = 1;
        fibonacci[1] = 1;
            for(let i = 2; i < 20; i++) {
                fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            }

            console.log(fibonacci.join(' '));

            for (let i = 0; i < fibonacci.length; i++) {
                console.log(fibonacci[i]);
            }            
            */

            




            


