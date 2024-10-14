// Створіть функцію яка приймає один параметр: age.
// Усередині функції перевірте, чи age більше або рівне 18.
// Якщо age відповідає умові, поверніть true, інакше поверніть false.
// Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

let checkAdultAge = (age) => age >= 18 ? true : false;

console.log("Result with input = 25: " + checkAdultAge(25));
console.log("Result with input = 15: " + checkAdultAge(15));