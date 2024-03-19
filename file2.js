const express = require('express');
const app = express();
const PORT = 3000;
const books = require('./data/books.json')

app.get('/books', (req, res) => {
    res.json(books);
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/books`);
})