// Створіть функцію handleNum яка буде приймати 3 параметри.
// число
// Колбек функцію яку треба викликати якщо передане число парне
// Колбек функцію яку треба викликати якщо передане число непарне
// Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd.
//Кожна з них має виводити просте повідомлення в консоль.
//Наприклад handleEven буде виводити текст “number is even”, a handleOdd буде виводити текст “number is odd”
// Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше
let handleEven = (number) => {
	console.log(`${number} is even`);
};
let handleOdd = (number) => {
	console.log(`${number} is odd`);
};

function handleNum(num, evenFunc, oddFunc) {
	let result = num % 2 === 0 ? true : false;
	result == true ? evenFunc(num) : oddFunc(num);
}

handleNum(2, handleEven, handleOdd);
handleNum(3, handleEven, handleOdd);
