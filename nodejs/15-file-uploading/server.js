require('dotenv').config()
const express=require('express');
const connectToDB=require('./database/db')
const authRouter=require('./routes/auth-routes')
const homeRouter=require('./routes/home-routes')
const adminRouter=require('./routes/admin-routes')
const ImageRouter=require('./routes/image-routes')


const app=express()
const PORT=process.env.PORT


//connect to Database
connectToDB()


//middleware
app.use(express.json())

//routes

//auth routes
app.use('/api/auth',authRouter);

//home routes
app.use('/api/home',homeRouter);

//admin routes
app.use('/api/admin',adminRouter);

//image routes
app.use('/api/image',ImageRouter);



app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`);
})