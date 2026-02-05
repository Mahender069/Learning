const express=require('express');
const app=express()

app.use(express.json())
const data=[
    {
        id:'1',
        title:'Book 1'
    },
    {
        id:'2',
        title:'Book 2'
    },
    {
        id:'3',
        title:'Book 3'
    },
]
const PORT=1000;

app.get('/',(req,res)=>{
    res.send('hello to home page');
})
app.get('/get',(req,res)=>{
    res.json(data);
})
app.get('/get/:productId',(req,res)=>{
    const {productId}=req.params;
    const search_data=data.find(({id}) => id===productId);
    if(search_data){
        res.status(200).json(search_data);
    }
    else{
        res.status(404).send('Try another book id')
    }
})
app.post('/add/:bookId/:bookTitle',(req,res)=>{
    const newBook={
        id:req.params.bookId,
        title:req.params.bookTitle
    }
    data.push(newBook);
    res.status(200).json({
        message:'Successfully added the book',
        data:data
    })
})

// app.put('/update/:productId/:title',(req,res)=>{
//     const required_book=data.find(({id}) => id === req.params.productId);
//     if(required_book){
//         required_book.title=req.params.title || required_book.title;

//         res.status(200).json({
//             message:`successfully updated book with ${req.params.productId}`,
//             data:required_book
//             }
//         )
//     }
//     else{
//         res.status(404).send('book not found')
//     }
// })
app.put('/update/:productId',(req,res)=>{
    const required_book=data.find(({id}) => id === req.params.productId);
    if(required_book){
        required_book.title=req.body.title || required_book.title;
        res.status(200).json({
            message:`successfully updated book with ${req.params.productId}`,
            data:required_book
            }
        )
    }
    else{
        res.status(404).send('book not found')
    }
})
app.delete('/delete/:productId',(req,res)=>{
    const dataIndex=data.findIndex(({id}) => id==req.params.productId);
    if(dataIndex !== -1){
        const deletedBook=data.splice(1,1);
        res.status(200).json({
            message:`successfully deleted book with ${req.params.productId}`,
            data:deletedBook[0]
        })
    }
    else{
        res.json({
            message:"book not found"
        })
    }
});
app.listen(PORT,()=>{
    console.log('server is running');
})