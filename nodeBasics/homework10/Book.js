class Book {
	constructor(title, author, releaseYear) {
		this.title = title;
		this.author = author;
		this.releaseYear = releaseYear;
	}

	set title(newTitle) {
		try {
			if (typeof newTitle !== 'string' || newTitle.trim() === '') {
				throw new Error('Invalid title - empty value or not string');
			}
			this._title = newTitle;
		} catch (error) {
			this._title = 'STANDARD_TITLE';
			console.error(error.message);
		}
	}

	get title() {
		return this._title;
	}

	set author(newAuthor) {
		try {
			if (typeof newAuthor !== 'string' || newAuthor.trim() === '') {
				throw new Error('Invalid author - empty value or not string');
			}
			this._author = newAuthor;
		} catch (error) {
			this._author = 'STANDARD_AUTHOR';
			console.error(error.message);
		}
	}

	get author() {
		return this._author;
	}

	set releaseYear(newReleaseYear) {
		try {
			if (typeof newReleaseYear !== 'number' || newReleaseYear === '') {
				throw new Error('Invalid release year - empty value or not number');
			} else if (newReleaseYear <= 1600 || newReleaseYear > 2024) {
				throw new Error('Invalid release year value - enter between 1600 and 2024');
			}
			this._releaseYear = newReleaseYear;
		} catch (error) {
			this._releaseYear = 1900;
			console.error(error.message);
		}
	}

	get releaseYear() {
		return this._releaseYear;
	}

	static getOldestBook(books) {
		return books.reduce((oldest, current) => (oldest.releaseYear > current.releaseYear ? current : oldest));
	}

	printInfo() {
		console.log(`title: ${this.title}, author: ${this.author}, release year: ${this.releaseYear}`);
	}
}

export default Book;
