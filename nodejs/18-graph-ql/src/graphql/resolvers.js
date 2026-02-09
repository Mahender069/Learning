const Product = require("../models/Product");
const resolvers = {
  Query: {
    products: async () => await Product.find({}),
    productById: async (_, { id }) => await Product.findById(id),
  },
  Mutation: {
    createProduct: async (_, { title, category, price, inStock }) => {
      const newProduct = await Product.create({
        title,
        category,
        price,
        inStock,
      });

      return newProduct;
    },
    deleteProduct: async(_, { id }) => {
      const product=await Product.findByIdAndDelete(id);
      return product;
    },
    updateProduct: async (_, { id, ...updates }) => {
      return await Product.findByIdAndUpdate(id,updates,{new:true})
    },
  },
};
module.exports = resolvers;
