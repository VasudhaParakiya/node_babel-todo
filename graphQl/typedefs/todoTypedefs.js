import { gql } from "apollo-server";

const toDoTypeDefs = gql`
  type ToDo {
    _id: ID
    title: String
    message: String
  }

  input todoInput {
    title: String
  }

  input updateToDo {
    _id: ID
    title: String
  }

  type delMsg {
    message: String
  }

  type Query {
    getToDo: [ToDo!]!
  }

  type Mutation {
    addToDo(input: todoInput): ToDo
    updateToDo(input: updateToDo): ToDo
    deleteToDo(_id: ID): delMsg
  }
`;

export default toDoTypeDefs;
