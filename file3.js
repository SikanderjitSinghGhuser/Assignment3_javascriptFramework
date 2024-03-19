const express = require('express');
const app = express();
const PORT = 3000;

app.post("/crud", (req, res) => {
    res.send('Practising .post() HTTP method for "Create"');
});

app.put("/crud", (req, res) => {
    res.send('Practising .put() HTTP method for "Update"');
});

app.patch("/crud", (req, res) => {
    res.send('Practising .patch() HTTP method for "Update"');
});
app.delete("/crud", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete"');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/crud`);
});
