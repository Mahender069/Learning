const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://tnmahender_db_user:tnmahender_db_user00@cluster0.ppafejn.mongodb.net/')
    .then(()=>{
        console.log('database succesfully connnected');
    })
    .catch(err => {
        console.log('this is error');
        console.log(err);
    })

//schema for the data
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt:{type:Date,default:Date.now}
});


//create a user model
const User=mongoose.model('User',userSchema);

async function runQueryExamples(params) {
    try{
        // method 1 
        // const newUser=await User.create({
        //     name:'Ravi',
        //     email:'ravi@gmail.com',
        //     age:10,
        //     isActive:true,
        //     tags:['Singer','Sniper']
        // })

        // method 2 with new
        // const newUser=new User({
        //     name:'Ramesh',
        //     email:'uuu13@gmail.com',
        //     age:20,
        //     isActive:true,
        //     tags:['Chef','GrandMaster in chess']
        // })
        // await newUser.save()
        // console.log('successfully created new user');
        // console.log(newUser);

        //getting all users from the documents
        // const allUsers=await User.find({})
        // console.log(allUsers);

        //getting users who are inactive
        // const inActiveUsers=await User.find({isActive:false})
        // console.log(inActiveUsers);

        //getting user by id
        // const findingUserById=await User.findById(newUser._id);
        // const findingUserById=await User.findById('6978dae9d1757c4b4f6b51cd');
        // console.log(findingUserById);


        //getting specific fields
        // const specificFields= await User.find().select('name email -_id')
        // console.log(specificFields);


        //getting limited and skipping some
        // const limitedUsers=await User.find().limit(3).skip(1);
        // console.log(limitedUsers);


        //sorting users based on age
        // const ascendingAges=await User.find().sort({age:1})
        // console.log(ascendingAges);


        //to count documents based on a condition
        // const activeUsers=await User.countDocuments({isActive:true});
        // console.log(activeUsers);
        
        //deleting a user in db
        // const deletedUser=await User.findByIdAndDelete()

        //updating a user in db
        // const updatedUser=await User.findByIdAndUpdate(id,{
        //     $set:{age:100},$push:{tags:'updated'}
        // },{new:true})
    }catch(e){
        console.log('this error try block');
        console.log(e);
    }finally{
        await mongoose.connection.close()
    }
}


runQueryExamples()