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

connection.query('SELECT * from car_table', (error, results, fields) => {
  if (error) throw error;
  console.table(results);
});


const server = new GraphQLServer({
  typeDefs: `
  type Car_table {
    car_id: Int 
    car_number: String
    ent_time: String
    ext_time: String
    ent_weight: String
    ext_weight: String
  }
  type Query {
    car_table_all(col: Int) : [Car_table]
  }
  `,
  resolvers
});

server.start(() => console.log("GraphQL Server Running"));

export default connection;
