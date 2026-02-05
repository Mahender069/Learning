const mongoose=require('mongoose');

const connectToDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB successfully');
    }catch(error){
        console.log('Failed to connect MongoDB');
        console.error(error)
    }
}

module.exports=connectToDB;