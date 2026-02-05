const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['User','Admin'], // only allowed 'user' and 'admin' roles
        default:'User'
    }
},{timestamps:true})

module.exports=mongoose.model('Users',UserSchema);
