// Створіть функцію яка приймає один параметр: num.
// Усередині функції виведіть значення num в консоль.
// Після цього, рекурсивно викличте функцію зі зменшеним значенням num (наприклад, num - 1).
// Фунція повинна викликатися, доки num не стане менше або рівне 0.
// Викличте вашу функцію з аргументом, наприклад, 5, щоб почати рекурсивний лічильник.

function outputLoop(num){
    if(num >= 0){
        console.log(`Num counter = ${num}`);
        outputLoop(--num);
    }
}

outputLoop(5);