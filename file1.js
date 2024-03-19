const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send('<h1>New group 1</h1>');

})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})