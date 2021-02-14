import { GETcar_table} from "./db";

const resolvers = {
  Query: {
    car_table_all: (_, { id }) => GETcar_table(id),
    car_table_number: (_, { col }) => GETcar_table(col)
  }
};


export default resolvers;
