const express = require("express");
const books_controller = require("./controllers/books_controller")

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", books_controller.read);
app.post("/api/books", books_controller.create);
app.put("/api/books/:id", books_controller.update);
app.delete("/api/books/:id", books_controller.delete);

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});