const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

const router = express.Router();

//all routers related to books only

router.get("/getBooks",getAllBooks);
router.get("/getBook/:bookId",getBookById);
router.post("/addBook",addBook);
router.put("/updateBook/:bookId",updateBook);
router.delete("/deleteBook/:bookId",deleteBook);


module.exports=router;
