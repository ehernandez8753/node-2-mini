const books = [];
let id = 0;

module.exports = {

    read: (req, res) => {
        res.status(200).send(books);
    },

    create: (req, res) => {
        let {title, author} = req.body;
        books.push({title, author, id});
        id++;
        res.status(200).send(books);
    },

    update: (req, res) => {
        let targetId = req.params.id;
        let {title, author} = req.body;
        let bookIndex = books.findIndex(book => book.id == targetId);
        let book = books[bookIndex];

        books[bookIndex] = {
            id: book.id,
            title: title || book.title,
            author: author || book.author
        };

        res.status(200).send(books);
    },

    delete: (req, res) => {
        let targetId = req.params.id;
        let bookIndex = books.findIndex(book => book.id == targetId);
        books.splice(bookIndex,1);
        res.status(200).send(books);
    }

}