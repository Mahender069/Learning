const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// register Controller
const registerUser = async (req, res) => {
  try {
    //extracting user info from request body
    const { username, email, password, role } = req.body;

    // checking if user or email already exist
    const isExist = await User.findOne({ $or: [{ username }, { email }] });
    if (isExist) {
      res.status(400).json({
        success: false,
        message:
          "User or Email id already registered. Please with register with other name or email",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassoword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassoword,
      role: role || "User",
    });

    if (newUser) {
      res.status(201).json({
        success: true,
        messsage: "User is registered successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to register user please try again",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong Please try again!",
    });
  }
};

// login Controller
const loginUser = async (req, res) => {
  try {
    //get username and password from the req.body
    const { username, password } = req.body;

    // checking whether the user is present or not
    const isUserPresent = await User.findOne({ username });
    if (!isUserPresent) {
      res.status(400).json({
        success: false,
        message: "Invalid Creditionals",
      });
      return;
    }
    //checking the password is correct or not
    const isPasswordMatching = await bcrypt.compare(
      password,
      isUserPresent.password,
    );
    if (!isPasswordMatching) {
      res.status(400).json({
        success: false,
        message: "Invalid Creditionals",
      });
      return;
    }
    //create user token
    const accessToken = jwt.sign(
      {
        userId: isUserPresent._id,
        username,
        role: isUserPresent.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      },
    )
    res.status(200).json({
      sucess:true,
      message:'User is logged in successfully',
      accessToken
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong Please try again!",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
