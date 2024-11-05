// Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map.

// Ось кроки, які вам потрібно виконати:

// Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
// Створіть новий масив, де кожне значення це елемент вихідного масиву помножений на значення індексу відповідного елемента початкового масиву.
// Виведіть новий масив на консоль.
const array = [1, 2, 3, 4, 5];
function updateArray(array) {
	return array.map((num) => num * array.indexOf(num));
}

let result = updateArray(array);
console.log(result);
