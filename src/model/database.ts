import mongoose  from "mongoose";
// import { log } from "../helpers/index";
// import { UserModel } from "./users/users.model";
// let database: Mongoose.Connection;
// export const connect = () => {
//   // add your own uri below
//   const dbUri = "mongodb+srv://metikenny:<password>@cluster0.s572igf.mongodb.net/?retryWrites=true&w=majority";
//   Mongoose.connect(uri);
//   let database = Mongoose.connection;
//   database.once("open", async () => {
//     console.log("Connected to database");
//   });
//   database.on("error", () => {
//     console.log("Error connecting to database");
//   });
// };
const  DB_URL: any = process.env.DB_URL;
// let DB_URL = 'mongodb+srv://metikenny:<password>@cluster0.s572igf.mongodb.net/?retryWrites=true&w=majority'
export  const connect =  () => {
  try {
    mongoose.connect(DB_URL);
    console.log('Database connected...');
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connect, 5000);
  }
};

