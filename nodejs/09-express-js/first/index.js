const express=require('express')
const app=express()
const port=1000

console.log(typeof app);
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/about',(req,res)=>{
    res.send('this is about page bro');
})


app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`);
})