require('dotenv').config()
const express=require('express');
const connectToDB=require('./database/db')
const authRouter=require('./routes/auth-router')
const homeRouter=require('./routes/home-routes')
const adminRouter=require('./routes/admin-routes');

const app=express()
const PORT=process.env.PORT

//database connection
connectToDB();

//middleware
app.use(express.json())


//auth routes
app.use('/api/auth/',authRouter);

//home routes
app.use('/api/home',homeRouter);

//admin routes
app.use('/api/admin',adminRouter);

app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`)
})