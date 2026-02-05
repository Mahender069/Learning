const mongoose=require('mongoose');


const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Book title is required'],
        trim:[true],
        maxlength:[50,'book title length can\'t exceed 50']
    },
    author:{
        type:String,
        required:[true,'Author name is required'],
        trim:[true],
    },
    year:{
        type:Number,
        required:[true,'Publication year is required'],
        min:[1000,'Year should be atleast 1000'],
        max:[new Date().getFullYear(),'Year cannot be in future']
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
})

module.exports=mongoose.model('Book',BookSchema);