const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
//registerController
const registerController = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const currentUser = await User.findOne({ $or: [{ username }, { email }] });
    if (currentUser) {
      res.status(200).json({
        success: false,
        message:
          "username or email is already registered please try with other",
      });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const createdUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role,
      });
      if (!createdUser) {
        res.status(500).json({
          success: false,
          message: "Something went Wrong please try again",
        });
        return;
      }
      res.status(200).json({
        success:true,
        message:'User is Registered Successfully'
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went Wrong please try again",
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong please try again",
    });
  }
};
//loginController
const loginController = async (req, res) => {
    const {username,password}=req.body;

    //checking username is in database
    const currentUser=await User.findOne({username});
    if(!currentUser){
        res.status(404).json({
            success:false,
            message:'User is not Present in DB please register first'
        })
        return;
    }

    //checking the password with hashedPassword
    const isMatch=await bcrypt.compare(password,currentUser.password)
    if(!isMatch){
        res.status(401).json({
            success:false,
            message:'Wrong Password please try again'
        })
        return;
    }
    
    const token=jwt.sign({
        id:currentUser._id,
        username,
        role:currentUser.role
    },process.env.JWT_SECRET_KEY,{
        expiresIn:'15m'
    })

    res.status(200).json({
        success:true,
        message:`${username} is Logged in Successfully`,
        token
    })
};
// change Password
const changePassword=async(req,res)=>{
  try {
    const userId=req.userInfo.id;
    
    //extract oldpassword and newpassword from the frontend (if old and new passwords are equal they are validated in frontend)
    const{oldPassword,newPassword}=req.body;


    //find the current user in database
    const user= await User.findById(userId);
    console.log('from change controller');
    console.log(user);

    if(!user){
      res.status(400).json({
        success:false,
        message:'User not found'
      })
    }
    
    //check the old password is correct
    const isMatch=await bcrypt.compare(oldPassword,user.password);

    if(!isMatch){
      res.status(400).json({
        sucess:false,
        message:'Old password is not correct please try again!!!'
      })
    }

    //hash the new password 
    const salt=await bcrypt.genSalt(10);
    const newHashedPassoword=await bcrypt.hash(newPassword,salt);

    user.password= newHashedPassoword;


    await user.save();

    res.status(200).json({
      success:true,
      message:'User password created successfully '
    })


  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went Wrong please try again",
    });
  }
}

module.exports = { registerController, loginController,changePassword };
