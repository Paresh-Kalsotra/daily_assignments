const express = require("express");
const libraryController = require("../controller/controller.library.js");

const router = express.Router();

//route to load library page
router.get("/", libraryController.lmsLoad);

//route to get book by title
router.get("/book/:title", libraryController.getBook);

//route to post book
router.post("/book", libraryController.addBook);

//route to get all books
router.get("/book", libraryController.getAllBook);

//route to update borrowed status
router.patch("/book", libraryController.updateBook);

//route to delete
router.delete("/book/:title", libraryController.deleteBook);

module.exports = router;
