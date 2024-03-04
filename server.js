import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import express from "express";
import dbConnection from "./db/db.js";

import typeDefs from "./graphQl/typedefs/todoTypedefs.js";
import resolvers from "./graphQl/resolver/todoResolver.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is On");
});

app.get("/", (req, res) => {
  res.send("Server is On");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

// Await the server.start() before applying the middleware
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

// Call the startServer function
startServer().then(() => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is Running at: ${port} :)`);
  });
});

dbConnection();
