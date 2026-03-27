require('dotenv').config()
const express=require('express');
const cors=require('cors')
const {configCors}=require('./config/corsConfig');
const { logger } = require('./middleware/loggerMiddleWare');

const app=express()


//middlewares
app.use(express.json())
app.use(configCors())
app.use(logger);
const PORT=process.env.PORT





app.listen(PORT,()=>{
    console.log(`server is listening to port ${PORT}`);
})