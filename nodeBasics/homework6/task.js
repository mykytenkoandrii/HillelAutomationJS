function reverseString(str) {
	let reverseStr = '';
	let result = str.length;
	console.log(result);

	let lenght = 0;
	for (let i in str) {
		if (str.hasOwnProperty(i)) {
			lenght++;
		}
	}

	lenght--;
	for (let i = 0; i <= lenght; i++) {
		reverseStr += str[lenght - i];
	}
	return revStr;
}
let result = reverseString('some string');
console.log(result);
