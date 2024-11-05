import { title } from 'process';
import Book from './Book.js';

export class EBook extends Book {
	constructor(title, author, releaseYear, fileFormat) {
		super(title, author, releaseYear);
		this.fileFormat = fileFormat;
	}

	set fileFormat(newFileFormat) {
		try {
			if (!newFileFormat.includes('.')) {
				throw new Error("File format should contain symbol '.', standard file format has set - .pdf");
			} else if (typeof newFileFormat !== 'string') {
				throw new Error("File format is not 'string'");
			}
			this._fileFormat = newFileFormat;
		} catch (error) {
			this._fileFormat = '.pdf';
			console.log(error.message);
		}
	}

	get fileFormat() {
		return this._fileFormat;
	}

	static setEBookWithFileFormat(book, inputFormat) {
		try {
			if (!(book instanceof Book)) {
				throw new Error("Input book is not instance of class 'Book'");
			}
			if (inputFormat.length !== 4 && inputFormat.length !== 5) {
				throw new Error("Format should contain 4 or 5 symbols (with symbol '.')");
			}
			return new EBook(book.title, book._author, book._releaseYear, inputFormat);
		} catch (error) {
			console.log(error.message);
		}
	}

	printInfo() {
		console.log(
			`title: ${this.title}, author: ${this.author}, release year: ${this.releaseYear}, file format: ${this.fileFormat}`,
		);
	}
}
