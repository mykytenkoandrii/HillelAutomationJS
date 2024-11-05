//Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

function getRandomGrade() {
	return Math.round(Math.random() * 100);
}

function getGradationLevel(score) {
	let result = '';
	if (score < 0 || score > 100) {
		console.log('Incorrect input value!');
		return 0;
	}

	switch (true) {
		case score < 60:
			result = 'Fail';
			break;

		case score >= 60 && score <= 70:
			result = 'Sufficient';
			break;

		case score >= 71 && score <= 80:
			result = 'Very Good';
			break;

		case score >= 81 && score <= 90:
			result = 'Good';
			break;

		default:
			result = 'Excellent';
	}
	return result;
}

let averageGrade = getRandomGrade();
console.log(`Grade: ${averageGrade}, gradation level: ` + getGradationLevel(averageGrade));
