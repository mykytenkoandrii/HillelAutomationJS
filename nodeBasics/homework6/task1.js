// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

function getDeclarationSquare(width, height) {
	return width * height;
}

let getExpressionSquare = function (width, height) {
	return width * height;
};

let getSquareArrow = (width, height) => width * height;

console.log('Result of declaration function: ' + getDeclarationSquare(5, 10));
console.log('Result of expression function: ' + getExpressionSquare(5, 10));
console.log('Result of arrow function: ' + getSquareArrow(5, 10));
