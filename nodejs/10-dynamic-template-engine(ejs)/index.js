const express=require('express');
const path=require('path');

const app=express();

//set the view engine as ejs
app.set('view engine','ejs')

//set the directory for the views
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    res.render('home',{title:'Home Page'});
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'});
})

app.listen(1000,()=>{
    console.log('server is running');
})

