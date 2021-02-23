import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '8080',
  password : 'mysql6812',
  database : 'testDB',
});

connection.connect();

const server = new GraphQLServer({
  typeDefs: `
  type Car_table {
    car_id: ID!
    car_number: String
    time: String
    weight:Int
    car_img: String
  }
  type Query {
    car_table_all(car_id: ID) : [Car_table]
    car_table_number(car_number: String) : [Car_table]
  }
  `,
  resolvers
});

server.start(() => console.log("GraphQL Server Running"));

export default connection;
