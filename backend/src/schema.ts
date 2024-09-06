// src/schema.ts
import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    coin_balance: Int!
  }

  type Query {
    getUser(username: String!): User
  }

  type Mutation {
    createUser(username: String!): User
    updateCoinBalance(username: String!, amount: Int!): User
  }
`;
