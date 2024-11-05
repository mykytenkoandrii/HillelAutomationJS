import Book from './Book.js';
import { EBook } from './EBook.js';

let book1 = new Book('', '', 's');
let book2 = new Book('Sad Hetsymaskyi', 'Ivan Bahrianyi', 1950);
let book3 = new Book('Tygrolovy', 'Ivan Bahrianyi', 1946);
let book4 = new Book('Lisova Pisnya', 'Lesia Ukrainka', 1911);
let book5 = new Book('Slidy na dorozi', 'Valerii Markus', 2018);

let books = [book2, book3, book4, book5];

books.forEach((book) => {
	book.printInfo();
});

let eBook1 = new EBook('Trofeyni sertsia', 'Antin Mukharskiy', 2024, '.pdf');
let eBook2 = new EBook('Zhlobologiya', 'Antin Mukharskiy', 2013, '.txt');
let eBook3 = new EBook('Bomzhi Donbasy. Homo Profugos', 'Oleksii Chupa', 2023, '.docx');

let bookList = [book2, book3, book4, book5, eBook1, eBook2, eBook3];
let oldestBook = Book.getOldestBook(bookList);
console.log(`Oldest book from the list: ${oldestBook.title} by ${oldestBook.author}, ${oldestBook.releaseYear}`);

let updatedBook2 = EBook.setEBookWithFileFormat(book2, '.txt');
console.log(updatedBook2);
