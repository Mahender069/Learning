const express = require("express");
const { createAuthor, createBook,getBookwithAuthor } = require("../controllers/book-controller");

const router = express.Router();

router.post('/author',createAuthor);
router.post('/book',createBook);
router.get('/getBooks/:id',getBookwithAuthor);
module.exports = router;
