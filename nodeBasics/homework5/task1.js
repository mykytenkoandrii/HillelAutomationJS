//Створіть змінну averageGrade і присвойте їй середню оцінку студента (від 0 до 100).
// За допомогою конструкції if else, визначте та виведіть у консоль рівень успішності студента:
// Якщо середня оцінка менше 60, вивести "Незадовільно".
// Якщо середня оцінка від 60 до 70 (включно), вивести "Задовільно".
// Якщо середня оцінка від 71 до 80 (включно), вивести "Добре".
// Якщо середня оцінка від 81 до 90 (включно), вивести "Дуже добре".
// Якщо середня оцінка від 91 до 100 (включно), вивести "Відмінно".

function getRandomGrade() {
	return Math.round(Math.random() * 100);
}

function getGradationLevel(score) {
	if (score < 0 || score > 100) {
		console.log('Incorrect input value!');
		return 0;
	} else if (score < 60) {
		return 'Fail';
	} else if (score >= 60 && score <= 70) {
		return 'Sufficient';
	} else if (score >= 71 && score <= 80) {
		return 'Good';
	} else if (score >= 81 && score <= 90) {
		return 'Very Good';
	}
	return 'Excellent';
}

let averageGrade = getRandomGrade();
console.log(`Grade: ${averageGrade}, gradation level: ` + getGradationLevel(averageGrade));
