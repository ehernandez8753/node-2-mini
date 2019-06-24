const express = require("express");
const app = express();
let port = 4000;
const bc = require("./controllers/books_controller.js");

app.use(express.json());
app.listen(port, ()  => {console.log("Server Activated")});
app.use(express.static(__dirname + "/../build"));

//API Functions

//Return all books
app.get("/api/books", bc.read);
//Create a new book
app.post("/api/books", bc.create);
//Edit a book
app.put("/api/books/:id", bc.update);
//Delete a book
app.delete("/api/books/:id", bc.delete);