// const promise1 = new Promise((resolve,reject) => {
//     //resolve('BAĞLANTI BAŞARILI');
//     reject('BAĞLANTI HATASI');
// });

// promise1.then(value => {
//     console.log(value);
// }).catch(err => (
//     console.log(err)
// ));

//--------------------------------------------------------//
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

const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        //resolve(books);
        reject('Bir hata oluştu')
    })
    return promise1;
};
addBook({name:'book 4', author:'yazar 4'})
    .then(() => {
        console.log('Yeni Liste');
        listbooks();
    }).catch((error) => {
        console.log(error)
    });
