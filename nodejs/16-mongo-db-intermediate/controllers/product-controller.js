const Product = require("../models/Product");

//first filtering products and grouping product of similar category
const getProductStats = async (req, res) => {
  try {
    const item = await Product.aggregate([
      //stage1
      {
        $match: {
          inStock: true,
          price: {
            $gt: 100,
          },
        },
      },
      //stage2:group documents
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    if (item) {
      res.status(200).json({
        success: true,
        data: item,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some Error Occurred",
    });
  }
};

//product analysis
const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group:{
          _id:null,
          avgPrice:{
            $avg:'$price'
          },
          count:{
            $sum:1
          },
          MaxPrice:{
            $max:'$price',  
          },
          MinPrice:{
            $min:'$price',
          },
        }
      },
      {
        $project:{
          _id:0,
          avgPrice:1,
          count:1,
          MaxPrice:1,
          MinPrice:1,
          priceRange:{
            $subtract:['$MaxPrice','$MinPrice']
          }
        }
      }
    ]);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some Error Occurred",
    });
  }
};
const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Novel",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["fiction", "bestseller"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);

    res.status(200).json({
      sucess: true,
      data: `Inserted ${result.length} sample products`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some Error Occurred",
    });
  }
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
