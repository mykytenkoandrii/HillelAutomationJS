// Функція повинна генерувати числа Фібоначчі починаючи з 0.
// Числа повинні генеруватися по одному за раз.
// Перевірка виконується викликом методу next() генератора.
// Перевірка виконується для перших 10 чисел Фібоначчі.
// Очікуванні значення: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//                      0  1  2  3  4  5

function* fibonacciGenerator() {
	let a = 0;
	let b = 1;
	while (true) {
		yield a;
		let currentA = a;
		a = b;
		b = a + currentA;
	}
}

const gen = fibonacciGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
