
let booksData;
fetch('./books.json') //path to the file with json data
    .then(response => {
        return response.json();
    })
    .then(data => {
        booksData = data
    });

document.body.onload = addHeader;

function addHeader() {
    const header = document.createElement("header");
    //create heading
    const h1 = document.createElement("h1")
    h1.textContent = "Welcome to our awesome book shop!"
    header.appendChild(h1);
    // //create image
    // const headerImage = document.createElement("img");
    // headerImage.src = "./images/headerImage.png";
    // header.appendChild(headerImage);
    document.querySelector('main').appendChild(header);
    header.classList.add('header');
    // headerImage.classList.add('header-img')
};
//create booklist section
function addBookList() {
    const bookList = document.createElement("section");
    bookList.classList.add("hero");
    const bookShelf = document.createElement("ul");
    bookShelf.classList.add("list");
    booksData.forEach(element => {
        createItem()
    });
}

function createItem() {
    const item = document.createElement("li");
    item.classList.add("list-item");
    // const books = json
    const author = json[0].name;
    console.log(author)
}


