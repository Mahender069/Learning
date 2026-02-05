const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Failed to upload the file", error);
    throw new Error("Failed to upload the file");
  }
};

module.exports = {
  uploadToCloudinary,
};
