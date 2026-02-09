const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
require("dotenv").config();
const connectToDB = require("./database/db");
async function startServer() {
  connectToDB();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const PORT = process.env.PORT;
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });
  console.log(url);
}
startServer();
