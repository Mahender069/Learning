const express=require('express')
const app=express()

const firstMiddleWare=(req,res,next)=>{
    console.log('hello');
    next();
}

const middleWareForAbout=(req,res,next)=>{
    console.log('middle ware for about page');
    next();
}

app.use(firstMiddleWare);
app.get('/',(req,res)=>{
    res.send('hello this is home page')
})
app.get('/about',middleWareForAbout,(req,res)=>{
    res.send('hello this is about page')
})
app.listen(1000,()=>{
    console.log('server is listening at port 1000');
})