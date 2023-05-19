// Class : Book, UI, Store
// Event : Display, Add, Remove

// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    // array
    static displayBooks() {
        // const StoredBooks = [
        //     {
        //         title: 'Book One',
        //         author: 'Author 1',
        //         isbn: '123456'
        //     },
        //     {
        //         title: 'Book Two',
        //         author: 'Author 2',
        //         isbn: '123456'
        //     }
        // ];

        // //copy
        // const books = StoredBooks;

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));


    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        // append row to list
        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            // one time parentElement >>> td
            // another time parentElement >>> tr (whole row)
            el.parentElement.parentElement.remove();
        }
    }

    // We want to create smtg like this 
    // <div class="alert alert-danger">Message</div>

    static showAlert(message, className){
        const div = document.createElement('div');
        // $ means when calling this function can straight put in danger instead of alert-danger
        // <div class="alert alert-danger">MESSAGE</div>
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        // insert div before form
        container.insertBefore(div, form);
        // Vanish in 3 sec
        setTimeout(() => document.querySelector('.alert').remove(),1000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        // if there is no book
        if(localStorage.getItem('books') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        // must stringify before storing to local, cuz cant store it as an object
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                // at index postition, delete 1 book
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book (e stands for event)
// listen for submit
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;


    // Validate
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        // Instatiate book
        const book = new Book(title, author, isbn);

        // console.log(book)

        // Add Book to UI
        UI.addBookToList(book);

        // Add book to store
        Store.addBook(book);

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear Fields
        UI.clearFields();
    }

});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from store (parent element is td, sibling, to get isbn)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    // Show success message
    UI.showAlert('Book Removed', 'success');
});