require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to mongodb");
  } catch (error) {
    console.log("failed to connect to mongodb");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDB;
