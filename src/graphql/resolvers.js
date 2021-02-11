import { GETcar_table} from "./db";

const resolvers = {
  Query: {
    car_table_all: (_, { col }) => GETcar_table(col)
  }
};


export default resolvers;
