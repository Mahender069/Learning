const mongoose=require('mongoose')

const connectToDataBase=async ()=>{

    try{
        await mongoose.connect('mongodb+srv://Mahender:Mahender1234@cluster0.uuqagmb.mongodb.net/')
        console.log('Mongodb connected successfully');
    }catch(error){
        console.log('Failed to Connect to MongoDB',error)
        process.exit(1);
    }
}

module.exports=connectToDataBase;