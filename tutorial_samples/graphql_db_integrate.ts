// // Integrate a database with your GraphQL server to fetch real data.

// // Install Sequelize: 
// // npm install sequelize pg pg-hstore
// // npm install @types/sequelize --save-dev
// // Set Up the Model (models/user.ts): 
// import { Sequelize, Model, DataTypes } from "sequelize";

// const sequelize = new Sequelize("graphql_db", "username", "password", {
//   host: "localhost",
//   dialect: "postgres",
// });

// class User extends Model {
//   public id!: number;
//   public name!: string;
//   public email!: string;
// }

// User.init(
//   {
//     name: { type: DataTypes.STRING, allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false },
//   },
//   { sequelize, tableName: "users" }
// );

// export default User;
// export { sequelize };
// // Update the Schema and Resolvers:
// // Schema: 
// const typeDefs = gql`
//   type User {
//     id: ID!
//     name: String!
//     email: String!
//   }

//   type Query {
//     users: [User]
//   }
// `;
// // Resolvers: 
// import User from "./models/user";

// const resolvers = {
//   Query: {
//     users: async () => await User.findAll(),
//   },
// };

// export default resolvers;