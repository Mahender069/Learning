const Book = require("../models/book");
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: true,
        message: "there no books in the collection or the database",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const dataById = await Book.findById(bookId);
    if (dataById) {
      res.status(200).json({
        success: true,
        data: dataById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `no book with id ${bookId}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const addBook = async (req, res) => {
  try {
    const formData = req.body;
    console.log(formData);
    const newlyCreatedData = await Book.create(formData);
    if (formData) {
      res.status(201).json({
        success: true,
        message: "Book is created Sucessfully",
        data: newlyCreatedData,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const id = req.params.bookId;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      res.status(404).json({
        success: false,
        message: "can't find this book",
      });
    }
    res.status(200).json({
      success: true,
      data: deletedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
const updateBook = async (req, res) => {
  try {
    const updatedFormData=req.body;
    const currentBookId=req.params.bookId;
    const updatedBook=await Book.findByIdAndUpdate(currentBookId,updatedFormData,{
        new:true,
    })
    if(!updatedBook){
        res.status(404).json({
            success:false,
            message:'there is no book with this id'
        })
    }
    res.status(200).json({
        success:true,
        message:'book updated successfully',
        data:updatedBook
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
