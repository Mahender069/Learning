const express=require('express')
const connectToDataBase=require('./database/db')
const bookRoutes=require('./routes/book-router')
require('dotenv').config()

const app=express()
const PORT=process.env.PORT;

//connect to our database
connectToDataBase()

//middleware (we are only using express.json() bulit-in)
app.use(express.json())


//routes here

/*
    where /api/books is parent root 

    and when we merge getBooks with  /api/books/getBooks it will trigger /getBooks handler

    very interesting 
*/
app.use("/api/books",bookRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})