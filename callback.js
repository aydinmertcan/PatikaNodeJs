books = [
    {name: 'book 1', author: 'yazar 1'},
    {name: 'book 2', author: 'yazar 2'},
    {name: 'book 3', author: 'yazar 3'},
];

const listbooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
};
addBook({name:'book 4', author:'yazar 4'},listbooks);
