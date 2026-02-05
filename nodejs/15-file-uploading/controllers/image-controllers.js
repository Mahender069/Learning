const Image = require("../models/Image");
const { uploadToCloudinary } = require("../helpers/cloudinaryHelpers");
const cloudinary = require("../config/cloudinary");

// uploadImage Controller
const uploadImageController = async (req, res) => {
  try {
    //check if file is missing in req body
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "File is required. Please upload the image",
      });
    }
    //upload to cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    // store the image url and public id along with the uploaded user id in the database
    const newImage = await Image.create({
      url,
      publicId,
      uploadedBy: req.userInfo.id,
    });
    res.status(201).json({
      sucess: true,
      message: "Image Uploaded Succesfullly",
      image: newImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

//getAllImages Controller
const getAllImagesController = async (req, res) => {
  try {
    // some pagination 
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder == "asc" ? 1 : -1;

    const totalImages=await Image.countDocuments();


    const totalPages=Math.ceil(totalImages/limit);

    const sortObj={};
    sortObj[sortBy]=sortOrder;

    const allImages = await Image.find({}).sort(sortObj).limit(limit).skip(skip);
    if (!allImages) {
      res.status(404).json({
        success: false,
        message: "Cannot get Images",
      });
      return;
    }
    res.status(200).json({
      success: true,
      currentPage:page,
      totalPages:totalPages,
      totalImages: totalImages,
      data:allImages
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
//delete an image Controller
const deleteImageController = async (req, res) => {
  try {
    const imageId = req.params.id;
    const userId = req.userInfo.id;

    const image = await Image.findById(imageId);
    if (!image) {
      res.status(404).json({
        success: false,
        message: "Image not Found",
      });
    }

    //check the current user(admin) uploaded this image in database by comparing user id of logged in user and image id;
    if (image.uploadedBy.toString() !== userId) {
      res.status(403).json({
        sucess: false,
        message: "You aren't authuorized to delete this image",
      });
    }

    //delete this image from cloudinary storage
    cloudinary.uploader.destroy(image.publicId);

    //delete image from  mongodb

    await Image.findByIdAndDelete(imageId);

    res.status(200).json({
      success: false,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: true,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  uploadImageController,
  getAllImagesController,
  deleteImageController,
};
