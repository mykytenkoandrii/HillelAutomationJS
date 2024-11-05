// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
	title: 'Tyhrolovy',
	author: 'Ivan Bahrianyi',
	year: 1944,
};
console.log(book);

delete book.title;
delete book.author;

console.log(book);
