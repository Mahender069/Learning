// this file will tell what will the structure of the data

const { gql } = require("graphql-tag");

/*
    BASIC DATA TYPES IN QRAPHQL
    String
    Int
    Float
    Boolean
    ID -> unique identifier
    
    !-> denotes the field is mandoratory
*/

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }
  type Query {
    products: [Product!]!
    productById(id: ID): Product
  }
  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product
    deleteProduct(id: ID!): Product
    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;
