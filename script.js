let myLibrary = [];

const bookGrid = document.getElementById('books'); // grid that contains divs of books
const myModal = document.getElementById('myModal'); // main modal div
const newBookButton = document.getElementById('add-book-button'); // button that triggers new book form
const span = document.getElementsByClassName('close')[0]; // span button to close the modal

//input

const booknamehtml = document.getElementById('bookname'); 
const authornamehtml = document.getElementById('authorname');
const pageshtml = document.getElementById('pages');
const readhtml = document.getElementById('read'); 


newBookButton.onclick = function(){
    myModal.style.display = 'block';
}

span.onclick = function(event){
    myModal.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == myModal){
        myModal.style.display = 'none';
    }
}


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(read === true){
        this.read = 'Read';
    } else {
        this.read = 'Not read';
    }
}

const theHobbit = new Book('The Hobbit', 'Your Mom', '500', true);
const dune = new Book('Dune', 'Frank helbert', '600', false);

myLibrary.push(dune, theHobbit);

loopBooks();

const form = document.getElementById('new-Book-Form');
form.addEventListener('submit', addBookToLibrary);

function addBookToLibrary(e){
    e.preventDefault();
    let formbookname = document.getElementById("bookname").value;
    let formauthorname = document.getElementById("authorname").value;
    let formpages = document.getElementById("pages").value;
    let formread = document.getElementById("read").checked;
    console.log(formread);
    console.log('ass');
    myLibrary.push(new Book(formbookname, formauthorname, formpages, formread));
    myModal.style.display = 'none';
    loopBooks();
}

function loopBooks(){
    let i;
    clearLibrary();
    for(i = 0; i < myLibrary.length; i++){
        let node = document.createElement('div');
        console.log(`This works ${i}`);
        node.setAttribute('class', 'book-grid-book');
        node.innerHTML = `Name: ${myLibrary[i].title} <br>Author: ${myLibrary[i].author} <br> Pages: ${myLibrary[i].pages} <br> Status: ${myLibrary[i].read}`;
        bookGrid.appendChild(node);
    }
}

function clearLibrary(){
    bookGrid.innerHTML = ' ';
}
