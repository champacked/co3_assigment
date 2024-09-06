// src/index.ts
import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { makeExecutableSchema } from "@graphql-tools/schema"; // Import the schema creator
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

// Create an executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Create the Yoga instance with the schema
const yoga = createYoga({
  schema, // Pass the schema directly
});

// Create an HTTP server
const server = createServer(yoga);

// Start the server
server.listen(4000, () => {
  console.log("GraphQL Server is running on http://localhost:4000");
});
