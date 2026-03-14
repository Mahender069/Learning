require('dotenv').config()
const express = require("express");
const { requestLogger, addTimeStamp } = require('./middleware/customerMiddleware');
const app = express();


app.use(express.json())
app.use(requestLogger)
app.use(addTimeStamp)


app.get('/',(req,res)=>{
    res.json({
        message:'Hello world'
    })
})
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})