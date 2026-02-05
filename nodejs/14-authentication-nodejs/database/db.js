const mongoose=require('mongoose')
require('dotenv').config()

const connectToDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongodb succesfully connected');
    } catch (error) {
        console.error('failed to connect to mongodb');
        console.error(error);
        process.exit(1)
    }
}
module.exports=connectToDB;