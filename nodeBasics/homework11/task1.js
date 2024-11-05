// Завдання 1

// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент 
// та кількість мілісекунд як другий аргумент. 
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function displayDelayedText(input, delay){
    function display(){
        console.log(input);
    }
    setTimeout(display, delay);
}

let row = "This is test text row";
let delay = 3000;

displayDelayedText(row, delay);