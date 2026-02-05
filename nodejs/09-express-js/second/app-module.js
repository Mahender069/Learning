const express=require('express')
const app=express()
// application level settings
app.set('view engine','ejs')



// routing
app.get('/',(req,res)=>{
    res.send('hello world')
})

//middleware(doubt)
app.use((err,req,res,next)=>{
    console.log(err.stack);
})

const port=1000

app.listen(port,()=>{
    console.log('server is listening at port',port);
})