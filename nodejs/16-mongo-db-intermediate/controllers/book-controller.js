const Author = require("../models/Author");
const Book = require("../models/Book");

const createAuthor = async (req, res) => {
  try {
    const author=await Author.create(req.body);

    res.status(201).json({
      success:true,
      data:author
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};
const createBook = async (req, res) => {
  try {
    const book=await Book.create(req.body);

    res.status(201).json({
      success:true,
      data:book
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const getBookwithAuthor=async(req,res)=>{
   try {
    const id=req.params.id;
    const books=await Book.findById(id).populate('author');

    if(!books){
      res.status(404).json({
        success:false,
        message:'Books not found!!'
      })
    }
    res.status(200).json({
      success:true,
      data:books
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  } 
}

module.exports = { createAuthor, createBook,getBookwithAuthor };
