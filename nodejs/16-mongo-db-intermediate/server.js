const express=require('express');
const mongoose=require('mongoose');
const productRouter=require('./routes/product-routes')
const bookRouter=require('./routes/book-routes')
require('dotenv').config();

const app=express();

//connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('mongodb connected successfully');
    })
    .catch(err=>{
        console.log(err);
    })


// middleware
app.use(express.json())


// routes
app.use('/api/product',productRouter);

app.use('/api/reference',bookRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})
