// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
	if (denominator === 0) {
		throw new Error(`Prohibited action: division by zero`);
	} else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error(
			`Incorrect type of argument: type of numerator - ${typeof numerator}, type of denominator - ${typeof denominator}`,
		);
	}
	return numerator / denominator;
}

function runFunction(inputFunction, arg1, arg2) {
	try {
		return inputFunction(arg1, arg2);
	} catch (Error) {
		console.log(Error.message);
		return 0;
	} finally {
		console.log(`Function '${inputFunction.name}' has been finished`);
	}
}

console.log(runFunction(divide, 10, 2));
console.log(runFunction(divide, 1, 2));
console.log(runFunction(divide, 2, 0));
console.log(runFunction(divide, '2', 2));
console.log(runFunction(divide, 2, 'x'));
