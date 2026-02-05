const express = require("express");
const authMiddleWare = require("../middleware/auth-middleware");
const adminMiddleWare = require("../middleware/admin-middleware");
const uploadMiddleWare = require("../middleware/upload-middleware");
const {
  uploadImageController,
  getAllImagesController,
  deleteImageController,
} = require("../controllers/image-controllers");

const router = express.Router();

//upload image route
router.post(
  "/upload",
  authMiddleWare,
  adminMiddleWare,
  uploadMiddleWare.single("image"),
  uploadImageController,
);
//get all images routes
router.get("/get", authMiddleWare, getAllImagesController);

//delete an image routes.
router.delete(
  "/delete/:id",
  authMiddleWare,
  adminMiddleWare,
  deleteImageController,
);

module.exports = router;
