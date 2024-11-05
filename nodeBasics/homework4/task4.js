// Завдання 4.1
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

let radius = 4.5;
let resultSquare = Math.PI * radius ** 2;
console.log(resultSquare.toFixed(2));

// Завдання 4.2
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.

let length = 15;
let width = 10;
function squareResult(length, width) {
	return length * width;
}

let square = squareResult(length, width);
console.log(square);

// Завдання 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

radius = 6;
let height = 11.5;

let result = Math.PI * Math.pow(radius, 2) * height;

console.log(result.toFixed(2));

function squareCylinder(radius, height) {
	return Math.PI * Math.pow(radius, 2) * height;
}

let squareCylinderResult = squareCylinder(radius, height);

console.log(squareCylinderResult.toFixed(2));
